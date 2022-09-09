// Bridge Pattern example
// ================================================================================================================
// It allow to split a large class or a set of closely related classes into two separate hierarchies - abstraction and implementation - which can be developed independently of each other.

interface Device {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    getVolume(): number;
    setVolume(percent: number): void;
    getChannel(): number;
    setChannel(channel: number): void;
}

class Radio implements Device {
    private enabled = false;
    private volume = 30;
    private channel = 1;
    
    isEnabled() {
        return this.enabled;
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
    }
    getVolume() {
        return this.volume;
    }
    setVolume(percent: number) {
        this.volume = percent;
    }
    getChannel() {
        return this.channel;
    }
    setChannel(channel: number) {
        this.channel = channel;
    }
}

class RemoteControl {
    constructor(protected device: Device) {
        this.device = device;
    }
    togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }
    }
    volumeDown() {
        this.device.setVolume(this.device.getVolume() - 10);
    }
    volumeUp() {
        this.device.setVolume(this.device.getVolume() + 10);
    }
    channelDown() {
        this.device.setChannel(this.device.getChannel() - 1);
    }
    channelUp() {
        this.device.setChannel(this.device.getChannel() + 1);
    }
}

class AdvancedRemoteControl extends RemoteControl {
    mute() {
        this.device.setVolume(0);
    }
}

const radio = new Radio();
const remote = new RemoteControl(radio);
const advancedRemote = new AdvancedRemoteControl(radio);
remote.togglePower();
console.log(radio.isEnabled());
advancedRemote.mute();
console.log(radio.getVolume());