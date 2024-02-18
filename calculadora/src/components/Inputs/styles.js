import styled from 'styled-components';

//Componentes de entrada de input
export const InputContainer = styled.div`
    width:100%;
    height:75px;
    background-color:#F2F3D0;
    display:flex;
    align-items:end;

  
    input{
        width:100%;
        height:75px;
        background-color:#F2F3D0;
        font-size:40px;
        padding:0 10px;
    }   

    &:hover {
        opacity :0.7;
    }
`