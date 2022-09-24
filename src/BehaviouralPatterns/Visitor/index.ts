// Visitor Pattern example
// Visitor pattern is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.
// =====================================================================================================================

interface IVisitor {
    visitConcreteElementA(concreteElementA: ConcreteElementA): void;
    visitConcreteElementB(concreteElementB: ConcreteElementB): void;
}

interface IElement {
    accept(visitor: IVisitor): void;
}

class ConcreteElementA implements IElement {
    public accept(visitor: IVisitor) {
        visitor.visitConcreteElementA(this);
    }
    public exclusiveMethodOfConcreteElementA() {
        return 'A';
    }
}

class ConcreteElementB implements IElement {
    public accept(visitor: IVisitor) {
        visitor.visitConcreteElementB(this);
    }
    public specialMethodOfConcreteElementB() {
        return 'B';
    }
}

class ConcreteVisitor1 implements IVisitor {
    public visitConcreteElementA(element: ConcreteElementA) {
        console.log(`${element.exclusiveMethodOfConcreteElementA()} + ConcreteVisitor1`);
    }
    public visitConcreteElementB(element: ConcreteElementB) {
        console.log(`${element.specialMethodOfConcreteElementB()} + ConcreteVisitor1`);
    }
}

class ConcreteVisitor2 implements IVisitor {
    public visitConcreteElementA(element: ConcreteElementA) {
        console.log(`${element.exclusiveMethodOfConcreteElementA()} + ConcreteVisitor2`);
    }
    public visitConcreteElementB(element: ConcreteElementB) {
        console.log(`${element.specialMethodOfConcreteElementB()} + ConcreteVisitor2`);
    }
}

const elements = [new ConcreteElementA(), new ConcreteElementB()];
const visitor1 = new ConcreteVisitor1();
const visitor2 = new ConcreteVisitor2();

for (const element of elements) {
    element.accept(visitor1);
}

for (const element of elements) {
    element.accept(visitor2);
}

// Output:
// A + ConcreteVisitor1
// B + ConcreteVisitor1
// A + ConcreteVisitor2
// B + ConcreteVisitor2
