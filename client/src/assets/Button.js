import styled from "styled-components";

const Button = styled.button`
    color: var(--color-secondary);
    //background: var(--color-secondary);
    background: rgba(0,0,0,.12);
    border: 2px solid var(--color-secondary);
    font-weight: 500;
    padding: .8rem 2.6rem;
    border-radius: 50px;
    transition: all .5s ease;

    &:hover{
        background: var(--color-secondary);
        color: var(--color-white);
        border: 2px solid transparent;
    }
`  

export default Button