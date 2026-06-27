import React, { useState, useEffect, useCallback } from "react";
import "./Gallery.css";
import image1 from "../../assets/images/image copy 2.png";
import image2 from "../../assets/images/image copy 3.png";
import image3 from "../../assets/images/image copy 4.png";
import image4 from "../../assets/images/image copy.png";
import image5 from "../../assets/images/image.png";
// TODO: import your 6th image too — e.g.:
// import image6 from "../../assets/images/image copy 5.png";

const photos = [
    {
        id: 1,
        src: image1,
        alt: "Single room with private comfort, neatly made bed",
        caption: "Single Room - Private Comfort",
    },
    {
        id: 2,
        src: image2,
        alt: "Twin sharing room with wardrobes and two beds",
        caption: "Twin Sharing - Comfortable Layout",
    },
    {
        id: 3,
        src: image3,
        alt: "Triple sharing dormitory room with three beds",
        caption: "Triple Sharing - Spacious Design",
    },
    {
        id: 4,
        src: image4,
        alt: "Common dining and seating area with ambient lighting",
        caption: "Common Area - Ambiance",
    },
    {
        id: 5,
        src: image5,
        alt: "Rooftop terrace view at night with city lights",
        caption: "Rooftop - City Lights",
    },
    // {
    //   id: 6,
    //   src: image6,
    //   alt: "Rooftop garden seating area lit up in the evening",
    //   caption: "Rooftop - Garden Ambiance",
    // },
];

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(null);
    const isOpen = activeIndex !== null;

    const openAt = (index) => setActiveIndex(index);
    const close = useCallback(() => setActiveIndex(null), []);

    const showPrev = useCallback((e) => {
        e.stopPropagation();
        setActiveIndex((i) => (i - 1 + photos.length) % photos.length);
    }, []);

    const showNext = useCallback((e) => {
        e.stopPropagation();
        setActiveIndex((i) => (i + 1) % photos.length);
    }, []);

    // Keyboard controls: Escape closes, arrow keys navigate.
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + photos.length) % photos.length);
            if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % photos.length);
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen, close]);

    // Lock background scroll while the lightbox is open.
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const activePhoto = isOpen ? photos[activeIndex] : null;

    return (
        <section className="gallery" aria-label="Photo gallery">
            <h2 className="gallery-heading" id="gallery-heading">
                A Glimpse of Nestly
            </h2>
            <p className="gallery-subheading">
                Explore our thoughtfully designed spaces, where comfort meets community.
            </p>

            <ul className="gallery-grid">
                {photos.map((photo, index) => (
                    <li className="gallery-item" key={photo.id}>
                        <button
                            type="button"
                            className="gallery-trigger"
                            onClick={() => openAt(index)}
                            aria-label={`View full screen: ${photo.caption || photo.alt}`}
                        >
                            <img
                                src={photo.src}
                                alt={photo.alt}
                                loading="lazy"
                                width="700"
                                height="455"
                            />
                            {photo.caption && (
                                <div className="gallery-caption">
                                    <span>{photo.caption}</span>
                                </div>
                            )}
                        </button>
                    </li>
                ))}
            </ul>

            {isOpen && (
                <div
                    className="lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={activePhoto.caption || activePhoto.alt}
                    onClick={close}
                >
                    <button
                        type="button"
                        className="lightbox-close"
                        onClick={close}
                        aria-label="Close full screen view"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        className="lightbox-nav lightbox-prev"
                        onClick={showPrev}
                        aria-label="Previous image"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
                        <img src={activePhoto.src} alt={activePhoto.alt} />
                        {activePhoto.caption && <figcaption>{activePhoto.caption}</figcaption>}
                    </figure>

                    <button
                        type="button"
                        className="lightbox-nav lightbox-next"
                        onClick={showNext}
                        aria-label="Next image"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </button>

                    <div className="lightbox-counter">
                        {activeIndex + 1} / {photos.length}
                    </div>
                </div>
            )}
        </section>
    );
}