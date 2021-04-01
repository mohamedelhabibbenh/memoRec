import styled, { css } from "styled-components";
import { cols } from "./services/design.service";

export const AbsContainer=styled.div`
    border:1px solid;
    position :absolute;
    z-index:10;
    left:0;
    top:0;
    right:0;
    bottom:0;

    backdrop-filter:blur(4px);
    display :flex;
    align-items:center;
    justify-content:center;

`;

export const BtnClose=styled.div`
    position:absolute;
    left:.5rem;
    top:.5rem;
    z-index:1;
    border:2px solid ${cols.orangy_red};
    border-radius:15px;
    height:1.5rem;
    width:1.5rem;
    text-align:center;
    font-weight:700;
    color:${cols.orangy_red};
    background-color:${cols.white};
    cursor:pointer;
    opacity:.25;
    :hover{
        opacity:1;
        color:${cols.light_yellow};
        background-color:${cols.orangy_red};
    }
    transition:all .2s;

`;