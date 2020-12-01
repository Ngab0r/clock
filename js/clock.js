'use strict';

const clockDiv = document.querySelector('.clock');

const writeTime = () => {
    clockDiv.innerHTML = new Date().toLocaleTimeString();
    setTimeout(() => writeTime(), 1000);
};

writeTime();