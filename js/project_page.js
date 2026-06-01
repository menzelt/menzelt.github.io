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
              ${project.url ? `<a href="${project.url}" target="_blank" class="btn">Publisher Site</a>` : ''}
              ${project.project_page ? `<a href="${project.project_page}" target="_blank" class="btn">Project Page</a>` : ''}
        </div>
        `;

        const project_right = document.createElement('div');
        project_right.className = 'project-right';
        project_right.innerHTML = `
        <img src="../assets/${project.image ? `projects/${slug}/${project.image}` : 'dummy.svg'}" alt="Example image" class="project-image">
        <p class="image-caption">${project.image_caption ? project.image_caption : ''}</p>
        `;

        project_container.appendChild(project_left);
        project_container.appendChild(project_right);
        project_page.appendChild(project_container);

        if (project.video_webm || project.video_mp4) {
            const video_section = document.createElement('div');
            video_section.className = 'project-video-section';
            
            video_section.innerHTML = `
                <hr style="border: 0; border-top: 1px solid var(--border-light); margin: 40px 0;">
                <h3 style="margin-bottom: 20px; color: var(--text-main); font-size: 1.4rem;">Project Demonstration</h3>
                <div class="highlight-video-container" style="margin: 0 auto; max-width: 900px;">
                    <video controls autoplay loop muted playsinline poster="../assets/${project.video_poster ? `projects/${slug}/${project.video_poster}` : 'dummy.svg'}">
                        ${project.video_webm ? `<source src="../assets/projects/${slug}/${project.video_webm}" type="video/webm">` : ''}
                        ${project.video_mp4 ? `<source src="../assets/projects/${slug}/${project.video_mp4}" type="video/mp4">` : ''}
                        <p>Your browser does not support the video tag. You can 
                            <a href="../assets/projects/${slug}/${project.video_mp4 || project.video_webm}">download the video here</a>.
                        </p>
                    </video>
                </div>
            `;
            
            project_page.appendChild(video_section);
        }
    }
  })
  .catch(err => console.error('Error loading projects.json:', err));
