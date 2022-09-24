// Strategy Pattern example
// Strategy pattern is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.
// =====================================================================================================================

class Context {
    private strategy: Strategy;
    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }
    doSomeBusinessLogic() {
        console.log('Context: Sorting data using the strategy (not sure how it\'ll do it)');
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }
}

interface Strategy {
    doAlgorithm(data: string[]): string[];
}

class ConcreteStrategyA implements Strategy {
    doAlgorithm(data: string[]): string[] {
        return data.sort();
    }
}

class ConcreteStrategyB implements Strategy {
    doAlgorithm(data: string[]): string[] {
        return data.reverse();
    }
}

const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context.doSomeBusinessLogic();
console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();

// Output:
// Client: Strategy is set to normal sorting.
// Context: Sorting data using the strategy (not sure how it'll do it)
// a,b,c,d,e
// Client: Strategy is set to reverse sorting.
// Context: Sorting data using the strategy (not sure how it'll do it)
// e,d,c,b,a