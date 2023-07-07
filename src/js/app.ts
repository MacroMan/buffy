'use strict';

import { fromChar } from "./inputs";
import { displayImage } from "./image";
import { playAudio } from "./audio";
import loader from "./loader";

window.addEventListener('DOMContentLoaded', async () => {
    await loader();

    const input = document.getElementById("input");
    input?.focus();

    input?.addEventListener('blur', () => {
        input?.focus();
    });

    input?.addEventListener('input', (event: Event): void => {
        const inputEvent = event as InputEvent;
        const output = fromChar(inputEvent.data?.toLowerCase() as string);
        input.textContent = '';

        if (output) {
            displayImage(output);
            playAudio(output.name);
        }
    });
});
