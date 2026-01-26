fetch('../templates/footer.html')
    .then(response => response.text())
    .then(footer_template => {
        fetch('../data/personal.json')
            .then(res => res.json())
            .then(personal_data => {
                document.getElementById("footer-placeholder").innerHTML = footer_template;

                // populate email
                const u = "timomenzel97";
                const d = "gmx.de";
                const e = `${u}@${d}`;

                const el = document.getElementById("email");
                if (el) el.innerHTML = `<a href="mailto:${e}">${e}</a>`;

                // populate socials
                const socials_container = document.getElementById("footer-socials-container");
                socials_container.innerHTML = `
        ${Object.values(personal_data.socials).map(social => `<a href="${social.url}" target="_blank" rel="noopener noreferrer">${social.label}</a>`).join(' · ')}
        `;

                // populate copyright year
                const copyright_el = document.getElementById("copyright");
                const current_year = new Date().getFullYear();
                copyright_el.innerText = `© ${current_year} ${personal_data.name}`;

            });
    });