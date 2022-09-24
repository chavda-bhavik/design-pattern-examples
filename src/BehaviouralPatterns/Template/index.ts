// Template Pattern example
// Template pattern is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
// =====================================================================================================================

abstract class Game {
    abstract initialize(): void;
    abstract startPlay(): void;
    abstract endPlay(): void;
    // template method
    play() {
        this.initialize();
        this.startPlay();
        this.endPlay();
    }
}

class Cricket extends Game {
    initialize() {
        console.log('Cricket Game Initialized! Start playing.');
    }
    startPlay() {
        console.log('Cricket Game Started. Enjoy the game!');
    }
    endPlay() {
        console.log('Cricket Game Finished!');
    }
}

class Football extends Game {
    initialize() {
        console.log('Football Game Initialized! Start playing.');
    }
    startPlay() {
        console.log('Football Game Started. Enjoy the game!');
    }
    endPlay() {
        console.log('Football Game Finished!');
    }
}

const game = new Cricket();
game.play();
console.log('');
const game2 = new Football();
game2.play();

// Output:
// Cricket Game Initialized! Start playing.
// Cricket Game Started. Enjoy the game!
// Cricket Game Finished!

// Football Game Initialized! Start playing.
// Football Game Started. Enjoy the game!
// Football Game Finished!
