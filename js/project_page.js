// Get slug from URL
const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');

fetch('../data/projects.json')
  .then(res => res.json())
  .then(data => {
    const project = data.find(p => p.slug === slug)

    if (project) {

        const titleElement = document.querySelector('title');
        titleElement.textContent = `${project.short_title} — Timo Menzel`;

        const project_page = document.querySelector('.project-page');
        const project_container = document.createElement('div');
        project_container.className = 'project-container';

        const project_left = document.createElement('div');
        project_left.className = 'project-left';
        project_left.innerHTML = `
        <h1>${project.title}</h1>
        <p class="authors">${project.authors}</p>
        <p class="conf_journal">${project.venue}, ${project.year}</p>
        <p class="description">${project.description}</p>
        <div class="publication-buttons">
              ${project.url ? `<a href="${project.url}" target="_blank" class="btn">Official Publication</a>` : ''}
              ${project.project_page ? `<a href="${project.project_page}" target="_blank" class="btn">Project Page</a>` : ''}
        </div>
        `;

        const project_right = document.createElement('div');
        project_right.className = 'project-right';
        project_right.innerHTML = `
        <img src="../assets/${project.image ? project.image : 'dummy.svg'}" alt="Example image" class="project-image">
        `;

        project_container.appendChild(project_left);
        project_container.appendChild(project_right);
        project_page.appendChild(project_container);
    }
  })
  .catch(err => console.error('Error loading projects.json:', err));
