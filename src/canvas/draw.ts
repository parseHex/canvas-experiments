import { SquareParams, CircleParams, PolygonParams } from './ifc';
import { ctx, resetTransform, canvas } from '.';
import { Vector } from 'matter-js';

const fillDefault = '#ECEFF1';
const strokeDefault = '#455A64';
const PI2 = 2 * Math.PI;

export function square(data: SquareParams) {
	ctx.fillStyle = data.fillStyle;
	ctx.strokeStyle = data.strokeStyle;

	ctx.beginPath();
	ctx.rect(data.x, data.y, data.width, data.height);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

export function polygon(data: PolygonParams) {
	ctx.fillStyle = data.fillStyle || fillDefault;
	ctx.strokeStyle = data.strokeStyle || strokeDefault;

	ctx.beginPath();

	ctx.moveTo(data.vertices[0].x, data.vertices[0].y);
	for (var i = 1; i < data.vertices.length; i += 1) {
		ctx.lineTo(data.vertices[i].x, data.vertices[i].y);
	}
	ctx.lineTo(data.vertices[0].x, data.vertices[0].y);

	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

export function circle(data: CircleParams) {
	ctx.fillStyle = data.fillStyle || fillDefault;
	ctx.strokeStyle = data.strokeStyle || strokeDefault;
	ctx.beginPath();
	ctx.arc(data.x, data.y, data.radius, 0, PI2);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}
