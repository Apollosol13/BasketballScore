import React, { useState } from 'react';
import { Plus, Minus, RotateCcw, ShoppingBasket as Basketball } from 'lucide-react';

function App() {
  const [markoScore, setMarkoScore] = useState(0);
  const [brennenScore, setBrennenScore] = useState(0);

  const handleScore = (player: 'marko' | 'brennen', increment: boolean) => {
    if (player === 'marko') {
      setMarkoScore(prev => increment ? prev + 1 : Math.max(0, prev - 1));
    } else {
      setBrennenScore(prev => increment ? prev + 1 : Math.max(0, prev - 1));
    }
  };

  const resetScores = () => {
    setMarkoScore(0);
    setBrennenScore(0);
  };

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-slate-900 rounded-lg p-8 shadow-2xl relative overflow-hidden">
        {/* Chalk dust effect */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519972064555-542444e71b54?auto=format&fit=crop&q=80')] bg-cover mix-blend-overlay"></div>
        
        <div className="relative">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 font-mono flex items-center justify-center gap-3">
              <Basketball className="text-orange-400" />
              Basketball Score Board
              <Basketball className="text-orange-400" />
            </h1>
            <button 
              onClick={resetScores}
              className="text-slate-400 hover:text-white flex items-center gap-2 mx-auto transition-colors"
            >
              <RotateCcw size={16} /> Reset Scores
            </button>
          </div>

          {/* Score Board */}
          <div className="grid grid-cols-2 gap-8">
            {/* Marko's Side */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4 font-mono">Marko</h2>
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-6xl font-bold text-white mb-4">{markoScore}</div>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => handleScore('marko', true)}
                    className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-full transition-colors"
                  >
                    <Plus className="text-green-400" />
                  </button>
                  <button
                    onClick={() => handleScore('marko', false)}
                    className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-colors"
                  >
                    <Minus className="text-red-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Brennen's Side */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4 font-mono">Brennen</h2>
              <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-6xl font-bold text-white mb-4">{brennenScore}</div>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => handleScore('brennen', true)}
                    className="p-2 bg-green-500/20 hover:bg-green-500/30 rounded-full transition-colors"
                  >
                    <Plus className="text-green-400" />
                  </button>
                  <button
                    onClick={() => handleScore('brennen', false)}
                    className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-colors"
                  >
                    <Minus className="text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;