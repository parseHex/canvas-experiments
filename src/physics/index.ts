import * as c from '../canvas';
import WorldObject from './WorldObject';
import * as world from './world';
import { PolygonParams } from '../canvas/ifc';
import { Body } from 'matter-js';

const dots: any[] = [];

new WorldObject({
	x: Math.floor(Math.random() * c.canvas.width - 20) + 20,
	y: 0,
	width: 20, height: 20,
});
new WorldObject({
	x: Math.floor(Math.random() * c.canvas.width - 20) + 20,
	y: 50,
	width: 20, height: 20,
});
const ground = new WorldObject({
	x: 0, y: c.canvas.height - 25,
	width: c.canvas.width, height: 10,
	options: {
		isStatic: true,
	},
});
ground.fillStyle = 'brown';

document.getElementById('add').addEventListener('click', function () {
	const x = Math.floor(Math.random() * c.canvas.width - 20) + 20;
	const y = 0;

	new WorldObject({
		x, y,
		width: 20, height: 20,
	});
});

function loopFunction(currentFrame: number) {
	for (let i = 0; i < world.objects.length; i++) {
		const obj = world.objects[i];

		const polyData: PolygonParams = {
			vertices: obj.vertices,
			width: obj.width,
			fillStyle: obj.fillStyle,
			strokeStyle: obj.strokeStyle,
		};

		c.draw.polygon(polyData);
	}

	for (let i = 0; i < dots.length; i++) {
		c.draw.square({
			x: dots[i].x,
			y: dots[i].y,
			width: 1,
			height: 1,
		});
	}
}

c.addLoop({
	loopFunction,
	printFrameTime: true,
	clearEachFrame: true,
});
