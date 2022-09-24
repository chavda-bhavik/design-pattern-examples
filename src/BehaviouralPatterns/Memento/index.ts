// Memento Pattern Example
// Memento pattern is a software design pattern that provides the ability to restore an object to its previous state (undo via rollback).
// ==============================

class Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }
}

class Originator {
    private state: string = '';

    public setState(state: string): void {
        this.state = state;
    }

    public getState(): string {
        return this.state;
    }

    public saveStateToMemento(): Memento {
        return new Memento(this.state);
    }

    public getStateFromMemento(memento: Memento): void {
        this.state = memento.getState();
    }
}

class CareTaker {
    private mementos: Memento[] = [];

    public add(memento: Memento): void {
        this.mementos.push(memento);
    }

    public get(index: number): Memento {
        return this.mementos[index];
    }
}

const originator = new Originator();
const careTaker = new CareTaker();

originator.setState('State #1');
originator.setState('State #2');
careTaker.add(originator.saveStateToMemento());

originator.setState('State #3');
careTaker.add(originator.saveStateToMemento());

originator.setState('State #4');
console.log('Current State: ' + originator.getState());

originator.getStateFromMemento(careTaker.get(0));
console.log('First saved State: ' + originator.getState());


// Output:
// Current State: State #4
// First saved State: State #2
