import React from "react";
import styled from "styled-components";
import { FlexProps } from "../../types/ContainerType";
import Box from "./Box";

const StyledFlex = styled(Box)<FlexProps>`
	display: flex;
	flex-direction: ${(props) => props.flexDirection || "row"};
	align-items: ${(props) => props.alignItems || "stretch"};
	justify-content: ${(props) => props.justifyContent || "flex-start"};
	flex-wrap: ${(props) => props.flexWrap || "nowrap"};
	gap: ${(props) =>
		(typeof props.gap === "number" ? `${props.gap}px` : props.gap) || "0"};
`;

const Flex: React.FC<FlexProps> = ({ children, ...rest }) => {
	return <StyledFlex {...rest}>{children}</StyledFlex>;
};

export default Flex;
