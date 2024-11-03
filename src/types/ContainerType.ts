import { CSSProperties } from "styled-components";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
	padding?: string;
	margin?: string;
	background?: string;
	width?: string | number;
	height?: string | number;
	display?: CSSProperties["display"];
	flexDirection?: CSSProperties["flexDirection"];
	alignItems?: CSSProperties["alignItems"];
	justifyContent?: CSSProperties["justifyContent"];
}

export interface FlexProps extends BoxProps {
	flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
	alignItems?: CSSProperties["alignItems"];
	justifyContent?: CSSProperties["justifyContent"];
	flexWrap?: CSSProperties["flexWrap"];
	gap?: string | number;
}
