// Decorator Pattern example
// Lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
// =====================================================================================================================

interface IShape {
    draw(): void;
}

class DCircle implements IShape {
    public draw(): void {
        console.log('Shape: Circle');
    }
}

class DRectangle implements IShape {
    public draw(): void {
        console.log('Shape: Rectangle');
    }
}

class DShapeDecorator implements IShape {
    protected decoratedShape: IShape;

    constructor(decoratedShape: IShape) {
        this.decoratedShape = decoratedShape;
    }

    public draw(): void {
        this.decoratedShape.draw();
    }
}

class DRedShapeDecorator extends DShapeDecorator {
    constructor(decoratedShape: IShape) {
        super(decoratedShape);
    }

    public draw(): void {
        super.draw();
        this.setRedBorder(this.decoratedShape);
    }

    private setRedBorder(decoratedShape: IShape): void {
        console.log('Border Color: Red');
    }
}

class DGreenShapeDecorator extends DShapeDecorator {
    constructor(decoratedShape: IShape) {
        super(decoratedShape);
    }

    public draw(): void {
        super.draw();
        this.setGreenBorder(this.decoratedShape);
    }

    private setGreenBorder(decoratedShape: IShape): void {
        console.log('Border Color: Green');
    }
}

class DApplication {
    public static main(): void {
        const circle = new DCircle();
        const redCircle = new DRedShapeDecorator(new DCircle());
        const greenRectangle = new DGreenShapeDecorator(new DRectangle());

        console.log('Circle with normal border');
        circle.draw();

        console.log('Circle of red border');
        redCircle.draw();

        console.log('Rectangle of green border');
        greenRectangle.draw();
    }
}

DApplication.main();

// Output:
// Circle with normal border
// Shape: Circle
// Circle of red border
// Shape: Circle
// Border Color: Red
// Rectangle of green border
// Shape: Rectangle
// Border Color: Green
