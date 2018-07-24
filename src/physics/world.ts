import { Engine, Bodies, World, Body, Vector, Query, Mouse, MouseConstraint } from 'matter-js';
import WorldObject from "./WorldObject";
import * as c from '../canvas';

export const engine = Engine.create();
const world = engine.world;

Engine.run(engine);

const mouse = Mouse.create(c.canvas);
const mouseConstraint = MouseConstraint.create(engine, <any>{
	mouse,
	constraint: {
		stiffness: 0.5,
		damping: 0.3,
	},
});

World.add(world, mouseConstraint);

export const objects: WorldObject[] = [];

export function add(obj: WorldObject, body: Body) {
	objects.push(obj);
	World.add(world, body);
}
export function get(coords: Vector) {
	return Query.point(world.bodies, coords);
}
