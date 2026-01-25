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

//   <div class="project-container">
//             <div class="project-left">
//                 <h1>Avatars for the Masses: Smartphone-Based Reconstruction of Humans for Virtual Reality</h1>
//                 <p class="authors">Timo Menzel, Erik Wolf, Stephan Wenninger, Niklas Spinczyk, Lena Holderrieth, Carolin
//                     Wienrich, Ulrich Schwanecke, Marc Erich Latoschik, Mario Botsch</p>
//                 <p class="conf_journal">Frontiers in Virtual Reality - Volume 6, 2025</p>
//                 <p class="description">
//                     During my PhD, I developed <strong>Avatars for the Masses (A4M)</strong> — a full-body avatar
//                     reconstruction system that uses smartphones to capture realistic, VR-ready avatars. The system
//                     consists of a mobile application that visually guides users through the scanning process and a
//                     complementary compute server that automatically reconstructs personalized avatars. The design
//                     ensures that even inexperienced users can capture scans of sufficient quality in uncontrolled,
//                     in-the-wild scenarios. Using a combination of <strong>segmentation, landmark detection,
//                         photogrammetry, and template fitting</strong>, the server generates a high-quality avatar in
//                     approximately 20 minutes. The system has been extensively evaluated, demonstrating results on par
//                     with expert-operated setups.
//                 </p>
//                 <p class="links-inline">
//                     <a href="https://doi.org/10.3389/frvir.2025.1583474">Official Publication</a> · <a
//                         href="https://avatars.cs.tu-dortmund.de/">Project Page</a>
//                 </p>
//             </div>
//             <div class="project-right">
//                 <img src="../assets/dummy.jpg" alt="Example image" class="project-image">
//             </div>
//         </div>