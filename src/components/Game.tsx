import { useScores } from '../hooks/useScores'
import { useState } from 'react'

export function Game() {
  const userId = 'user123' // Replace with actual user ID management
  const { scores, saveScore } = useScores(userId)
  const [currentScore, setCurrentScore] = useState(0)
  const [isGameActive, setIsGameActive] = useState(false)

  // Handle game over
  const handleGameOver = () => {
    if (isGameActive) {
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

      <div className="high-scores">
        <h3>High Scores</h3>
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