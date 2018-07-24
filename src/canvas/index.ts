import * as draw from './draw';
import { TextParams } from './ifc';
import { Vector } from 'matter-js';

export const canvas = document.getElementsByTagName('canvas')[0];
export const ctx = canvas.getContext('2d');

export { addLoop } from './loop';
export { draw };

export function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
export function resetTransform() {
	ctx.setTransform(1, 0, 0, 1, 0, 0);
}
export function write({ x, y, textValue, color = 'red', fontName = 'sans-serif', sizePX = 12 }: TextParams) {
	ctx.font = sizePX + 'px ' + fontName;
	ctx.fillStyle = color;
	ctx.fillText(textValue, x, y);
}

export function onClick(handler: (mousePos: Vector) => void) {
	canvas.addEventListener('click', function (event) {
		const mousePos = {
			x: event.offsetX,
			y: event.offsetY,
		};
		handler(mousePos);
	});
}
export function onMove(handler: (mousePos: Vector, force: Vector, buttonDown: boolean) => void) {
	canvas.addEventListener('mousemove', function (event) {
		const mousePos = {
			x: event.offsetX,
			y: event.offsetY,
		};
		const force = {
			x: event.movementX,
			y: event.movementY,
		};
		handler(mousePos, force, event.buttons === 1);
	});
}
