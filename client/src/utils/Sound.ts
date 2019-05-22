import {Howl} from 'howler';
// @ts-ignore
import bgm from '../assets/audios/lobby.mp3';
// @ts-ignore
import pingEffect from '../assets/audios/effects/ping.mp3';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const BackgroundSound = new Howl({
    src: [bgm],
    volume: cookies.get('backgroundsound') !== undefined ? cookies.get('backgroundsound') : 0.5,
    loop: true
});

export const ChatSound = new Howl({
    src: [pingEffect],
    volume: cookies.get('soundeffect') !== undefined ? cookies.get('soundeffect') : 0.5
});

export const SoundManager = {
    setBackgroundVolume(v: number) {
        BackgroundSound.volume(v);
    },
    setSoundEffectVolume(v: number) {
        ChatSound.volume(v);
    },
    setBackgroundCookie(v: number) {
        cookies.set('backgroundsound', v, {path: '/rooms'});
    },
    setSoundEffectCookie(v: number) {
        cookies.set('soundeffect', v, {path: '/rooms'});
    }
};
