const sections = document.querySelectorAll('.proj__section'); // Select all project sections
const navLinks = document.querySelectorAll('.nav__link'); // Select all navigation links

window.addEventListener('scroll', () => {
    let current = '';

    // Calculate the current section based on scroll position
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id'); // Get the ID of the active section
        }
    });

    // Update the active-link class for the navigation links
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});

// Handle 'Home' navigation link separately
document.querySelector('.nav__link[href="#"]').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    navLinks.forEach(link => link.classList.remove('active-link'));
    e.currentTarget.classList.add('active-link');
});

// Smooth scroll for all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            e.preventDefault();
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust the offset if needed
                behavior: 'smooth',
            });

            // Update active-link manually on click
            navLinks.forEach(link => link.classList.remove('active-link'));
            this.classList.add('active-link');
        }
    });
});
