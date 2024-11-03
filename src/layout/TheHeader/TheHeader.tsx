import CustomButton from "../../components/Button/CustomButton";
import Logo from "../../components/Logo/Logo";
import Navbar from "./Navbar/Navbar";
import { Header } from "./TheHeaderUI";

const TheHeader = () => {
	return (
		<Header>
			<Logo />
			<Navbar />
			<CustomButton type="primary">Download CV</CustomButton>
		</Header>
	);
};

export default TheHeader;
