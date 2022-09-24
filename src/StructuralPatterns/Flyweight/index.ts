// Flyweight Pattern example
// Lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.
// ============================================================================================================================

interface IShape {
    draw(): void;
}

class AnotherCircle implements IShape {
    private x: number;
    private y: number;
    private radius: number;
    private color: string;

    constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    public draw(): void {
        console.log(`Circle: Draw() [Color : ${this.color}, x : ${this.x}, y :${this.y}, radius : ${this.radius}]`);
    }
}

class AnotherRectangle implements IShape {
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private color: string;

    constructor(x: number, y: number, width: number, height: number, color: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    public draw(): void {
        console.log(`Rectangle: Draw() [Color : ${this.color}, x : ${this.x}, y :${this.y}, width : ${this.width}, height : ${this.height}]`);
    }
}

class ShapeFactory {
    private static circleMap: Map<string, IShape> = new Map<string, IShape>();
    private static rectangleMap: Map<string, IShape> = new Map<string, IShape>();

    public static getCircle(color: string): IShape {
        let circle = this.circleMap.get(color);

        if (circle == null) {
            circle = new AnotherCircle(10, 10, 100, color);
            this.circleMap.set(color, circle);
            console.log('Creating circle of color : ' + color);
        }
        return circle;
    }

    public static getRectangle(color: string): IShape {
        let rectangle = this.rectangleMap.get(color);

        if (rectangle == null) {
            rectangle = new AnotherRectangle(20, 20, 50, 50, color);
            this.rectangleMap.set(color, rectangle);
            console.log('Creating rectangle of color : ' + color);
        }
        return rectangle;
    }
}

class FlyweightPatternDemo {
    private static colors: string[] = ['Red', 'Green', 'Blue', 'White', 'Black'];
    private static randomColor(): string {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    public static main(): void {
        for (let i = 0; i < 10; ++i) {
            const circle = ShapeFactory.getCircle(FlyweightPatternDemo.randomColor());
            circle.draw();
        }

        for (let i = 0; i < 10; ++i) {
            const rectangle = ShapeFactory.getRectangle(FlyweightPatternDemo.randomColor());
            rectangle.draw();
        }
    }
}

FlyweightPatternDemo.main();

// Output:
// Creating circle of color : White
// Circle: Draw() [Color : White, x : 10, y :10, radius : 100]
// Creating circle of color : Red
// Circle: Draw() [Color : Red, x : 10, y :10, radius : 100]
// Creating circle of color : Blue
// Circle: Draw() [Color : Blue, x : 10, y :10, radius : 100]
// Creating circle of color : Black
// Circle: Draw() [Color : Black, x : 10, y :10, radius : 100]
// Creating circle of color : Green
// Circle: Draw() [Color : Green, x : 10, y :10, radius : 100]
// Circle: Draw() [Color : White, x : 10, y :10, radius : 100]
// Circle: Draw() [Color : Red, x : 10, y :10, radius : 100]
// Circle: Draw() [Color : Blue, x : 10, y :10, radius : 100]
// Circle: Draw() [Color : Black, x : 10, y :10, radius : 100]
// Circle: Draw() [Color : Green, x : 10, y :10, radius : 100]

// Creating rectangle of color : White
// Rectangle: Draw() [Color : White, x : 20, y :20, width : 50, height : 50]
// Creating rectangle of color : Red
// Rectangle: Draw() [Color : Red, x : 20, y :20, width : 50, height : 50]
// Creating rectangle of color : Blue
// Rectangle: Draw() [Color : Blue, x : 20, y :20, width : 50, height : 50]
// Creating rectangle of color : Black
// Rectangle: Draw() [Color : Black, x : 20, y :20, width : 50, height : 50]
// Creating rectangle of color : Green
// Rectangle: Draw() [Color : Green, x : 20, y :20, width : 50, height : 50]
// Rectangle: Draw() [Color : White, x : 20, y :20, width : 50, height : 50]
// Rectangle: Draw() [Color : Red, x : 20, y :20, width : 50, height : 50]
// Rectangle: Draw() [Color : Blue, x : 20, y :20, width : 50, height : 50]
// Rectangle: Draw() [Color : Black, x : 20, y :20, width : 50, height : 50]
// Rectangle: Draw() [Color : Green, x : 20, y :20, width : 50, height : 50]
