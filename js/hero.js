fetch('../data/personal.json')
    .then(res => res.json())
    .then(data => {
        const hero_element = document.getElementById('hero-placeholder');

        const hero_container = document.createElement('div');
        hero_container.className = 'hero-container';
        hero_container.innerHTML = `
            <div class="hero-left">
                <img src="${data.profile_picture}" alt="Profile picture" class="profile-pic">
            </div>
                <div class="hero-right">
                    <h1>${data.name}</h1>
                <p class="subtitle">${data.role} | ${data.topics}</p>
                <p class="hero-institution">
                    ${data.role} at ${data.company}, expected to graduate ${data.graduation}.
                </p>
                <p class="description">
                    ${data.description}
                </p>
                <p class="links-inline">
                    ${Object.values(data.socials).filter(network => network.label !== "LinkedIn").map(network => `<a href="${network.url}" target="_blank">${network.label}</a>`).join(' · ')}
                </p>
            </div>
        `;
        hero_element.appendChild(hero_container);
    });
