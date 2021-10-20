"use strict"

const submit = document.querySelector('#saveSettings');
const settingsIcon = document.querySelector('#settings');

const backgrounds = {
    0: ['./backgrounds/particles/particles.js', './backgrounds/particles/particles.css'],
    1: ['./backgrounds/balls/balls.js', './backgrounds/balls/balls.css'],
    2: ['', 'backgrounds/gradients/gradient.css'],
    3: ['./img/jellyfish.jpg'],
    4: ['./img/colored-smoke.jpg'],
    5: ['./img/cube1.jpg'],
    6: ['./img/cube2.jpg']
};

setBackground();

settingsIcon.addEventListener('click', () => {
    const backgroundSelection = document.querySelector('#backgroundSelection');
    const manualEntry = document.querySelector('#entryManual');
    const scrambleLen = document.querySelector('#scrambleLength');
    backgroundSelection.value = settings.background;
    manualEntry.checked = settings.manualEntry;
    scrambleLen.value = settings.scrambleLen;
})

submit.addEventListener('click', () => {
    const backgroundSelection = document.querySelector('#backgroundSelection');
    const manualEntry = document.querySelector('#entryManual');
    const scrambleLen = document.querySelector('#scrambleLength');
    settings.background = backgroundSelection.value;
    settings.manualEntry = manualEntry.checked;
    settings.scrambleLen = Number(scrambleLen.value);
    updateLSData(settingsKey, settings);
    window.location.reload();
});

function setBackground() {
    const backgroundIndex = settings.background;
    console.log(backgroundIndex);
    if (backgroundIndex > 2) {
        const image = backgrounds[backgroundIndex];
        document.body.style.backgroundImage = `url(${image})`;
    } else {
        const source = backgrounds[backgroundIndex];
        const currentScript = source[0];
        const currentCSS = source[1];
        let myScript = document.createElement("script");
        myScript.setAttribute("src", currentScript);
        document.body.appendChild(myScript);
        document.head.innerHTML += `<link rel="stylesheet" href="${currentCSS}">`;
    }
}