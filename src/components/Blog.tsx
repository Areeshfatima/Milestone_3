"use client";
import React, { useState } from "react";

interface BlogCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  onReadMore: () => void;
}

interface BlogPostType {
  id: number;
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

const BlogCard = ({
  imageSrc,
  altText,
  title,
  description,
  onReadMore,
}: BlogCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:shadow-gray-700">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
        {title}
      </h2>
      <p className="text-gray-600 mb-4 dark:text-gray-400">{description}</p>
      <button
        onClick={onReadMore}
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition"
      >
        Read More
      </button>
    </div>
  );
};

const BlogPost = () => {
  const posts: BlogPostType[] = [
    {
      id: 1,
      imageSrc: "/badshahimosque.jpg",
      altText: "Badshahi Mosque",
      title: "🕌 Badshahi Mosque (The Mughal Marvel)",
      description:
        "The Badshahi Mosque is a masterpiece of Mughal architecture and stands as one of the largest mosques in the world. Built in 1673 by Emperor Aurangzeb, the mosque features intricate marble inlays, grand arches, and towering minarets that highlight the glory of the Mughal Empire. Situated in Lahore, Punjab, the mosque can hold up to 55,000 worshippers, making it not only an architectural wonder but also a cultural and religious hub. The Badshahi Mosque, along with the Lahore Fort nearby, is a UNESCO World Heritage Site, embodying the splendor and grandeur of Mughal architecture.",
    },
    {
      id: 2,
      imageSrc: "/lahorefort.jpg",
      altText: "Lahore Fort",
      title: "🏰 Lahore Fort and Shalimar Gardens (The Mughal Jewels)",
      description:
        "The Lahore Fort is a stunning example of Mughal military architecture, featuring massive walls, grand gates, and intricate palaces. Constructed during various Mughal reigns, its most notable features include the Sheesh Mahal (Palace of Mirrors), Alamgiri Gate, and the Diwan-i-Aam. Shalimar Gardens, built by Emperor Shah Jahan, is another gem located near the fort. These gardens are a fine example of Mughal garden design, with terraced levels, fountains, and exquisite floral patterns. Together, these sites represent the elegance and grandeur of Mughal rule, with both listed as UNESCO World Heritage Sites.",
    },
    {
      id: 3,
      imageSrc: "/moenjodaro.jpg",
      altText: "Mohenjo-Daro",
      title: "🏛️ Mohenjo-Daro (The City of Mounds)",
      description:
        "Mohenjo-Daro, one of the key sites of the ancient Indus Valley Civilization, is located in Sindh province. Dating back to around 2500 BCE, it is among the oldest urban settlements in the world. The city's advanced drainage system, grid-like street layout, and well-planned buildings offer a glimpse into the sophistication of early human civilization. Excavations have revealed impressive artifacts, pottery, and seals, all of which give us a clearer picture of the culture and lifestyle of its inhabitants. Today, it stands as a UNESCO World Heritage Site, offering invaluable insights into the ancient world.",
    },
    {
      id: 4,
      imageSrc: "/hannah lake.jpg",
      altText: "Hanna Lake",
      title: "🏞️ Hannah Lake A Serene Oasis in Quetta",
      description:
        "Hannah Lake is a picturesque retreat surrounded by rugged hills and blessed with turquoise waters that enchant every visitor. Built during the British colonial era to conserve rainwater, the lake has become a cherished landmark for locals and tourists alike. Its serene environment is perfect for activities like boating, hiking, and picnicking, making it a favorite destination for families and adventure seekers. The lake is particularly mesmerizing in spring and summer when the lush greenery enhances its natural charm. Hannah Lake is a must-visit for anyone looking to escape the hustle and bustle of city life and reconnect with nature's beauty.",
    },
    {
      id: 5,
      imageSrc: "/rohtas fort.jpg",
      altText: "Rohtas Fort",
      title: "🏞️ Rohtas Fort (The Mighty Fortress)",
      description:
        "Rohtas Fort, located near Jhelum in Punjab, was built in the 16th century by the Afghan king Sher Shah Suri to block the route of the Mughals. The fort's strategic location and design made it a formidable military stronghold. The fort features large gates, massive walls, and defensive structures, showcasing Sher Shah's military expertise. The fort's architectural style blends Persian, Central Asian, and local designs. Rohtas Fort is recognized as a UNESCO World Heritage Site due to its historical significance and well-preserved state.",
    },
    {
      id: 6,
      imageSrc: "/faisalmosque.jpg",
      altText: "Faisal Mosque",
      title: "🌙 Faisal Mosque A Symbol of Islamic Architecture",
      description:
        "The Faisal Mosque is a stunning blend of modern and traditional Islamic architecture. Completed in 1986 and named after King Faisal of Saudi Arabia, this iconic mosque is one of the largest in the world, with the capacity to accommodate over 100,000 worshippers. Its unique design, inspired by the shape of a Bedouin tent, sets it apart from conventional domed mosques, featuring sharp, angular lines that symbolize innovation and simplicity. The mosque's serene surroundings, combined with its breathtaking structure, offer a tranquil atmosphere for spiritual reflection and make it a popular tourist destination. Visiting Faisal Mosque is a memorable experience, whether for prayer or to admire its architectural brilliance.",
    },
  ];

  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState("");

  const handleReadMore = (post: BlogPostType) => {
    setSelectedPost(post);
    setComments([]);
  };

  const handleAddComment = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          Blog Posts
        </h1>
        {!selectedPost ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                imageSrc={post.imageSrc}
                altText={post.altText}
                title={post.title}
                description={post.description}
                onReadMore={() => handleReadMore(post)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 dark:shadow-gray-700">
            <img
              src={selectedPost.imageSrc}
              alt={selectedPost.altText}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
              {selectedPost.title}
            </h2>
            <p className="text-gray-600 mb-4 dark:text-gray-400">
              {selectedPost.description}
            </p>
            <button
              onClick={() => setSelectedPost(null)}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition mb-4"
            >
              Back to Posts
            </button>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Comments
              </h3>
              <div className="mb-4">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
                <button
                  onClick={handleAddComment}
                  className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition mt-2"
                >
                  Add Comment
                </button>
              </div>
              <ul className="space-y-2">
                {comments.map((comment, index) => (
                  <li key={index} className="text-gray-800 dark:text-gray-200">
                    - {comment}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
