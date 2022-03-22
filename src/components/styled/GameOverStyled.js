import styled from 'styled-components';

export const GameOverContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;

    .game-over-message, .replay{
        display: flex;
        justify-content: center;
        text-align: center;
        padding: 1rem 1rem 0.5rem 1rem;
    }

    .game-over-message {
        font-size: 2rem;
    }

    .replay-btn{
        background-color: var(--secondary-color);
        outline: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem 1rem;
        font-family: 'Poppins', sans-serif;
        border-radius: 1rem;
    }
`;