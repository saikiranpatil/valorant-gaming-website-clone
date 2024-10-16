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
  ];

  return (
    <div className="blog bg-dark-gradient text-white py-10 px-5 lg:px-20">
      <h1 className="text-center text-4xl text-red-500 font-bold mb-10">Valorant ID Marketplace Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-800 p-5 rounded-lg shadow-md">
            <h2 className="text-2xl text-red-500 font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400 text-sm mb-2">
              By {post.author} | {post.date}
            </p>
            <p className="text-lg">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
