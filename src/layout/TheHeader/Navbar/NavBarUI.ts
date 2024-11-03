import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { DataText } from "../../../style/DataText";
import { TEXT } from "../../../enum/TextEnum";

const { paragraph } = DataText;
// using custom paragraph 1
const dataParagraph = paragraph.find((item) => item.type === TEXT.P2);
export const NavbarContainer = styled.nav`
	margin: 0 20px;
`;
export const NavbarList = styled.ul`
	display: flex;
	gap: 12px;
	align-items: center;
`;
export const NavbarItems = styled.li`
	padding: 14px;
`;
export const NavbarLink = styled(NavLink)`
	color: var(--text-primary-color);
	font-size: ${dataParagraph?.frontSize}rem;
	font-weight: ${dataParagraph?.frontWeight};
	line-height: ${dataParagraph?.lineHeight}rem;

	&.active {
		border-bottom: 2px solid var(--text-primary-color);
	}
	&:hover {
		border-bottom: 2px solid var(--text-primary-color);
	}
`;
