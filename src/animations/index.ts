import * as c from '../canvas';
import { CircleParams } from '../canvas/ifc';

const logFT = true;

const circle: CircleParams = {
	x: c.canvas.width / 2,
	y: 30,
	radius: 30,
	strokeStyle: 'transparent',
};

function moveCircle() {
	circle.y += 4;

	if (circle.y > c.canvas.height - circle.radius) {
		// we have reached our target position
		circle.y = c.canvas.height - circle.radius;
	} else if (circle.y < circle.radius) {
		// out of bounds
		circle.y = circle.radius;
	}
}

function loopFunction(currentFrame: number) {
	c.draw.circle(circle);
	moveCircle();
}

c.addLoop({
	loopFunction,
	printFrameTime: true,
	clearEachFrame: true,
});
