import styled from 'styled-components'

export const Stack = styled.div`
    /* max-width: fit-content; */
    width: 10rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    background-color: var(--stack-color);
    color: var(--text-color);
    /* margin: 2.5rem 0; */
    height: 17.5rem;
    max-height: fit-content;
    font-family: 'Poppins', sans-serif;
    border: none;
    border-radius: 0.3rem;
    overflow: hidden;

    .word{
        font-size: 1rem;
        width: 100%;
        text-align: center;
        padding: 1rem 1rem 1rem 1rem;
        background-color: var(--tertiary-color);

        &:last-child{
            margin-top: 1rem;
        }
    }
`;