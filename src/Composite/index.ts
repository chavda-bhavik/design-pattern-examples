interface Shape {
    draw(): void;
}
class Dot implements Shape {
    constructor(public x: number, public y: number) {}
    draw(): void {
        console.log(`Drawing dot at ${this.x}, ${this.y}`);
    }
}
class Circle implements Shape {
    constructor(public x: number, public y: number, public radius: number) {}
    draw(): void {
        console.log(`Drawing circle at ${this.x}, ${this.y} with radius ${this.radius}`);
    }
}
class Square implements Shape {
    constructor(public x: number, public y: number, public side: number) {}
    draw(): void {
        console.log(`Drawing square at ${this.x}, ${this.y} with side ${this.side}`);
    }
}
class CompoundShape implements Shape {
    children: Shape[] = [];
    add(child: Shape): void {
        this.children.push(child);
    }
    draw(): void {
        for (const child of this.children) {
            child.draw();
        }
    }
}
class CompoundShapeBuilder {
    private compoundShape: CompoundShape = new CompoundShape();
    build(): CompoundShape {
        return this.compoundShape;
    }
    addDot(x: number, y: number): CompoundShapeBuilder {
        this.compoundShape.add(new Dot(x, y));
        return this;
    }
    addCircle(x: number, y: number, radius: number): CompoundShapeBuilder {
        this.compoundShape.add(new Circle(x, y, radius));
        return this;
    }
    addSquare(x: number, y: number, side: number): CompoundShapeBuilder {
        this.compoundShape.add(new Square(x, y, side));
        return this;
    }
    draw(): void {
        this.compoundShape.draw();
    }
}

// ================================================================================================================
// Application
const builder = new CompoundShapeBuilder();
builder.addCircle(10, 10, 10).addSquare(20, 20, 5).addDot(30, 30);
const shape = builder.build();
shape.draw();