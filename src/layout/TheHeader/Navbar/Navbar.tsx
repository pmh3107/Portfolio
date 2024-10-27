import { navbarType } from "../../../types/HeaderTypes";
import {
	NavbarContainer,
	NavbarItems,
	NavbarLink,
	NavbarList,
} from "./NavBarUI";

const Navbar = () => {
	const listNavbar: navbarType[] = [
		{
			id: 11,
			name: "Home",
			path: "/",
		},
		{
			id: 12,
			name: "About Me",
			path: "/userAboutMe",
		},
		{
			id: 13,
			name: "Project",
			path: "/userProject",
		},
		{ id: 14, name: "Contact", path: "/userContact" },
	];
	return (
		<NavbarContainer>
			<NavbarList>
				{listNavbar.map((item) => {
					return (
						<NavbarItems key={item.id}>
							<NavbarLink to={item.path}>{item.name}</NavbarLink>
						</NavbarItems>
					);
				})}
			</NavbarList>
		</NavbarContainer>
	);
};

export default Navbar;
