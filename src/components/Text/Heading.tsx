import React from "react";
import styled from "styled-components";
import { TEXT } from "../../enum/TextEnum";
import { DataText } from "../../style/DataText";
import { Typography } from "antd";

interface StyledHeadingProps {
	frontSize: number;
	frontWeight: number;
	lineHeight: number;
}
interface HeadingProps {
	type: TEXT;
	children: React.ReactNode;
	color?: string;
}
const { Title } = Typography;
const StyledHeading = styled(Title)<StyledHeadingProps>`
	padding: 0 !important;
	margin: 0 !important;
	font-family: var(--font-family-primary);
	font-size: ${(props) => props.frontSize}rem !important;
	font-weight: ${(props) => props.frontWeight};
	line-height: ${(props) => props.lineHeight}rem !important;
	color: ${(props) => props.color} !important;
`;
const checkTitleTag = (type: TEXT) => {
	switch (type) {
		case TEXT.H1:
			return 1;
		case TEXT.H2:
			return 2;
		case TEXT.H3:
			return 3;
		case TEXT.H4:
			return 4;
		default:
			return 2;
	}
};
const Heading: React.FC<HeadingProps> = ({ type, children, color }) => {
	const { heading } = DataText;
	const dataHeading = heading.find((item) => item.type === type);
	const defaultStyles = {
		frontSize: 2,
		frontWeight: 400,
		lineHeight: 2.5,
	};

	return (
		<StyledHeading
			level={checkTitleTag(type)}
			frontSize={dataHeading?.frontSize || defaultStyles.frontSize}
			frontWeight={dataHeading?.frontWeight || defaultStyles.frontWeight}
			lineHeight={dataHeading?.lineHeight || defaultStyles.lineHeight}
			color={color}
		>
			{children}
		</StyledHeading>
	);
};

export default Heading;
