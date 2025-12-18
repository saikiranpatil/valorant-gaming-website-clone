import { v4 as uuidv4 } from 'uuid';
import { onSnapshot } from 'firebase/firestore';
import { serverTimestamp } from "firebase/firestore";

import { 
  collection, 
  getDocs, 
  getDoc,
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc,
  orderBy,
  query,
  collection, 
  onSnapshot, 
  serverTimestamp, 
  
} from "firebase/firestore";
import { 
  ref, 
  uploadBytes, 
  getDownloadURL, 
  deleteObject
} from "firebase/storage";
import { db, storage } from "../firebase/config"; // Updated path for your structure

// Collection name for products
const PRODUCTS_COLLECTION = "products";

/**
 * Fetch all products from Firestore
 * @returns {Promise<Array>} Array of products with proper image URLs
 */
export const fetchProducts = async () => {
  try {
    console.log("🔄 Fetching products from Firestore...");
    
    // Create query to get products, optionally ordered by creation time
    const productsQuery = query(
      collection(db, PRODUCTS_COLLECTION),
      // You can add orderBy here if you have a timestamp field
      // orderBy("createdAt", "desc")
    );
    
    const querySnapshot = await getDocs(productsQuery);
    
    if (querySnapshot.empty) {
      console.log("⚠️ No products found in Firestore");
      return [];
    }
    
    const products = [];
    
    querySnapshot.forEach((doc) => {
      const productData = doc.data();
      
      const product = {
  id: doc.id,
  name: productData.name || productData.title || "Unnamed Product",
  price: Number(productData.price) || 0,
  description: productData.description || "",
  productImage: productData.imageUrl || null,  // ✅ FIXED LINE
  category: productData.category || "General",
  stock: productData.stock || 0,
  createdAt: productData.createdAt || null,
  ...productData
};

      
      products.push(product);
      
      // Debug log for each product
      console.log(`📦 Product: ${product.name}, Image URL: ${product.image}`);
    });
    
    console.log(`✅ Successfully fetched ${products.length} products`);
    return products;
    
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    throw new Error("Failed to fetch products from database");
  }
};

/**
 * Add a new product to Firestore
 * @param {Object} productData - Product data including image file
 * @returns {Promise<Object>} Added product data
 */
export const addProduct = async (productData) => {
  try {
    console.log("🔄 Adding new product...", productData);
    
    let imageUrl = null;
    
    // If there's an image file, upload it first
    if (productData.imageFile) {
      imageUrl = await uploadProductImage(productData.imageFile, productData.name);
    }
    
    // Prepare product data for Firestore
    const productToAdd = {
      name: productData.name,
      price: Number(productData.price),
      description: productData.description || "",
      category: productData.category || "General",
      stock: Number(productData.stock) || 0,
      productImage: imageUrl, // This will be the Firebase Storage URL
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // Add to Firestore
    const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), productToAdd);
    
    console.log("✅ Product added with ID:", docRef.id);
    
    return {
      id: docRef.id,
      ...productToAdd
    };
    
  } catch (error) {
    console.error("❌ Error adding product:", error);
    throw new Error("Failed to add product to database");
  }
};

/**
 * Upload product image to Firebase Storage
 * @param {File} imageFile - Image file to upload
 * @param {string} productName - Product name for file naming
 * @returns {Promise<string>} Download URL of uploaded image
 */
export const uploadProductImage = async (imageFile, productName = "product") => {
  try {
    console.log("🔄 Uploading image...", imageFile.name);
    
    // Create a unique filename
    const timestamp = Date.now();
    const fileName = `products/${productName.replace(/[^a-zA-Z0-9]/g, '_')}_${timestamp}_${imageFile.name}`;
    
    // Create storage reference
    const storageRef = ref(storage, fileName);
    
    // Upload file
    const snapshot = await uploadBytes(storageRef, imageFile);
    console.log("📤 Image uploaded successfully");
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log("✅ Image URL generated:", downloadURL);
    
    return downloadURL;
    
  } catch (error) {
    console.error("❌ Error uploading image:", error);
    throw new Error("Failed to upload product image");
  }
};

/**
 * Update an existing product
 * @param {string} productId - Product ID to update
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object>} Updated product data
 */
