import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Buttons';
import { View } from '../Containers';
import { ReactComponent as Minus } from './icons/minus.svg';
import { ReactComponent as Plus } from './icons/plus.svg';

const CounterContainer = styled(View)`
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(30, 30, 30, 0.8);
    border-radius: 12px;
    margin: 16px 0px;

    & ${Button} {
        padding: 0;
    }

    & h5 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        min-width: 3vw;
        min-height: 3vw;
    }
`;

export const Counter: React.FC<{min: number, max: number}> = (props) => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        if (count - 1 >= props.min) {
            setCount(count - 1);
        }
    }

    const increment = () => {
        if (count + 1 <= props.max) {
            setCount(count + 1);
        }
    }

    return (
        <CounterContainer>
            <Button onClick={decrement} variation='danger'>
                <Minus />
            </Button>
            <h5>{count}</h5>
            <Button onClick={increment} variation='success'>
                <Plus />
            </Button>
        </CounterContainer >
    );
};