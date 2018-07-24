import { canvas, write, clear } from ".";

type LoopFunction = (currentFrame: number) => void;
interface LoopOptions {
	loopFunction: LoopFunction;
	printFrameTime?: boolean;
	clearEachFrame?: boolean;
}

let loop: LoopFunction;
let debugging: boolean = false;
let clearFrame: boolean = false;
let currentFrame: number = -1;

export function addLoop({ loopFunction, printFrameTime = false, clearEachFrame = false }: LoopOptions) {
	loop = loopFunction;
	debugging = printFrameTime;
	clearFrame = clearEachFrame;
}

let drawStart: number, drawTime: number;
function internalLoop() {
	drawStart = performance.now();

	currentFrame++;

	if (clearFrame) clear();

	if (loop) loop(currentFrame);

	if (debugging) {
		drawTime = performance.now() - drawStart;

		write({
			x: 5,
			y: canvas.height - 5,
			textValue: `Frame time: ${drawTime.toFixed(1)}ms`,
		});
	}

	requestAnimationFrame(internalLoop);
}
requestAnimationFrame(internalLoop);
