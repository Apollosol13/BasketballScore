import { useScores } from '../hooks/useScores'
import { useEffect } from 'react'

export function Game() {
  const userId = 'user123' // Replace with actual user ID management
  const { scores, saveScore } = useScores(userId)

  // Add this to your existing game logic where the game ends
  useEffect(() => {
    const handleGameEnd = (event: CustomEvent) => {
      handleGameOver(event.detail.score)
    }
    
    window.addEventListener('gameOver', handleGameEnd as EventListener)
    return () => window.removeEventListener('gameOver', handleGameEnd as EventListener)
  }, [])

  const handleGameOver = (finalScore: number) => {
    saveScore(finalScore)
  }

  return (
    <div>
      {/* Your game UI */}
      <div>
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