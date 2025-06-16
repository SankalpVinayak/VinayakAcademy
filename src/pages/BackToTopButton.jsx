import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Optional: You can use any icon

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        showButton && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-5 right-5 bg-purple-600 text-white p-3 rounded-full shadow-lg 
                hover:bg-purple-700 cursor-pointer transition-all"
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        )
    );
};

export default BackToTopButton;
