import { useEffect, useRef } from "react"; 

/**
 * Flips data-visible on an element the first time it scrolls into view 
 * which triggers the .reveal transition in index.css
 */

export function useReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current; 
        if(!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    el.dataset.visible = "true";
                    observer.disconnect(); 

                }
            }, 
            { threshold: 0.15, rootMargin: "0px 0px -10% 0px"},
        );

        observer.observe(el);
        return () => observer.disconnect();
            }, []);
return ref; 
}