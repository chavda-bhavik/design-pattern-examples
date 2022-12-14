// Chain Of Responsibility example
// ================================================================================================================

interface IHandler {
    setNext(handler: IHandler): IHandler;
    handle(request: string): string;
}

abstract class AbstractHandler implements IHandler {
    private nextHandler?: IHandler;

    public setNext(handler: IHandler): IHandler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return '';
    }
}

class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Banana') {
            return `Monkey: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Nut') {
            return `Squirrel: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'MeatBall') {
            return `Dog: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

function clientCode(handler: IHandler) {
    const foods = ['Nut', 'Banana', 'Cup of coffee'];

    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`);

        const result = handler.handle(food);
        if (result) {
            console.log(` ${result}`);
        } else {
            console.log(` ${food} was left untouched.`);
        }
    }
}

console.log('Chain: Monkey > Squirrel > Dog');
const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

clientCode(monkey);
console.log('');

console.log('Subchain: Squirrel > Dog');
clientCode(squirrel);

// Output:
// Chain: Monkey > Squirrel > Dog
// Client: Who wants a Nut?
//  Squirrel: I'll eat the Nut.
// Client: Who wants a Banana?
//  Monkey: I'll eat the Banana.
// Client: Who wants a Cup of coffee?
//  Cup of coffee was left untouched.
//
// Subchain: Squirrel > Dog
// Client: Who wants a Nut?
//  Squirrel: I'll eat the Nut.
// Client: Who wants a Banana?
//  Banana was left untouched.
// Client: Who wants a Cup of coffee?
//  Cup of coffee was left untouched.
