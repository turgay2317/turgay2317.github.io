class State {
	constructor(name, x, y, radius, color, transitions) {
		this.name = name;
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.transitions = transitions || [];
	}

	add(transition){
		this.transitions.push(transition);
	}
}
