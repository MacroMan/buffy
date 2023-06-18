'use strict';

import {inputs} from "./inputs";
import {displayImage} from "./image";
import {playAudio} from "./audio";

const input = document.getElementById('input') as HTMLInputElement;

document.getElementById('body')?.addEventListener('pointerdown', () => {
    input.focus();
});

input.addEventListener('focusout', () => {
    input.focus();
});

input.addEventListener('input', () => {
    const letter = input.value;
    input.value = '';

    const output = inputs[letter];

    if (output) {
        displayImage(output);
        playAudio(output.name);
    }
});
