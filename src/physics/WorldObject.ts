import { Body, Bodies } from "matter-js";
import * as world from './world';

interface params {
	x: number;
	y: number;
	width: number;
	height: number;
	options?: any;
}
class WorldObject {
	private _body: Body;
	public width: number;
	public height: number;
	public fillStyle: string = 'gray';
	public strokeStyle: string = 'transparent';

	constructor({ x, y, width, height, options }: params) {
		options = options || {
			// friction: 0.4,
			// restitution: 1,
		};
		this.width = width;
		this.height = height;

		x += width / 2;

		this._body = Bodies.rectangle(x, y, width, height, options);

		world.add(this, this._body);
	}

	public get vertices() { return this._body.vertices; }
}

export default WorldObject;
