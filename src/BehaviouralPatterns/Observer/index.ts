// Observer Patter Example
// Observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
// ==============================

class Subject {
    private observers: Observer[] = [];
    private state: number = 0;

    public getState(): number {
        return this.state;
    }

    public setState(state: number): void {
        this.state = state;
        this.notifyAllObservers();
    }

    public attach(observer: Observer): void {
        this.observers.push(observer);
    }

    public notifyAllObservers(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }
}

class Observer {
    private subject: Subject;

    constructor(subject: Subject) {
        this.subject = subject;
        this.subject.attach(this);
    }

    public update(): void {
        console.log('Update: ' + this.subject.getState());
    }
}

const subject = new Subject();
new Observer(subject);
subject.setState(1);

// Output:
// Update: 1