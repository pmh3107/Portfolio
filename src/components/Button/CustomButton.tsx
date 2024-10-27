import { Button } from "antd";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface propsType {
	name: string;
	onClick?: () => void;
	icon?: ReactNode;
	type?: "primary" | "default" | "text";
}

const ButtonStyle = styled(Button)`
	${(props) =>
		props.type === "primary" &&
		css`
			background-color: var(--button-primary-color) !important;
			border: none;
			color: var(--button-text-primary-color) !important;
			font-size: 2.1rem;
			font-weight: 400;
			line-height: 1.7rem;
			padding: 18px;
			min-width: 188px;
		`}
	&:hover {
		opacity: 0.8;
	}
`;

const CustomButton = (props: propsType) => {
	const { type, name, onClick, icon } = props;

	return (
		<ButtonStyle onClick={onClick} icon={icon} type={type}>
			{name}
		</ButtonStyle>
	);
};

export default CustomButton;
