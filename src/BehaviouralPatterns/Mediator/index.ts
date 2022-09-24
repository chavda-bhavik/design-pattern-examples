// Mediator Pattern example
// Mediator pattern is a design pattern that defines an object that encapsulates how a set of objects interact. This pattern is considered to be a behavioral pattern due to the way it can alter the program's running behavior.
// ==============================

interface Mediator {
    notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
    private component1: Component1 | undefined;
    private component2: Component2 | undefined;

    public setComponent1(component: Component1): void {
        this.component1 = component;
    }

    public setComponent2(component: Component2): void {
        this.component2 = component;
    }

    public notify(sender: object, event: string): void {
        if (event === 'A' && this.component2) {
            console.log('Mediator reacts on A and triggers following operations:');
            this.component2.doC();
        }

        if (event === 'D' && this.component1 && this.component2) {
            console.log('Mediator reacts on D and triggers following operations:');
            this.component1.doB();
            this.component2.doC();
        }
    }
}

class BaseComponent {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class Component1 extends BaseComponent {
    public doA(): void {
        console.log('Component 1 does A.');
        this.mediator.notify(this, 'A');
    }

    public doB(): void {
        console.log('Component 1 does B.');
        this.mediator.notify(this, 'B');
    }
}

class Component2 extends BaseComponent {
    public doC(): void {
        console.log('Component 2 does C.');
        this.mediator.notify(this, 'C');
    }

    public doD(): void {
        console.log('Component 2 does D.');
        this.mediator.notify(this, 'D');
    }
}

const mediator = new ConcreteMediator();
const component1 = new Component1(mediator);
const component2 = new Component2(mediator);
mediator.setComponent1(component1);
mediator.setComponent2(component2);

console.log('Client triggers operation A.');
component1.doA();

console.log('');

console.log('Client triggers operation D.');
component2.doD();

// Output:
// Client triggers operation A.
// Component 1 does A.
// Mediator reacts on A and triggers following operations:
// Component 2 does C.
//
// Client triggers operation D.
// Component 2 does D.
// Mediator reacts on D and triggers following operations:
// Component 1 does B.
// Component 2 does C.

