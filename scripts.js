// Data projects dalam format JSON
const projects = [
    {
        "image": "project1.jpg",
        "title": "Project 1",
        "description": "A wonderful project that achieved great results.",
        "link": "project1.html"
    },
    {
        "image": "project2.jpg",
        "title": "Project 2",
        "description": "An innovative project that pushed boundaries.",
        "link": "project2.html"
    },
    {
        "image": "project3.jpg",
        "title": "Project 3",
        "description": "A creative project that stood out among others.",
        "link": "project3.html"
    }
];

// Load projects dynamically
function loadProjects() {
    const container = document.getElementById('cards-container');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <a href="${project.link}" target="_blank">
                <img src="${project.image}" alt="${project.title}">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
            </a>
        `;

        container.appendChild(card);
    });
}

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Event listeners
window.onload = loadProjects;
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
