// FactoryMethod Design Pattern - Creational Category
// Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
// ================================================================================================================
// Logistic Factory Application example 
// Factory Produces Chair, Table & Sofa

// 1. Product Interfaces
interface Product {
    getProductName(): string;
    buildProduct(): string;
}
class Chair implements Product {
    private name = 'Chair';
    getProductName(): string {
        return this.name;
    }
    buildProduct(): string {
        return 'Chair is build';
    }
}
class Table implements Product {
    private name = 'Table';
    getProductName(): string {
        return this.name;
    }
    buildProduct(): string {
        return 'Table is build';
    }
}
class Sofa implements Product {
    private name = 'Sofa';
    getProductName(): string {
        return this.name;
    }
    buildProduct(): string {
        return 'Sofa is build';
    }
}

// 2. Factory Interface
abstract class Factory {
    abstract buildProduct(): Product;
    sellProduct() {
        let product = this.buildProduct();
        return `Factory: ${product.getProductName()} is Build & sold`;
    }
}
class ChairFactory extends Factory {
    buildProduct(): Product {
        return new Chair();
    }
}
class TableFactory extends Factory {
    buildProduct(): Product {
        return new Table();
    }
}
class SofaFactory extends Factory {
    buildProduct(): Product {
        return new Sofa();
    }
}

// 3. Client
class Client {
    private factory: Factory;
    constructor(factory: Factory) {
        this.factory = factory;
    }
    sellProduct() {
        return this.factory.sellProduct();
    }
}

// 4. Application
function clientCode(factory: Factory) {
    let client = new Client(factory);
    console.log(client.sellProduct());
}

// 5. Client
console.log('===Chair Factory===');
clientCode(new ChairFactory());
console.log('===Table Factory===');
clientCode(new TableFactory());
console.log('===Sofa Factory===');
clientCode(new SofaFactory());