import { hikingTrails, curatedTrails } from "./data.js"

// Variables - Global
const sidebarDisplay = document.querySelector('.nav__sidebar')
const sidebarIcon = document.querySelector('.nav__sidebar-icon')
const sidebarExitBtn = document.querySelector('.nav__sidebar-close')
const overlayEl = document.querySelector('.overlay')
// Variables - index.html
const articlesEl = document.querySelector('.articles')
// Variables - explore.html
const curatedTrailsEl = document.querySelector('.curated-trails')

// Event Listeners - Global
sidebarIcon.addEventListener("click", function() {
    sidebarDisplay.style.right = "0px";
    overlayEl.classList.toggle('hidden');
});
sidebarExitBtn.addEventListener("click", function() {
    sidebarDisplay.style.right = "-300px";
    overlayEl.classList.toggle('hidden')
});

document.addEventListener('DOMContentLoaded', (event) => {
    renderHikingInformation();
    renderCuratedTrails();
});

// Functions - index.html
function renderHikingInformation() {
    if (!articlesEl) return
    let html = '';
    for (let trail of hikingTrails) {
        html += `
            <div class='trail'>
                <img src='${trail.image}'>
                <div class='trail-details'>
                    <h2>${trail.name}</h2>
                    <h4>Length: ${trail.length} km - Est. ${trail.time}</h4>
                    <p>${trail.description}</p>
                    <button class='green-button'>LEARN MORE</button>
                </div>
            </div>
        `;
    }
    articlesEl.innerHTML = html
}

// Functions - explore.html
function renderCuratedTrails() {
    if (!curatedTrailsEl) return
    let html = '';
    for (let trail of curatedTrails) {
        html += `
            <div class='curated-trail-container'>
                <img class='curated-trail-img' src="${trail.image}">
                <div>
                    <h2>${trail.name}</h2>
                    <h3>${trail.difficulty} <img class="rating-icon" style="display:inline" src="./images/rating-icon.png" alt="rating-icon"> ${trail.rating} (${trail.reviews})</h3>
                </div>
                <p>${trail.description}</p>
            </div>
        `;
    }
    curatedTrailsEl.innerHTML = html
}