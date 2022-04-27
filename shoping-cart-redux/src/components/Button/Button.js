import styled from 'styled-components'

export default styled.button`
    background-color: ${props => props.primary ? "red" : "black"};
    border: none;
    padding: 0.7rem 1rem;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    width: ${props => props.width && props.width};
    :hover{
        cursor: pointer;
    }
`