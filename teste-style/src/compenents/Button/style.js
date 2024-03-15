import styled , { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #c7c7c7;
    border-radius: 25px;
    position:relative;

    padding: 5px 10px;
    min-width:120px;
    width:100%;


    ${({variant} ) =>  variant !== 'primary' && css`

        min-width:167px;
        height: 33px;
        background : #E41050;


        &::after {
            content : '';
            position : relative;
            border: 1px solid black;
            top: -5px;
            left: -6px;
            width:calc(100% - 10px;);
            height:calc(100% +  10px);
            border-radius: 25px;
       
        }

    
    `}
    

`
