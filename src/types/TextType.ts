import { TEXT } from "../enum/TextEnum";

export interface TextStyle {
	type: TEXT;
	frontSize: number;
	frontWeight: number;
	lineHeight: number;
}
export interface TextData {
	heading: TextStyle[];
	paragraph: TextStyle[];
}
