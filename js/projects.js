fetch('../data/projects.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.querySelector('.project-grid');

    // Sort by year descending (newest first)
    data.reverse().sort((a, b) => b.year - a.year);

    data.forEach(project => {
      const card_wrapper = document.createElement('div');
      card_wrapper.className = 'project-card-wrapper';
      const card = document.createElement('a');
      card.href = `projects/project.html?slug=${project.slug}`;
      card.className = 'project-card';

      card.innerHTML = `
        <h3>${project.short_title}</h3>
        <p>${project.short_description}</p>
        <p><strong>${project.year}</strong></p>
      `;


      card_wrapper.appendChild(card);
      grid.appendChild(card_wrapper);
    });
    document.dispatchEvent(new Event("dynamicContentReady"));
  })
  .catch(err => console.error('Error loading projects.json:', err));