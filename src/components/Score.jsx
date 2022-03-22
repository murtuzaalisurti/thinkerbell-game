import React from 'react'
import { ScoreMultiplierContainer, ScoreContainer, MultiplierContainer } from './styled/ScoreStyled';

const Score = ({ score, multiplier }) => {
    return (
        <ScoreMultiplierContainer>
            <ScoreContainer className="score-contain">
                <div className="score-heading">Score</div>
                <div className="total-score">{score}</div>
            </ScoreContainer>
            <MultiplierContainer className="multiplier-contain">
                <div className="multiplier-heading">Multiplier</div>
                <div className="multiplier">x {multiplier}</div>
            </MultiplierContainer>
        </ScoreMultiplierContainer>
    )
}

export default Score