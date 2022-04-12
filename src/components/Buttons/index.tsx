import styled from "styled-components";
import { defaultTheme } from "../../theme";
import { ColorVaration } from "../../theme/types";

export const Button = styled.button<{variation: ColorVaration}>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
    min-width: 3vw;
    min-height: 3vw;
    font-size: 2rem;
    border-radius: 8px;
    border: none;
    background: ${props => defaultTheme[props.variation].background};
    opacity: 0.7;
    color: ${props => defaultTheme[props.variation].foreground};
    transition: all 0.35s cubic-bezier(0.77, 0, 0.175, 1);
    cursor: pointer;
    
    &:hover {
        opacity: 1;
    }

    &:active {
        opacity: 0.5;
    }

    & svg {
        width: 24px;
        height: 24px;
    }

    & svg * {
        fill: ${props => defaultTheme[props.variation].foreground};
    }
`;