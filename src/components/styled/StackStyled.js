import styled from 'styled-components'

export const Stack = styled.div`
    /* max-width: fit-content; */
    width: 10rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    background-color: bisque;
    margin: 4rem 0;
    height: 13rem;
    max-height: fit-content;

    .word{
        font-size: 1rem;
        width: 100%;
        text-align: center;
        margin: 0rem 1rem 1rem 1rem;

        &:last-child{
            margin-top: 1rem;
        }
    }
`;