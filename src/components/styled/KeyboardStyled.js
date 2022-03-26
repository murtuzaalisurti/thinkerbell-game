import styled from 'styled-components';

export const KeyboardStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 4rem; */
    font-family: 'Poppins', sans-serif;

    @media screen and (max-width: 35em) {
        width: 90%;
    }

    .typingOutputContain {
        height: 3rem;
        width: 100%;
        background-color: gray;
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--stack-color);
        border: none;
        border-radius: 0.5rem;
    }

    .output{
        color: black;
    }

    #row-1, #row-2, #row-3{
        button {
            width: 2rem;
            height: 2rem;
            padding: 0;

            @media screen and (max-width: 35em) {
            width: fit-content;
            height: fit-content;
            padding: 0.45rem;
        }
        }
    }
    button{
        border: 0.1rem solid transparent;
        outline: none;
        margin: 0.25rem;
        padding: 0.5rem;
        background-color: var(--secondary-color);
        color: var(--primary-color);
        border-radius: 0.15rem;

        @media screen and (max-width: 35em) {
            width: fit-content;
            height: fit-content;
            padding: 0.5rem;
            font-size: 0.9rem;
            margin: 0.2rem;
        }
    }
`; 