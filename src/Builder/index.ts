// Builder Pattern example
// Builder Pattern is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.
// The Builder pattern is a good choice when designing classes whose constructors or static factories would have more than a handful of parameters.
// The Builder pattern is also a good choice when designing classes that must be immutable.
// ==================================================

// @ts-ignore
class Keyboard {
    public keys: number;
    public color: string;
    public backlight: boolean;
    public connectionType: string;

    constructor(keys: number, color: string, backlight: boolean, connectionType: string) {
        this.keys = keys;
        this.color = color;
        this.backlight = backlight;
        this.connectionType = connectionType;
    }

    public getPrice(): number {
        return this.keys * 10 + (this.backlight ? 50 : 0) + (this.color === 'black' ? 0 : 20) + (this.connectionType === 'wired' ? 0 : 20) + 100; // 100 is base price
    }
}

abstract class KeyboardBuilder {
    abstract getKeyboard(): Keyboard;
    abstract addKeys(): void;
    abstract getPrice(): number;
    abstract setColor(): void;
    abstract setConnectionType(): void;
    abstract setBacklight(): void;
}

class GamingKeyboardBuilder extends KeyboardBuilder {
    private keyboard: Keyboard;

    constructor() {
        super();
        this.keyboard = new Keyboard(0, '', false, '');
    }

    public addKeys(): void {
        this.keyboard.keys = 90;
    }

    public getPrice(): number {
        return this.keyboard.getPrice();
    }

    public setColor(): void {
        this.keyboard.color = 'Black';
    }

    public setConnectionType(): void {
        this.keyboard.connectionType = 'Wireless';
    }

    public setBacklight(): void {
        this.keyboard.backlight = true;
    }

    public getKeyboard(): Keyboard {
        return this.keyboard;
    }
}
class OfficeKeyboardBuilder extends KeyboardBuilder {
    private keyboard: Keyboard;

    constructor() {
        super();
        this.keyboard = new Keyboard(0, '', false, '');
    }

    public addKeys(): void {
        this.keyboard.keys = 104;
    }

    public getPrice(): number {
        return this.keyboard.getPrice();
    }

    public getKeyboard(): Keyboard {
        return this.keyboard;
    }

    public setColor(): void {
        this.keyboard.color = 'White';
    }

    public setConnectionType(): void {
        this.keyboard.connectionType = 'Wired';
    }

    public setBacklight(): void {
        this.keyboard.backlight = false;
    }

}
class Director {
    private builder: KeyboardBuilder;

    constructor(builder: KeyboardBuilder) {
        this.builder = builder;
    }

    public setBuilder(builder: KeyboardBuilder): void {
        this.builder = builder;
    }

    public getKeyboard(): Keyboard {
        return this.builder.getKeyboard();
    }

    public constructKeyboard(): number {
        this.builder.addKeys();
        this.builder.setBacklight();
        this.builder.setConnectionType();
        this.builder.setColor();
        return this.builder.getPrice();
    }
}

class Client {
    public static main(): void {
        const gamingKeyboardBuilder = new GamingKeyboardBuilder();
        const officeKeyboardBuilder = new OfficeKeyboardBuilder();
        const director = new Director(gamingKeyboardBuilder);
        const gamingKeyboardPrice = director.constructKeyboard();
        console.log(gamingKeyboardPrice);
        director.setBuilder(officeKeyboardBuilder);
        const officeKeyboardPrice = director.constructKeyboard();
        console.log(officeKeyboardPrice);
    }
}

Client.main();
export {}