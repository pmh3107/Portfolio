import { HeroContainer, LeftHero, RightHero } from "./HomeHeroUI";

const HomeHero = () => {
	return (
		<HeroContainer>
			<LeftHero>
				<span>Hi I am</span>
				<p>Phan Minh Hien</p>
			</LeftHero>
			<RightHero></RightHero>
		</HeroContainer>
	);
};

export default HomeHero;
