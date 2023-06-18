import {Howl} from 'howler';

const definedAudio: { [key: string]: Howl } = {};

export function playAudio(name: string) {
    let audio = definedAudio[name] as Howl;
    if (!audio) {
        audio = new Howl({
            src: [`audio/${name}.mp3`]
        });

        definedAudio[name] = audio;
    }

    audio.play();
}
