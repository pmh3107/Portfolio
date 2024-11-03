import { Button, Flex } from "antd";
import styled from "styled-components";
import { dataSocial } from "./dataDummy";

const SocialContainer = styled(Flex)`
	width: 205px;
	justify-content: space-between;
`;
const CustomButton = styled(Button)`
	color: var(--text-primary-color);
	.ant-btn-icon > span > svg {
		width: 32.475px !important;
		height: 32.475px !important;
		padding: 0;
		margin: 0;
	}
`;
const SocialMedia = () => {
	// const navigate = useNavigate();

	const data = dataSocial;
	return (
		<SocialContainer>
			{data.map((item) => {
				return (
					<CustomButton
						key={item.id}
						type="link"
						icon={<item.icon />}
						href={item.link}
					></CustomButton>
				);
			})}
		</SocialContainer>
	);
};

export default SocialMedia;
