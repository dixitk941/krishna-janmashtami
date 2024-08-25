import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StoryPage = () => {
  const [page, setPage] = useState(0);

  const pages = [
    {
      title: "The Birth of Krishna",
      content: "Krishna was born in a prison cell in the city of Mathura, where his parents, Devaki and Vasudeva, were imprisoned by Devaki's brother, King कंस. कंस had heard a prophecy that Devaki's eighth son would kill him, and so he had imprisoned the couple to prevent the birth. However, on the night of Krishna's birth, Vasudeva was able to escape with the baby and cross the Yamuna River to safety, where he was raised by his foster parents, Nanda and Yashoda, in the village of Vrindavan.",
      videoUrl: "https://www.youtube.com/embed/1CcjCPzTr5Q"
    },
    {
      title: "Childhood in Vrindavan",
      content: "Krishna grew up in Vrindavan, surrounded by the love of his foster parents and the adoration of the villagers. He was a mischievous child, known for his pranks and adventures, but he was also deeply spiritual and wise beyond his years. He spent his days playing with the other children, tending to the cows, and learning from the wise men of the village.",
      videoUrl: "https://www.youtube.com/embed/MW_k4ZrGuVI"
    },
    {
      title: "Rasa Lila: The Divine Dance",
      content: "Krishna's time in Vrindavan was marked by his divine dance, the Rasa Lila, in which he danced with the gopis (milkmaids) under the light of the full moon. This dance was a manifestation of his divine love and a symbol of the union between the individual self and the universal self.",
      videoUrl: "https://www.youtube.com/embed/PC4bpckXmgY"
    },
    {
      title: "Defeating कंस",
      content: "As Krishna grew older, he became aware of his true identity and his destiny. He returned to Mathura to confront King कंस, who had continued to tyrannize the people. Krishna defeated कंस in a fierce battle, freeing his parents and the people of Mathura from his rule.",
      videoUrl: "https://www.youtube.com/embed/-G_qlBCj4L0"
    },
    {
      title: "The Story of Sudama",
      content: "Krishna's friendship with Sudama, a poor brahmin, is a testament to his compassion and humility. When Sudama came to Krishna's court, he was received with warmth and generosity, and Krishna helped him in his time of need.",
      videoUrl: "https://www.youtube.com/embed/1V4ptVPwiIw"
    },
    {
      title: "The Great War",
      content: "Krishna played a crucial role in the great war of Mahabharata, serving as the charioteer of Arjuna and guiding him to victory. He also delivered the famous sermon of the Bhagavad Gita, which is still revered as a sacred text today.",
      videoUrl: "https://www.youtube.com/embed/7zT7LnOvXRs"
    },
    {
      title: "The Curse of Gandhari",
      content: "Gandhari, the queen of Hastinapura, cursed Krishna that he would die at the hands of a hunter, as revenge for the death of her sons in the great war. This curse was fulfilled when Krishna was killed by the hunter's arrow.",
      videoUrl: "https://www.youtube.com/embed/3DM9mBt7syc"
    },
    {
      title: "The Death of Krishna",
      content: "After the war, Krishna returned to Dwarka, where he lived a peaceful life. However, he was eventually killed by a hunter's arrow, which was mistakenly shot at him while he was meditating in the forest. His death marked the end of an era, but his legacy lives on through his teachings and the impact he had on the world.",
      videoUrl: "https://www.youtube.com/embed/ChxJtY84Tic"
    },
    {
      title: "The Legacy of Krishna",
      content: "Krishna's legacy is one of love, compassion, and wisdom. He is remembered as a divine being, a hero, and a symbol of the eternal and the infinite. His teachings continue to inspire and guide millions of people around the world, and his story remains one of the most beloved and enduring tales of all time.",
      videoUrl: "https://www.youtube.com/embed/2dV-H09xJh0" // Placeholder for video 9
    },
    {
      title: "The Reign of the Pandavas",
      content: "After Krishna's departure, the Pandavas, led by Yudhishthira, ruled Hastinapura with wisdom and justice. They established a golden age of peace and prosperity, which was a testament to the enduring legacy of Krishna.",
      videoUrl: "https://www.youtube.com/embed/2dV-H09xJh0" // Placeholder for video 10
    }
  ];

  const handleNextPage = () => {
    setPage((prevPage) => (prevPage + 1) % pages.length);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative flex max-w-4xl w-full h-[600px] bg-white shadow-lg rounded-lg overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex"
          >
            <div className="w-1/2 p-6 bg-gray-50">
              <h3 className="text-2xl font-semibold mb-4">{pages[page].title}</h3>
              <p className="text-gray-700">{pages[page].content}</p>
              <div className="absolute bottom-6 left-6 flex space-x-4">
                <button
                  onClick={handlePrevPage}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded shadow-md hover:bg-gray-400"
                >
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded shadow-md hover:bg-gray-400"
                >
                  Next
                </button>
              </div>
            </div>
            <div className="w-1/2 bg-gray-200 flex justify-center items-center">
              <iframe
                width="560"
                height="315"
                src={pages[page].videoUrl}
                title={pages[page].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StoryPage;
