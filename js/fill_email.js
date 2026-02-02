
// const email_spans = document.querySelectorAll(".email");
// email_spans.forEach(el => {
//     // populate email
//     const u = "contact";
//     const d = "menzelt.io";
//     const e = `${u}@${d}`;

//     if (el) el.innerHTML = `<a href="mailto:${e}">${e}</a>`;
// });

   // fill_email.js
function populate_email() {
    const u = "contact";
    const d = "menzelt.io";
    const e = `${u}@${d}`;
    document.querySelectorAll(".email").forEach(el => {
        el.innerHTML = `<a href="mailto:${e}">${e}</a>`;
    });
}
populate_email();