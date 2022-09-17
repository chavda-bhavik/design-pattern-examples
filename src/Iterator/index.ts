// Iterator pattern example
// Iterator pattern is a design pattern in which an iterator is used to traverse a container and access the container's elements. The iterator pattern decouples algorithms from containers; in some cases, algorithms are necessarily container-specific and thus cannot be decoupled.
// ==============================

interface IteratorB<T> {
    nextElement(): T;
    hasNext(): boolean;
}

class AlphabeticalOrderIterator implements IteratorB<string> {
    private collection: WordsCollection;
    private position: number = 0;
    private reverse: boolean = false;

    constructor(collection: WordsCollection, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;

        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }

    public nextElement(): string {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    public hasNext(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }

        return this.position < this.collection.getCount();
    }
}

class WordsCollection {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): AlphabeticalOrderIterator {
        return new AlphabeticalOrderIterator(this);
    }

    public getReverseIterator(): AlphabeticalOrderIterator {
        return new AlphabeticalOrderIterator(this, true);
    }
}

const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

console.log('Straight traversal:');
const iterator = collection.getIterator();
while (iterator.hasNext()) {
    console.log(iterator.nextElement());
}
console.log('');

console.log('Reverse traversal:');  
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.hasNext()) {
    console.log(reverseIterator.nextElement());
}

// Output:
// Straight traversal:
// First
// Second
// Third

// Reverse traversal:
// Third
// Second
// First
