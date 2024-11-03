import { TEXT } from "../enum/TextEnum";
import { TextData } from "../types/TextType";

export const DataText: TextData = {
	heading: [
		{ type: TEXT.H1, frontSize: 6.5, frontWeight: 600, lineHeight: 9.8 },
		{
			type: TEXT.H2,
			frontSize: 3.2,
			frontWeight: 600,
			lineHeight: 4.8,
		},
	],
	paragraph: [
		{
			type: TEXT.P1,
			frontSize: 2.4,
			frontWeight: 600,
			lineHeight: 3.6,
		},
		{
			type: TEXT.P2,
			frontSize: 2.1,
			frontWeight: 400,
			lineHeight: 2.7,
		},
	],
};
