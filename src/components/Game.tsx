import { useScores } from '../hooks/useScores'
import { useState } from 'react'
import '../styles/Game.css'

export function Game() {
  const userId = 'user123' // Replace with actual user ID management
  const { scores, saveScore } = useScores(userId)
  const [currentScore, setCurrentScore] = useState(0)
  const [isGameActive, setIsGameActive] = useState(false)
  const [gameHistory, setGameHistory] = useState<Array<{ score: number, timestamp: Date }>>([])

  // Handle game over
  const handleGameOver = () => {
    if (isGameActive) {
      const gameResult = { score: currentScore, timestamp: new Date() }
      setGameHistory(prev => [...prev, gameResult])
      saveScore(currentScore)
      setIsGameActive(false)
      setCurrentScore(0)
    }
  }

  // Start new game
  const startGame = () => {
    setIsGameActive(true)
    setCurrentScore(0)
  }

  // Update score during gameplay
  const updateScore = (points: number) => {
    if (isGameActive) {
      setCurrentScore(prev => prev + points)
    }
  }

  return (
    <div className="game-container">
      <div className="score-display">
        Current Score: {currentScore}
      </div>

      {!isGameActive ? (
        <button onClick={startGame}>Start Game</button>
      ) : (
        <button onClick={handleGameOver}>End Game</button>
      )}

      {/* Example score buttons - replace with your actual game logic */}
      {isGameActive && (
        <div className="game-controls">
          <button onClick={() => updateScore(10)}>+10 Points</button>
          <button onClick={() => updateScore(50)}>+50 Points</button>
        </div>
      )}

      {/* New Game History Section */}
      <div className="game-history">
        <h3>Today's Games</h3>
        <ul>
          {gameHistory.map((game, index) => (
            <li key={index}>
              Game {index + 1}: {game.score} points - {game.timestamp.toLocaleTimeString()}
            </li>
          ))}
        </ul>
      </div>

      {/* All-time high scores */}
      <div className="high-scores">
        <h3>All-Time High Scores</h3>
        <ul>
          {scores.map((score, index) => (
            <li key={index}>
              Score: {score.score} - {new Date(score.timestamp).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 