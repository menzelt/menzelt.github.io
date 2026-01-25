fetch('../templates/footer.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
      const encoded = "dGltb21lbnplbDk3QGdteC5kZQ==";
      const email = atob(encoded);
      const el = document.getElementById("email");
      if (el) el.innerHTML = `<a href="mailto:${email}">${email}</a>`;
  });
