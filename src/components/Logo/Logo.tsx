import { useNavigate } from "react-router-dom";
import { LogoUser } from "./LogoUI";

const Logo = () => {
	// change to home page
	const navigate = useNavigate();
	const handleClickLogo = () => {
		navigate("/");
	};
	return (
		<LogoUser type="text" onClick={handleClickLogo}>
			HienPhan
		</LogoUser>
	);
};

export default Logo;
