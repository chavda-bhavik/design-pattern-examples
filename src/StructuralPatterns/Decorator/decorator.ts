// Simple decorator in typescript

function log(target: any, key: string, descriptor: any) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const result = original.apply(this, args);
        console.log(`Call: ${key}(${args}) => ${result}`);
        return result;
    };

    return descriptor;
}

class Calculator {
    @log
    public add(a: number, b: number): number {
        return a + b;
    }
}

const calculator = new Calculator();
calculator.add(1, 2);


// Output:
// Call: add(1,2) => 3
