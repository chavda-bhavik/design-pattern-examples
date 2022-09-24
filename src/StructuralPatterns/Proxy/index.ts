// Proxy Pattern Example
// Proxy pattern is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.
// ==============================

interface ISubject {
    request(): void;
}

class RealSubject implements ISubject {
    public request(): void {
        console.log('RealSubject: Handling request.');
    }
}

class MyProxy implements ISubject {
    private realSubject: RealSubject | undefined;

    public request(): void {
        if (this.checkAccess()) {
            this.realSubject = new RealSubject();
            this.realSubject.request();

            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: Checking access prior to firing a real request.');

        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Logging the time of request.');
    }
}

function clientCode(subject: ISubject) {
    subject.request();
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
clientCode(realSubject);
console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new MyProxy();
clientCode(proxy);

// Output:
// Client: Executing the client code with a real subject:
// RealSubject: Handling request.
//
// Client: Executing the same client code with a proxy:
// Proxy: Checking access prior to firing a real request.
// RealSubject: Handling request.
// Proxy: Logging the time of request.
