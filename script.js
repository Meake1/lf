
const videoButton = document.getElementById('videoButton');
const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const closeButton = document.getElementById('closeButton');

videoButton.addEventListener('click', () => {
    videoModal.classList.add('active');
    videoPlayer.play();
    document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
    videoModal.classList.remove('active');
    videoPlayer.pause();
    document.body.style.overflow = 'auto';
});

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        videoPlayer.pause();
        document.body.style.overflow = 'auto';
    }
});


const floatingWidget = document.getElementById('floatingWidget');
const floatingContent = document.getElementById('floatingContent');

floatingWidget.addEventListener('click', () => {
    floatingContent.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    if (!floatingWidget.contains(e.target) && !floatingContent.contains(e.target)) {
        floatingContent.classList.remove('active');
    }
});


const animateElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

animateElements.forEach(element => {
    observer.observe(element);
});


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.boxShadow = 'var(--shadow)';
        header.style.backgroundColor = 'var(--background-color)';
    }
});