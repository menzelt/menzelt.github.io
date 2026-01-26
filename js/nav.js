fetch('../templates/nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
        fetch('../data/personal.json')
            .then(res => res.json())
            .then(personal_data => {
                document.getElementById('home-link').innerHTML = personal_data.name;
                document.getElementById('linkedin-link').setAttribute('href', personal_data.socials.linkedin.url);
            });
    });
