import React from "react";
import styled from "styled-components";
import { TEXT } from "../../enum/TextEnum";
import { DataText } from "../../style/DataText";
// import { Typography } from "antd";

interface BodyProps {
	type: TEXT;
	children: React.ReactNode;
	color?: string;
	padding?: string;
	margin?: string;
	background?: string;
}

// const { Paragraph } = Typography;
const StyledParagraph = styled.p<{
	fontSize: number;
	fontWeight: number;
	lineHeight: number;
	color?: string;
	padding?: string;
	margin?: string;
	background?: string;
}>`
	font-family: var(--font-family-primary);
	font-size: ${(props) => props.fontSize}rem;
	font-weight: ${(props) => props.fontWeight};
	line-height: ${(props) => props.lineHeight}rem;
	color: ${(props) => props.color || "inherit"};
	padding: ${(props) => props.padding || "0"} !important;
	margin: ${(props) => props.margin || "0"} !important;
	background: ${(props) => props.background || "transparent"};
`;

const Body: React.FC<BodyProps> = ({
	type,
	children,
	color,
	padding,
	margin,
	background,
}) => {
	const { paragraph } = DataText;
	const dataBody = paragraph.find((item) => item.type === type);
	const fontSize = dataBody?.frontSize || 1.6;
	const fontWeight = dataBody?.frontWeight || 400;
	const lineHeight = dataBody?.lineHeight || 2.4;

	return (
		<StyledParagraph
			fontSize={fontSize}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			color={color}
			padding={padding}
			margin={margin}
			background={background}
		>
			{children}
		</StyledParagraph>
	);
};

export default Body;
