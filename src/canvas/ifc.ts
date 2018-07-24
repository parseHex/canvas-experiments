import { Vector } from "matter-js";

interface Shape {
	x: number;
	y: number;
}
interface Rectangle extends Shape {
	width: number;
	height: number;
}
interface Circle extends Shape {
	radius: number;
}

export interface SquareParams extends Rectangle {
	fillStyle?: string;
	strokeStyle?: string;
}
export interface PolygonParams {
	vertices: Vector[];
	width: number;
	fillStyle?: string;
	strokeStyle?: string;
}
export interface CircleParams extends Circle {
	fillStyle?: string;
	strokeStyle?: string;
}
export interface TextParams extends Shape {
	textValue: string;
	color?: string;
	fontName?: string;
	sizePX?: number;
}
