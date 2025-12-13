document.addEventListener('DOMContentLoaded', () => {

    // ===============================================
    // Unique Animation 1: Typewriter Effect (Home Page)
    // ===============================================
    const textElement = document.getElementById('typewriter-text');
    if (textElement) {
        const sentences = [
            "A creative developer.",
            "A passionate designer.",
            "Ready for new challenges."
        ];
        let sentenceIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentSentence = sentences[sentenceIndex];

            if (isDeleting) {
                // Delete text
                textElement.textContent = currentSentence.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                // Type text
                textElement.textContent = currentSentence.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            // Check if typing is complete or deleting is complete
            if (!isDeleting && charIndex === currentSentence.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause at the end of the sentence
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                sentenceIndex = (sentenceIndex + 1) % sentences.length;
                typingSpeed = 200;
            }

            setTimeout(type, typingSpeed);
        }

        type(); // Start the typewriter effect
    }

    // ===============================================
    // Unique Animation 3: Scroll Fade-In Effect (All Pages)
    // ===============================================
    const scrollFadeElements = document.querySelectorAll('.scroll-fade');

    const observerOptions = {
        root: null, // relative to viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of element must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once the animation has played
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    scrollFadeElements.forEach(el => {
        observer.observe(el);
    });

});
