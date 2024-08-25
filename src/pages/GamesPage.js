import { motion } from 'framer-motion';

const GamesPage = () => {
  return (
    <div className="bg-green-50 min-h-screen p-10">
      <h2 className="text-4xl font-bold text-green-600 text-center">Play Krishna's Games</h2>
      <div className="grid grid-cols-2 gap-8 mt-10">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-2xl font-bold text-blue-600">Catch the Butter</h3>
          <p className="text-lg text-gray-700 mt-4">Help Krishna catch the falling butter pots!</p>
          <img src="/images/game-butter.png" alt="Catch the Butter" className="w-1/2 mx-auto mt-4" />
          <button
            className="mt-6 bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500"
            onClick={() => alert('Game starting soon!')}
          >
            Play Now
          </button>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-2xl font-bold text-red-600">Match the Flutes</h3>
          <p className="text-lg text-gray-700 mt-4">Match the flutes to Krishna’s favorite tunes!</p>
          <img src="/images/game-flute.png" alt="Match the Flutes" className="w-1/2 mx-auto mt-4" />
          <button
            className="mt-6 bg-red-400 text-white p-3 rounded-lg hover:bg-red-500"
            onClick={() => alert('Game starting soon!')}
          >
            Play Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GamesPage;
