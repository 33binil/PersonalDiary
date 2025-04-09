import { useEffect } from "react";

export default function useFadeUp() {
    useEffect(() => {
        const fadeUps = document.querySelectorAll('.fade-up');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            },
            {
                threshold: 0.5, // Element must be at least 50% in view
            }
        );

        fadeUps.forEach((el) => observer.observe(el));

        return () => observer.disconnect(); // Clean up
    }, []);
}
