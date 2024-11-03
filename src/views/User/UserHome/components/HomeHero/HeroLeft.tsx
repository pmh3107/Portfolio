import CustomButton from "../../../../../components/Button/CustomButton";
import Box from "../../../../../components/container/Box";
import Body from "../../../../../components/Text/Body";
import Heading from "../../../../../components/Text/Heading";
import { TEXT } from "../../../../../enum/TextEnum";
import { LeftHero } from "./HomeHeroUI";

const HeroLeft = () => {
	return (
		<LeftHero>
			<Box width="100%">
				<Box flexDirection="column" margin="0 0 -10px 0">
					<Body type={TEXT.P1}>Hi I am</Body>
					<Heading type={TEXT.H2} color="var(--text-secondary-color)">
						Minh Hien Phan
					</Heading>
				</Box>
				<Heading type={TEXT.H1}>Front End</Heading>
				<Box margin="-25px 0 0 223px">
					<Heading type={TEXT.H1}>Developer</Heading>
				</Box>
			</Box>
			<Box margin="0 0 0 7px">
				<Body type={TEXT.P2}>
					Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
					lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
					pharetra
				</Body>
				<Box margin="22px 0 0 0 ">
					<CustomButton type="primary">Project</CustomButton>
				</Box>
			</Box>
		</LeftHero>
	);
};

export default HeroLeft;
