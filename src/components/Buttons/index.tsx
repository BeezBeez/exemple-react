import styled from "styled-components";
import { defaultTheme, setOpacity } from "../../theme";
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
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding: 12px 32px;
    background: ${props => defaultTheme[props.variation].background};
    opacity: 0.7;
    color: ${props => defaultTheme[props.variation].foreground};
    transition: all 0.35s cubic-bezier(0.77, 0, 0.175, 1);
    cursor: pointer;
    
    &:hover {
        opacity: 1;
        transform: translateY(-5%);
        box-shadow: 0px 8px 32px -8px ${props => setOpacity(defaultTheme[props.variation].background, 0.4)};
    }
    
    &:active {
        transform: translateY(0%);
        box-shadow: 0px 4px 16px -4px ${props => setOpacity(defaultTheme[props.variation].background, 0.4)};
        border-top: 2px solid rgba(0, 0, 0, 0.3);
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