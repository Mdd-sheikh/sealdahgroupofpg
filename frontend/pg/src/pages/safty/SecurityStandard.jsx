import React from "react";
import "./SecurityStandard.css";
import { useState, useEffect, useRef, useCallback } from "react"; 

export default function SecurityStandard() {
    const AUTOPLAY_INTERVAL = 4500;

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

    return (
        <>
            <section className="security" aria-labelledby="security-heading">

                {/* INTRO: Your Peace of Mind is Our Priority */}
                <div className="security-intro">
                    <div className="intro-text">
                        <span className="intro-badge">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                            </svg>
                            Uncompromising Security
                        </span>

                        <h2 className="intro-heading">
                            Your Peace of Mind is Our Priority
                        </h2>

                        <p className="intro-desc">
                            At Nestly, we believe safety is the foundation of a true
                            sanctuary. Our comprehensive security infrastructure ensures a
                            secure environment for residents and complete reassurance for
                            parents.
                        </p>

                        <ul className="intro-checklist">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="9" />
                                    <polyline points="8.5 12 11 14.5 15.5 9.5" />
                                </svg>
                                24/7 Personnel
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="9" />
                                    <polyline points="8.5 12 11 14.5 15.5 9.5" />
                                </svg>
                                CCTV Surveillance
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="9" />
                                    <polyline points="8.5 12 11 14.5 15.5 9.5" />
                                </svg>
                                Smart Access
                            </li>
                        </ul>
                    </div>

                    <div className="intro-image">
                        <img
                            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=900&auto=format&fit=crop"
                            alt="Security guard on duty at the front desk of a Nestly residence lobby"
                            loading="lazy"
                            width="640"
                            height="480"
                        />
                    </div>
                </div>

                <header className="security-header">
                    <h2 id="security-heading">The Nestly Security Standard</h2>
                    <p>
                        Five layers of protection meticulously designed to keep our
                        community safe, day and night.
                    </p>
                </header>

                <ul className="security-grid">

                    <li className="sec-card card-guarding">
                        <span className="ico" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                            </svg>
                        </span>
                        <h3>24/7 Guarding</h3>
                        <p>
                            Trained security personnel stationed at every entry point,
                            performing regular hourly patrols across the premises and
                            perimeter.
                        </p>
                    </li>

                    <li className="sec-card card-cctv">
                        <span className="ico" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <rect x="2" y="6" width="14" height="11" rx="3" />
                                <path d="M16.5 9.5 22 7v10l-5.5-2.5z" />
                            </svg>
                        </span>
                        <h3>Full CCTV Coverage</h3>
                        <p>
                            No blind spots. Our smart surveillance network covers every
                            entrance, hallway, and common area with real-time monitoring and
                            30-day cloud backup.
                        </p>

                        <ul className="cctv-checklist">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="9" />
                                    <polyline points="8.5 12 11 14.5 15.5 9.5" />
                                </svg>
                                High-definition night vision
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="9" />
                                    <polyline points="8.5 12 11 14.5 15.5 9.5" />
                                </svg>
                                AI movement alerts
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="9" />
                                    <polyline points="8.5 12 11 14.5 15.5 9.5" />
                                </svg>
                                Off-site monitoring backup
                            </li>
                        </ul>
                    </li>

                    <li className="sec-card card-curfew">
                        <span className="ico" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 16 14" />
                            </svg>
                        </span>
                        <h3>Safe Curfew &amp; Visitor Policy</h3>
                        <p>
                            A strictly enforced 10:00 PM curfew ensures accountability.
                            Visitors are allowed only in designated lounges after identity
                            verification.
                        </p>
                    </li>

                    <li className="sec-card card-female">
                        <span className="ico" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="8" r="3" />
                                <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
                                <circle cx="17.5" cy="8.5" r="2.2" />
                                <path d="M15 13.2c2 .2 3.6 1.7 3.9 3.8" />
                            </svg>
                        </span>
                        <h3>Female-Only Premises</h3>
                        <p>
                            An exclusive environment designed specifically for women. Male
                            staff are restricted to common utility areas only under
                            supervision.
                        </p>
                    </li>

                    <li className="sec-card card-biometric">
                        <span className="ico" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 11v-1a5 5 0 0 1 10 0v1" />
                                <path d="M4.5 11h15" />
                                <path d="M6 11a8 8 0 0 0 1.2 6.5" />
                                <path d="M18 11a8 8 0 0 1-2.5 7.5" />
                                <path d="M9.5 11a4.5 4.5 0 0 0 1 5.5" />
                                <path d="M14.5 11a4.5 4.5 0 0 1-.6 6" />
                            </svg>
                        </span>
                        <h3>Biometric Access</h3>
                        <p>
                            Seamless and secure entry via fingerprint and face recognition,
                            ensuring only verified residents can enter living quarters.
                        </p>
                    </li>

                </ul>
            </section>
            <div>

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

            </div>
        </>

    );
}   