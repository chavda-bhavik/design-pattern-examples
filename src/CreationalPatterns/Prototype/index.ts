// Prototype example
// Creational design pattern that lets you copy existing objects without making your code dependent on their classes
// ================================================================================================================

abstract class Shape {
    color: string;

    // constructor() {}
    constructor(shape?: Shape) {
        this.color = shape?.color ?? 'black';
    }

    abstract clone(): Shape;
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(source?: Rectangle) {
        super(source);
        this.width = source?.width ?? 0;
        this.height = source?.height ?? 0;
    }

    clone(): Shape {
        return new Rectangle(this);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(source?: Circle) {
        super(source);
        this.radius = source?.radius ?? 0;
    }

    clone(): Shape {
        return new Circle(this);
    }
}

class Application {
    shapes: Shape[] = [];

    constructor() {
        const circle = new Circle();
        circle.radius = 10;
        circle.color = 'red';

        const rectangle = new Rectangle();
        rectangle.width = 10;
        rectangle.height = 20;
        rectangle.color = 'blue';

        this.shapes.push(circle);
        this.shapes.push(rectangle);
    }

    copyApplication(): Application {
        const app = new Application();
        app.shapes = this.shapes.map((shape) => shape.clone());
        return app;
    }
}

export { Application }