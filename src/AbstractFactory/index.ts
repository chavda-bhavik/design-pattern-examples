// AbstractFactory example, Application for Electronic Menufactory that produces Mouse, Keyboard & Moniter
// AbstractFactory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.
// ================================================================================================================
// ================ GamingMenu ============== OfficeMenu ================
// Mouse Types:      Gaming,                   Office, 
// Keyboard Types:   Gaming,                   Mechanical
// Moniter Types:    Curved,                   Flat
// ================================================================================================================

// 1. Abstract Product Interfaces
abstract class Mouse {
    abstract getMouseType(): string;
    abstract buildMouse(): string;
}
abstract class Keyboard {
    abstract getKeyboardType(): string;
    abstract buildKeyboard(): string;
}
abstract class Moniter {
    abstract getMoniterType(): string;
    abstract buildMoniter(): string;
}

// 2. Concrete Product Classes
class GamingMouse extends Mouse {
    private type = 'Gaming Mouse';
    getMouseType(): string {
        return this.type;
    }
    buildMouse(): string {
        return 'Gaming Mouse is build';
    }
}
class OfficeMouse extends Mouse {
    private type = 'Office Mouse';
    getMouseType(): string {
        return this.type;
    }
    buildMouse(): string {
        return 'Office Mouse is build';
    }
}
class GamingKeyboard extends Keyboard {
    private type = 'Gaming Keyboard';
    getKeyboardType(): string {
        return this.type;
    }
    buildKeyboard(): string {
        return 'Gaming Keyboard is build';
    }
}
class MechanicalKeyboard extends Keyboard {
    private type = 'Mechanical Keyboard';
    getKeyboardType(): string {
        return this.type;
    }
    buildKeyboard(): string {
        return 'Mechanical Keyboard is build';
    }
}
class CurvedMoniter extends Moniter {
    private type = 'Curved Moniter';
    getMoniterType(): string {
        return this.type;
    }
    buildMoniter(): string {
        return 'Curved Moniter is build';
    }
}
class FlatMoniter extends Moniter {
    private type = 'Flat Moniter';
    getMoniterType(): string {
        return this.type;
    }
    buildMoniter(): string {
        return 'Flat Moniter is build';
    }
}

// 3. Abstract Factory Interface
abstract class ElectronicMenuFactory {
    abstract createMouse(): Mouse;
    abstract createKeyboard(): Keyboard;
    abstract createMoniter(): Moniter;
}

// 4. Concrete Factory Classes
class GamingMenuFactory extends ElectronicMenuFactory {
    createMouse(): Mouse {
        return new GamingMouse();
    }
    createKeyboard(): Keyboard {
        return new GamingKeyboard();
    }
    createMoniter(): Moniter {
        return new CurvedMoniter();
    }
}
class OfficeMenuFactory extends ElectronicMenuFactory {
    createMouse(): Mouse {
        return new OfficeMouse();
    }
    createKeyboard(): Keyboard {
        return new MechanicalKeyboard();
    }
    createMoniter(): Moniter {
        return new FlatMoniter();
    }
}

// 5. Application
class Application {
    private mouse: Mouse;
    private keyboard: Keyboard;
    private moniter: Moniter;
    constructor(factory: ElectronicMenuFactory) {
        this.mouse = factory.createMouse();
        this.keyboard = factory.createKeyboard();
        this.moniter = factory.createMoniter();
    }
    getMouse(): Mouse {
        return this.mouse;
    }
    getKeyboard(): Keyboard {
        return this.keyboard;
    }
    getMoniter(): Moniter {
        return this.moniter;
    }
}

// 6. Client
console.log('===Gaming Menu===');
const gamingMenu = new Application(new GamingMenuFactory());
const gamingMouse = gamingMenu.getMouse();
const gamingKeyboard = gamingMenu.getKeyboard();
const gamingMoniter = gamingMenu.getMoniter();
console.log(gamingMouse.getMouseType());
console.log(gamingKeyboard.getKeyboardType());
console.log(gamingMoniter.getMoniterType());

console.log('===Office Menu===');
const officeMenu = new Application(new OfficeMenuFactory());
const officeMouse = officeMenu.getMouse();
const officeKeyboard = officeMenu.getKeyboard();
const officeMoniter = officeMenu.getMoniter();
console.log(officeMouse.getMouseType());
console.log(officeKeyboard.getKeyboardType());
console.log(officeMoniter.getMoniterType());