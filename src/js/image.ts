import {IInputType} from "./inputs";

const element = document.getElementById('overlay');
let imageTimer: NodeJS.Timeout;

export function displayImage(input: IInputType) {
    element?.setAttribute('src', `/images/overlay/${input.name}.png`);
    element?.classList.add('visible');

    clearTimeout(imageTimer);
    imageTimer = setTimeout(hideImage, input.duration);
}

export function hideImage() {
    element?.classList.remove('visible');
}
