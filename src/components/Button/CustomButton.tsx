import { Button } from "antd";
import styled, { css } from "styled-components";
import { TEXT } from "../../enum/TextEnum";
import { DataText } from "../../style/DataText";

interface propsType {
	children: React.ReactNode;
	onClick?: () => void;
	icon?: React.ReactNode;
	type: "primary" | "default" | "text";
}
const { paragraph } = DataText;
const dataText = paragraph.find((item) => item.type === TEXT.P2);
const ButtonStyle = styled(Button)`
	${(props) =>
		props.type === "primary" &&
		css`
			background-color: var(--button-primary-color) !important;
			border: none;
			color: var(--button-text-primary-color) !important;
			font-size: ${dataText?.frontSize}rem;
			font-weight: ${dataText?.frontWeight};
			line-height: ${dataText?.lineHeight}rem;
			min-height: 52px;
			padding: 18px;
			min-width: 188px;
		`}
	font-family: var(--font-family-primary);
	&:hover {
		opacity: 0.8;
	}
`;

const CustomButton = (props: propsType) => {
	const { type, children, onClick, icon } = props;
	return (
		<ButtonStyle onClick={onClick} icon={icon} type={type}>
			{children}
		</ButtonStyle>
	);
};

export default CustomButton;
