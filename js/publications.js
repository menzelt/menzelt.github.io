fetch('../data/publications.json')
  .then(res => res.json())
  .then(data => {
      const container = document.querySelector('.publication-container');
      
      // Sort publications newest -> oldest
      data.reverse().sort((a, b) => b.year - a.year);
      
      let currentYear = null;
      data.forEach(pub => {
          // Add year header if new
          if(pub.year !== currentYear) {
              currentYear = pub.year;
              const yearHeader = document.createElement('h3');
              yearHeader.textContent = currentYear;
              yearHeader.classList.add('publication-year');
              container.appendChild(yearHeader);
          }

          // Create publication card
          const card = document.createElement('div');
          card.classList.add('publication-card');

          card.innerHTML = `
            <h4>${pub.title}</h4>
            <p class="authors">${pub.authors}</p>
            <p class="venue">${pub.venue}</p>
            <div class="publication-buttons">
              ${pub.url ? `<a href="${pub.url}" target="_blank" class="btn">Official Publication</a>` : ''}
              ${pub.project_page ? `<a href="${pub.project_page}" target="_blank" class="btn">Project Page</a>` : ''}
            </div>
          `;

          container.appendChild(card);
      });
      document.dispatchEvent(new Event("dynamicContentReady"));
  });

