document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const details = document.getElementById("details").value;

    const message =
`Hello Jokibo,
Name: ${name}
Email: ${email}

Project Details:
${details}`;

    const whatsappURL =
        `https://wa.me/254793819071?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener, noreferrer");
})
;