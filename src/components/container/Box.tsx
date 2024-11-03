// src/components/Box.tsx
import React from "react";
import styled from "styled-components";
import { BoxProps } from "../../types/ContainerType";

const StyledBox = styled.div<BoxProps>`
	padding: ${(props) => props.padding || "0"};
	margin: ${(props) => props.margin || "0"};
	background: ${(props) => props.background || "transparent"};
	width: ${(props) =>
		(typeof props.width === "number" ? `${props.width}px` : props.width) ||
		"auto"};
	height: ${(props) =>
		(typeof props.height === "number" ? `${props.height}px` : props.height) ||
		"auto"};
	display: ${(props) => props.display || "block"};
	flex-direction: ${(props) => props.flexDirection || "row"};
	align-items: ${(props) => props.alignItems || "stretch"};
	justify-content: ${(props) => props.justifyContent || "flex-start"};
	box-sizing: border-box;
`;

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
	return <StyledBox {...rest}>{children}</StyledBox>;
};

export default Box;
