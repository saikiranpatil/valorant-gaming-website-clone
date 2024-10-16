import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'The Rise of Valorant: A Game-Changer in Competitive FPS',
      date: 'October 15, 2024',
      author: 'Aaditya Devadiga',
      content: `
        Valorant has quickly become a household name in the competitive gaming scene. Released in June 2020 by Riot Games, this tactical first-person shooter has captured the hearts of players worldwide. With its unique blend of character abilities and precise gunplay, Valorant offers a refreshing take on the FPS genre.

        One of the most significant factors contributing to Valorant's success is its character-driven gameplay. Each agent has unique abilities that can turn the tide of battle, making team composition crucial. This dynamic encourages players to experiment with different strategies, keeping the gameplay fresh and exciting.

        Moreover, Valorant's emphasis on teamwork sets it apart from other shooters. Coordination and communication are vital, as players must work together to secure objectives and outsmart opponents. This fosters a sense of community among players, with many forming long-lasting friendships through the game.

        As the competitive scene continues to grow, more players are looking to buy accounts that reflect their skills and dedication. Our Valorant ID Marketplace offers a platform for players to buy and sell accounts securely, ensuring that everyone can find the perfect account to match their playstyle. 

        Whether you're a seasoned veteran looking to expand your collection or a newcomer eager to dive into the game, our marketplace has something for everyone. Join the Valorant revolution today and elevate your gaming experience!
      `,
    },
    {
      title: 'Tips for Climbing the Ranks in Valorant',
      date: 'October 10, 2024',
      author: 'Jane Smith',
      content: `
        Climbing the ranks in Valorant can be a challenging journey, but with the right strategies and mindset, you can achieve your desired rank. Here are some tips to help you on your journey:

        1. **Master Your Agents**: Focus on a few agents and learn their abilities inside out. Understanding how to use their skills effectively can significantly impact your gameplay.

        2. **Communication is Key**: Valorant is a team-based game, so communicating with your teammates is essential. Use voice chat or the in-game ping system to share information about enemy locations and strategies.

        3. **Practice Your Aim**: Consistent aim is crucial in Valorant. Spend time in aim trainers or practice in the shooting range to improve your accuracy and reflexes.

        4. **Watch and Learn**: Analyze your gameplay and watch professional players to learn new strategies and techniques. You can gain valuable insights into positioning, agent synergy, and game sense.

        5. **Stay Positive**: Rank climbing can be frustrating at times. Maintaining a positive mindset and focusing on improvement rather than solely on winning can enhance your experience.

        Remember, every player was a beginner once. With dedication and practice, you'll find yourself climbing the ranks and enjoying all that Valorant has to offer!
      `,
    },
    {
      title: 'Valorant Game Sense & Aiming: Mastering the Art of Competitive Play 🎯',
      date: 'October 16, 2024',
      author: 'Sandesh Bramhane',
      content: `
        In Valorant, climbing the ranks isn't just about aiming better—it’s about mastering your game sense and strategic play. While flashy kills and highlight-worthy moments are great, consistency in decision-making and sharpening your mechanics will take your gameplay to the next level. Ready to dominate? Let’s dive into some essential tips to elevate your game sense and aiming skills! 💥

        1. 🧠 **Develop Your Game Sense**: 
        Game sense is your ability to predict enemy moves, make smart plays, and always be one step ahead. Here’s how to refine it:
        - Map Awareness: Know the maps like the back of your hand.
        - Economy Management: Learn when to save or force-buy.
        - Crosshair Placement: Always keep your crosshair at head level.

        2. 🎯 **Aiming Training: The Path to Precision**:
        Improving aim takes dedication. Use tools like Aim Lab or Valorant's shooting range to perfect your mechanics.

        3. 💪 **Keep the Right Mentality**:
        Valorant can be mentally challenging. Stay positive, learn from your losses, and avoid tilt!
      `,
    },
  ];

  return (
    <div className="blog bg-gradient-to-b from-gray-900 to-black text-white py-10 px-5 lg:px-20">
      <h1 className="text-center text-3xl sm:text-5xl text-red-500 font-extrabold mb-8 sm:mb-14 tracking-widest uppercase">
        Valorant ID Marketplace Blog
      </h1>
      <div className="space-y-8 sm:space-y-10">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-800 p-5 sm:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out"
          >
            <h2 className="text-xl sm:text-3xl text-red-500 font-bold mb-2 sm:mb-4">
              {post.title}
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              By {post.author} | {post.date}
            </p>
            <p className="text-sm sm:text-lg leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
