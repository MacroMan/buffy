import { preloadAudio } from "./audio";
import { preloadImages } from "./image";

const preloadElement = document.getElementById("preload");
const loadingElement = document.getElementById("loading");

export default async function (): Promise<void> {
    return new Promise((resolve) => {
        preloadElement?.addEventListener('click', async () => {
            hidePreload();
            showLoader();

            await Promise.all([
                preloadAudio(),
                preloadImages(),
            ]);

            hideLoader();
            resolve();
        });
    });
}

function hidePreload(): void {
    preloadElement?.classList.remove('visible');
}

function showLoader(): void {
    loadingElement?.classList.add("visible");
}

function hideLoader(): void {
    loadingElement?.classList.remove("visible");
}
