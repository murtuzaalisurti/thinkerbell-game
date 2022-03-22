import React from 'react'
import {GameOverContainer} from './styled/GameOverStyled';

const GameOver = () => {
    return (
        <>
            <GameOverContainer className="game-over" style={{ display: 'none' }}>
                <div className="game-over-message"></div>
                <div className="replay">
                    <button className="replay-btn">Play Again?</button>
                </div>
            </GameOverContainer>
        </>
    )
}

export default GameOver