import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
`

export const ChildContainer = styled.div`
    background: linear-gradient(rgba(82, 81, 81, 0.5), rgba(0, 0, 0, 0.5));
    border: 3px solid white;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em;
`