document.addEventListener('mousemove', function (event) {
    parallax(event);
});

function parallax(event) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const speed = section.getAttribute('data-speed');
        const x = (window.innerWidth - event.clientX * speed) / 100;
        const y = (window.innerHeight - event.clientY * speed) / 100;
        section.style.backgroundPosition = `${x}px ${y}px`;
    });
}
