import { Image } from "antd";
import styled from "styled-components";
import Avatar from "../../../../../assets/images/HienPhanAvatar.png";
import HeroLeft from "./HeroLeft";
import { HeroContainer, RightHero } from "./HomeHeroUI";
import SocialMedia from "../../../../../components/SocialMedia/SocialMedia";
import Box from "../../../../../components/container/Box";
const AvatarImg = styled(Image)`
	width: 538px !important;
	object-fit: cover;
	border-radius: 20px;
	/* opacity: 0.8; */
`;
const CustomSocialMedia = styled(Box)`
	position: absolute;
	bottom: 32px;
	right: 177px;
`;
const HomeHero = () => {
	return (
		<HeroContainer>
			<HeroLeft />
			<RightHero>
				<AvatarImg src={Avatar} alt="HienPhan" />
				<CustomSocialMedia>
					<SocialMedia />
				</CustomSocialMedia>
			</RightHero>
		</HeroContainer>
	);
};

export default HomeHero;
