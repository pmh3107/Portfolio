import { Outlet } from "react-router-dom";
import TheHeader from "./TheHeader/TheHeader";
import TheFooter from "./TheFooter/TheFooter";

const UserLayout = () => {
	return (
		<>
			<TheHeader />
			<Outlet />
			<TheFooter />
		</>
	);
};

export default UserLayout;
