import {Howl} from "howler";
// @ts-ignore
import bgm from '../../assets/audios/lobby.mp3';
// @ts-ignore
import pingEffect from '../../assets/audios/effects/ping.mp3';

export const BackgroundSound = new Howl({
    src: [bgm],
    volume: 0.5,
    loop: true
});

export const ChatSound = new Howl({
    src: [pingEffect],
    volume: 0.5
});
