// Adapter pattern example
// ================================================================================================================

class RoundHole {
    radius = 0;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    fits(peg: RoundPeg): boolean {
        return this.getRadius() >= peg.getRadius();
    }
}

class RoundPeg {
    radius = 0;

    constructor(radius: number) {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }
}

class SquarePeg {
    width = 0;

    constructor(width: number) {
        this.width = width;
    }

    getWidth(): number {
        return this.width;
    }
}

class SquarePegAdapter extends RoundPeg {
    peg: SquarePeg;

    constructor(peg: SquarePeg) {
        super(peg.getWidth() * Math.sqrt(2) / 2);
        this.peg = peg;
    }

    getWidth(): number {
        return this.peg.getWidth();
    }
}

// ================================================================================================================
// Application
const hole = new RoundHole(5);
const rpeg = new RoundPeg(5);
hole.fits(rpeg);

const speg = new SquarePeg(5);
const adapter = new SquarePegAdapter(speg);
hole.fits(adapter);

