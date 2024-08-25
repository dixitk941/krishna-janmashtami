import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CraftIdeasPage = () => {
  const [selectedIdea, setSelectedIdea] = useState(null);

  const craftIdeas = [
    {
      title: "Krishna's Flute Craft",
      description: "Create a beautiful flute just like Krishna's.",
      details: "Using paper tubes, paint, and decorations, make a flute that represents the divine music played by Krishna. This craft not only celebrates Krishna’s love for music but also makes for a fun and creative activity."
    },
    {
      title: "Peacock Feather Art",
      description: "Design and create peacock feathers to represent Krishna's divine adornment.",
      details: "Peacock feathers are a significant symbol associated with Krishna. Use colorful papers, glitter, and glue to craft peacock feathers that can be used as decorations for Janmashtami celebrations."
    },
    {
      title: "Krishna's Crown Decoration",
      description: "Craft a crown to resemble the one worn by Krishna.",
      details: "Create a decorative crown using materials like paper, beads, and fabric. Decorate it with jewels and colors to mimic the royal and divine crown of Krishna. This crown can be used as a centerpiece for your Janmashtami decorations."
    },
    {
      title: "Clay Idol Making",
      description: "Sculpt a small idol of Krishna using clay.",
      details: "Clay idol making is a traditional and engaging way to create representations of Krishna. Use air-dry clay to sculpt a small idol, which can be painted and decorated for your Janmashtami celebrations."
    }
  ];

  const handleIdeaClick = (idea) => {
    setSelectedIdea(idea);
  };

  const handleBackClick = () => {
    setSelectedIdea(null);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-yellow-200 via-orange-300 to-red-400 overflow-hidden">
      {/* Krishna Themed Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute top-0 right-0 w-1/4 h-auto opacity-30 transform -translate-x-1/4 -translate-y-1/4"
      >
        <g id="krishna">
          <path
            d="M50 10 Q55 20 50 30 Q45 40 50 50 Q55 60 50 70"
            stroke="#00FF00"
            fill="none"
            strokeWidth="2"
          />
          <circle cx="50" cy="10" r="5" fill="#FFD700" />
        </g>
      </svg>

      <div className="flex justify-center items-center min-h-screen p-4 relative z-10">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <AnimatePresence>
            {selectedIdea ? (
              <motion.div
                key="details"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="p-6"
              >
                <h2 className="text-3xl font-semibold mb-4 text-center">{selectedIdea.title}</h2>
                <p className="mb-4 text-gray-700">{selectedIdea.details}</p>
                <button
                  onClick={handleBackClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                >
                  Back to Ideas
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="p-6"
              >
                <h1 className="text-4xl font-bold mb-6 text-center text-white">Janmashtami Craft Ideas</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {craftIdeas.map((idea, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50 p-6 border rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleIdeaClick(idea)}
                    >
                      <h3 className="text-2xl font-semibold mb-2">{idea.title}</h3>
                      <p className="text-gray-600">{idea.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CraftIdeasPage;
