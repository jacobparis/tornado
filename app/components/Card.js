import React from "react";
import styled from "styled-components";

import Theme from "../theme";

const BaseCard = styled.button`
    position: relative;
    background: ${Theme.Colors.Primary};
    height: ${Theme.Layout.Grid};
    flex: 0 0 ${Theme.Layout.Grid};
    margin: 1rem;
    outline: none;
    border-radius: ${Theme.Layout.Corners};
    border: 1px solid ${Theme.Colors.Primary};
    cursor: pointer;
`;

const CardText = styled.span`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 2rem;
    color: white;
`;

export function Card({children, ...props}) {
    return (
        <BaseCard {...props}>
            <CardText>
                {props.text}
            </CardText>
        </BaseCard>
    )
}

const BaseCardButton = styled.button`
    position: relative;
    background: none;
    height: ${Theme.Layout.Grid};
    flex: 0 0 ${Theme.Layout.Grid};
    border-radius: ${Theme.Layout.Corners};
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 300;
    border: 1px solid ${Theme.Colors.Primary};
    cursor: pointer;
    outline: none;
`;

export function CardButton({children, ...props}) {
    return (
        <BaseCardButton {...props}>
            <CardText>
                {children}
            </CardText>
        </BaseCardButton>
    )
}