export const updateProduct = async (productId, updateData) => {
  try {
    console.log("🔄 Updating product:", productId);
    
    let imageUrl = updateData.image; // Keep existing image by default
    
    // If there's a new image file, upload it
    if (updateData.imageFile) {
      imageUrl = await uploadProductImage(updateData.imageFile, updateData.name);
      
      // Optionally delete old image if it exists and is a Firebase Storage URL
      if (updateData.oldImageUrl && updateData.oldImageUrl.includes('firebase')) {
        try {
          await deleteProductImage(updateData.oldImageUrl);
        } catch (error) {
          console.warn("⚠️ Could not delete old image:", error);
        }
      }
    }
    
    const productUpdate = {
      ...updateData,
      productImage: imageUrl,
      updatedAt: new Date().toISOString(),
      // Remove file objects from the update
      imageFile: undefined,
      oldImageUrl: undefined
    };
    
    // Clean undefined values
    Object.keys(productUpdate).forEach(key => {
      if (productUpdate[key] === undefined) {
        delete productUpdate[key];
      }
    });
    
    const docRef = doc(db, PRODUCTS_COLLECTION, productId);
    await updateDoc(docRef, productUpdate);
    
    console.log("✅ Product updated successfully");
    
    return {
      id: productId,
      ...productUpdate
    };
    
  } catch (error) {
    console.error("❌ Error updating product:", error);
    throw new Error("Failed to update product");
  }
};

/**
 * Delete a product from Firestore
 * @param {string} productId - Product ID to delete
 * @param {string} imageUrl - Image URL to delete from storage
 * @returns {Promise<void>}
 */
export const deleteProduct = async (productId, imageUrl = null) => {
  try {
    console.log("🔄 Deleting product:", productId);
    
    // Delete image from storage if exists
    if (imageUrl && imageUrl.includes('firebase')) {
      try {
        await deleteProductImage(imageUrl);
        console.log("✅ Product image deleted from storage");
      } catch (error) {
        console.warn("⚠️ Could not delete product image:", error);
      }
    }
    
    // Delete document from Firestore
    await deleteDoc(doc(db, PRODUCTS_COLLECTION, productId));
    console.log("✅ Product deleted from database");
    
  } catch (error) {
    console.error("❌ Error deleting product:", error);
    throw new Error("Failed to delete product");
  }
};

/**
 * Delete product image from Firebase Storage
 * @param {string} imageUrl - Full Firebase Storage URL
 * @returns {Promise<void>}
 */
export const deleteProductImage = async (imageUrl) => {
  try {
    // Extract the file path from the URL
    const url = new URL(imageUrl);
    const filePath = decodeURIComponent(url.pathname.split('/o/')[1].split('?')[0]);
    
    const imageRef = ref(storage, filePath);
    await deleteObject(imageRef);
    
    console.log("✅ Image deleted from storage");
    
  } catch (error) {
    console.error("❌ Error deleting image:", error);
    throw error;
  }
};

/**
 * Get a single product by ID
 * @param {string} productId - Product ID
 * @returns {Promise<Object|null>} Product data or null if not found
 */
export const getProduct = async (productId) => {
  try {
    const docRef = doc(db, PRODUCTS_COLLECTION, productId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      console.log("No such product!");
      return null;
    }
  } catch (error) {
    console.error("Error getting product:", error);
    throw new Error("Failed to get product");
  }
};
// service/firebaseService.js

// Upload review with optional image
export const uploadReview = async ({ name, review, rating }) => {
  const reviewData = {
    name,
    review,
    rating,
    createdAt: serverTimestamp(),
  };

  await addDoc(collection(db, 'reviews'), reviewData);
};

// Subscribe to real-time reviews
export const subscribeToReviews = (callback) => {
  // Create a query to the 'reviews' collection, ordered by the 'createdAt' timestamp
  const reviewsQuery = query(
    collection(db, 'reviews'),
    orderBy('createdAt', 'desc') // ⬅️ Change this to order by 'createdAt'
  );

  // Listen to the query in real-time
  return onSnapshot(reviewsQuery, (snapshot) => {
    const fetched = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    // The data is already sorted by the query, so this line is no longer needed.
    // fetched.sort((a, b) => b.timestamp?.seconds - a.timestamp?.seconds);
    
    callback(fetched);
  });
};