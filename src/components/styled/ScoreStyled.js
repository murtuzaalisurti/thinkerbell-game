import styled from 'styled-components'

export const ScoreMultiplierContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 2rem 0rem;
    font-family: 'Poppins', sans-serif;
    color: white;
`;

export const ScoreContainer = styled.div`
    background-color: var(--tertiary-color);
    padding: 1rem;
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0.5rem;

    .score-heading, .multiplier-heading {
        padding-right: 1rem;
    }

    .total-score, .multiplier{
        font-size: 1.5rem;
    }
`;

export const MultiplierContainer = styled(ScoreContainer)`
    
`;