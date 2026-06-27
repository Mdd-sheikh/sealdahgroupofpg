import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    quote:
      "The facial recognition entry makes me feel like I'm in a premium hotel, but the warmth of the staff makes it feel like home. I never have to worry about unwanted visitors or safety even if I return late from the library.",
    name: "Riya Sharma",
    role: "IT Professional (Resident)",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 2,
    quote:
      "The dedicated visitor policy is great. I can meet my friends in the beautiful lobby, but I know that only my flatmates and I can enter our private rooms. It creates such a secure atmosphere for studying.",
    name: "Priya Verma",
    role: "Final Year Student",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 3,
    quote:
      "Moving to a new city alone was scary for my parents, but after seeing the 24/7 guarding and CCTV setup, they finally have peace of mind. The whole building genuinely feels safe and looked after.",
    name: "Ananya Das",
    role: "Postgraduate Student",
    avatar: "https://i.pravatar.cc/100?img=14",
  },
  {
    id: 4,
    quote:
      "I work late shifts at the hospital, and the biometric access at the entrance means I never have to fumble for keys at midnight. The night guards know every resident by name — it feels like family.",
    name: "Kavya Reddy",
    role: "Resident Doctor",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    id: 5,
    quote:
      "The strict curfew sounded intense at first, but it's the reason my hostel actually feels calm and disciplined. I sleep better knowing exactly who's in the building at any given hour.",
    name: "Meher Kaur",
    role: "Design Intern",
    avatar: "https://i.pravatar.cc/100?img=23",
  },
];

const AUTOPLAY_INTERVAL = 4500;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
    setIndex(((i % testimonials.length) + testimonials.length) % testimonials.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Auto-advance the carousel, pausing on hover/focus and for reduced-motion users.
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isPaused || prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  return (
    <section
      className="testimonials"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="testimonials-inner">
        <header className="t-header">
          <div>
            <h2 id="testimonials-heading">Voices of Trust</h2>
            <p>
              Listen to the families and residents who call Nestly their
              safe home away from home.
            </p>
          </div>

          <div className="t-nav">
            <button type="button" onClick={prev} aria-label="Previous testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button type="button" onClick={next} aria-label="Next testimonial">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </header>

        <div className="t-viewport">
          <div
            className="track"
            style={{ transform: `translateX(calc(-${index} * (38% + 22px)))` }}
            role="region"
            aria-live="polite"
          >
            {testimonials.map((t) => (
              <figure className="t-card" key={t.id}>
                <div className="stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="12 2 15 9 22 9.5 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9.5 9 9" />
                    </svg>
                  ))}
                </div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="t-person">
                  <img src={t.avatar} alt="" loading="lazy" width="42" height="42" />
                  <figcaption>
                    <div className="name">{t.name}</div>
                    <div className="role">{t.role}</div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>

        <div className="t-dots" role="tablist" aria-label="Select testimonial">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${t.name}`}
              className={i === index ? "active" : ""}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}