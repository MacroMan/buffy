import { Howl } from 'howler';
import { IInputType, inputsAsArray } from "./inputs";

const definedAudio: { [key: string]: Howl } = {};

export async function preloadAudio(): Promise<void> {
    await Promise.all(inputsAsArray.map((input: IInputType) => loadAudio(input.name)));
}

async function loadAudio(name: string): Promise<Howl> {
    return new Promise((resolve, reject) => {
        const audio = new Howl({
            src: [`audio/${name}.mp3`]
        });

        audio.on('load', () => {
            definedAudio[name] = audio;

            resolve(audio);
        });

        audio.on('loaderror', () => {
            reject(`Unable to load audio ${name}`);
        });
    });
}

export async function playAudio(name: string): Promise<void> {
    let audio = definedAudio[name];
    if (!audio) {
        audio = await loadAudio(name);
    }

    audio.play();
}
