import styled from 'styled-components';

export const KeyboardStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .typingOutputContain {
        height: 3rem;
        width: 100%;
        background-color: gray;
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .output{
    }

    button{
        border: 0.1rem solid transparent;
        outline: none;
        margin: 0.2rem;
        padding: 0.5rem;
    }
`; 