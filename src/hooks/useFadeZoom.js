import { useEffect } from "react";

export default function useFadeZoom() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("zoom-in");
                    } else {
                        entry.target.classList.remove("zoom-in");
                    }
                });
            },
            {
                threshold: 0.1, // lower = easier to trigger
                rootMargin: "0px 0px -20% 0px", // mobile scroll-friendly
            }
        );

        const elements = document.querySelectorAll(".fade-zoom");
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);
}
