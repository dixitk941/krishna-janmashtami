import { SketchPicker } from 'react-color';
import { useState } from 'react';

const ColoringPage = () => {
  const [color, setColor] = useState('#000000');
  
  return (
    <div className="bg-pink-50 min-h-screen p-10 text-center">
      <h2 className="text-4xl font-bold text-pink-600 mb-6">Color Krishna's World!</h2>
      <SketchPicker color={color} onChangeComplete={(color) => setColor(color.hex)} />
      <canvas id="coloring-canvas" className="bg-white border mt-6" style={{ width: '100%', height: '400px' }}></canvas>
      <button
        className="mt-6 bg-pink-400 text-white p-3 rounded-lg hover:bg-pink-500"
        onClick={() => alert('Save functionality coming soon!')}
      >
        Save My Art
      </button>
    </div>
  );
};

export default ColoringPage;
