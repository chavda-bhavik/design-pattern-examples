// State pattern example
// State pattern is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.
// =====================================================================================================================

class AudioPlayer {
    private state: State;
    constructor() {
        this.state = new ReadyState1(this);
    }
    changeState(state: State) {
        this.state = state;
    }
    clickLock() {
        this.state.clickLock();
    }
    clickPlay() {
        this.state.clickPlay();
    }
    clickNext() {
        this.state.clickNext();
    }
    clickPrevious() {
        this.state.clickPrevious();
    }
}

abstract class State {
    protected player: AudioPlayer;
    constructor(player: AudioPlayer) {
        this.player = player;
    }
    abstract clickLock(): void;
    abstract clickPlay(): void;
    abstract clickNext(): void;
    abstract clickPrevious(): void;
}

class LockedState extends State {
    clickLock() {
        console.log('Unlocking player');
        this.player.changeState(new ReadyState1(this.player));
    }
    clickPlay() {
        console.log('Player is locked');
    }
    clickNext() {
        console.log('Player is locked');
    }
    clickPrevious() {
        console.log('Player is locked');
    }
}

class ReadyState1 extends State {
    clickLock() {
        console.log('Locking player');
        this.player.changeState(new LockedState(this.player));
    }
    clickPlay() {
        console.log('Playing');
        this.player.changeState(new PlayingState(this.player));
    }
    clickNext() {
        console.log('Next');
    }
    clickPrevious() {
        console.log('Previous');
    }
}

class PlayingState extends State {
    clickLock() {
        console.log('Locking player');
        this.player.changeState(new LockedState(this.player));
    }
    clickPlay() {
        console.log('Pausing');
        this.player.changeState(new ReadyState1(this.player));
    }
    clickNext() {
        console.log('Next');
    }
    clickPrevious() {
        console.log('Previous');
    }
}

const player = new AudioPlayer();
player.clickPlay();
player.clickLock();
player.clickPlay();
player.clickNext();
player.clickPrevious();

// Output:
// Playing
// Locking player
// Unlocking player
// Next
// Previous