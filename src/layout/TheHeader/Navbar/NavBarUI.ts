import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
	font-size: 2.1rem;
	font-weight: 400;
	line-height: 3.2rem;

	&.active {
		border-bottom: 2px solid var(--text-primary-color);
	}
	&:hover {
		border-bottom: 2px solid var(--text-primary-color);
	}
`;
