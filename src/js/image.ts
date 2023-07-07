import { IInputType, inputsAsArray } from "./inputs";

const imageElement = document.getElementById('overlay');
let imageTimer: NodeJS.Timeout;

export async function preloadImages(): Promise<void> {
    await Promise.all(inputsAsArray.map((input: IInputType) => loadImage(input.name)));
}

async function loadImage(name: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = document.createElement('img');

        image.setAttribute('alt', name);
        image.setAttribute('src', `/images/overlay/${name}.png`);

        image.addEventListener('load', function () {
            resolve(image);
        });

        image.addEventListener('error', function (error) {
            reject(error);
        });
    });
}

export function displayImage(input: IInputType): void {
    imageElement?.setAttribute('src', `/images/overlay/${input.name}.png`);
    showImage();

    clearTimeout(imageTimer);
    imageTimer = setTimeout(hideImage, input.duration);
}

function showImage(): void {
    imageElement?.classList.add('visible');
}

function hideImage(): void {
    imageElement?.classList.remove('visible');
}
