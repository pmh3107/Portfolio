import LogoIcon from "../../assets/images/IconHienPhan.svg";
import { LogoImg, LogoUser } from "./LogoUI";
const Logo = () => {
	return (
		<LogoUser to={"/"}>
			<LogoImg src={LogoIcon} />
		</LogoUser>
	);
};

export default Logo;
