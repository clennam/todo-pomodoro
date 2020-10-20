/**
 * Stores booleans to show which sounds are activated for playback.
 */
export class SoundsConfig {
    crankEnabled: boolean;
    tickEnabled: boolean;
    dingEnabled: boolean;

    constructor() {
        this.crankEnabled = true;
        this.tickEnabled = false;
        this.dingEnabled = true;
    }
}