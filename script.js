//your JS code here. If required.
const panels = document.querySelectorAll('.panel');

// Set the first panel as active initially
panels[0].classList.add('active');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Remove active class from all panels
        panels.forEach(p => p.classList.remove('active'));
        // Add active class to the clicked panel
        panel.classList.add('active');
    });
});
