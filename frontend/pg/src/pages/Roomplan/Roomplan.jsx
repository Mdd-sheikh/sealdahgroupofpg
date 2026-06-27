import React from "react";
import "./RoomPlan.css";

const plans = [
    {
        id: "solo",
        name: "Solo Sanctuary",
        price: "₹18,500",
        tag: "Highly Coveted",
        tagVariant: "default",
        desc:
            "Full privacy for the focused individual. A premium space designed for deep study and complete relaxation.",
        features: [
            "Private Balcony Access",
            "Personal Workstation",
            "In-unit Air Conditioning",
            "En-suite Bathroom",
        ],
        image:
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop",
        featured: false,
    },
    {
        id: "duo",
        name: "Duo Haven",
        price: "₹12,000",
        tag: "Most Popular",
        tagVariant: "popular",
        desc:
            "The perfect balance of social connection and personal space. Ideal for best friends or shared growth.",
        features: [
            "Twin Study Desks",
            "Dual Full-length Mirrors",
            "Individual Wardrobes",
            "Shared Media Console",
        ],
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop",
        featured: true,
    },
    {
        id: "trio",
        name: "Trio Collective",
        price: "₹8,500",
        tag: null,
        desc:
            "Affordable, vibrant, and community-focused. Designed for the outgoing student who loves the spirit of sisterhood.",
        features: [
            "Space-optimized Bunks",
            "Under-bed Storage Pods",
            "Common Study Area",
            "Weekly Linen Service",
        ],
        image:
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=600&auto=format&fit=crop",
        featured: false,
    },
];

const safetyPills = [
    {
        label: "24/7 Biometric Entry",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 11v-1a5 5 0 0 1 10 0v1" />
                <path d="M4.5 11h15" />
                <path d="M6 11a8 8 0 0 0 1.2 6.5" />
                <path d="M18 11a8 8 0 0 1-2.5 7.5" />
            </svg>
        ),
    },
    {
        label: "Female-Only Staff",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
            </svg>
        ),
    },
    {
        label: "CCTV in Corridors",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="14" height="11" rx="3" />
                <path d="M16.5 9.5 22 7v10l-5.5-2.5z" />
            </svg>
        ),
    },
];

export default function RoomPlans() {
    return (
        <div className="rooms-page">

            {/* DIV 1: Choose Your Sanctuary */}
            <section className="plans" aria-labelledby="plans-heading">
                <header className="plans-header">
                    <span className="plans-eyebrow">Curated Living</span>
                    <h2 id="plans-heading">Choose Your Sanctuary</h2>
                    <p>
                        Designed with modern students in mind, our rooms offer the
                        perfect blend of privacy, community, and comfort. Every space is
                        verified for safety and quality.
                    </p>
                </header>

                <ul className="plans-grid">
                    {plans.map((plan) => (
                        <li
                            className={`plan-card${plan.featured ? " featured" : ""}`}
                            key={plan.id}
                        >
                            <div className="plan-media">
                                <img
                                    src={plan.image}
                                    alt={`${plan.name} room interior`}
                                    loading="lazy"
                                    width="400"
                                    height="220"
                                />
                                {plan.tag && (
                                    <span className={`plan-tag ${plan.tagVariant === "popular" ? "popular" : ""}`}>
                                        {plan.tagVariant === "popular" ? null : (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                                            </svg>
                                        )}
                                        {plan.tag}
                                    </span>
                                )}
                            </div>

                            <div className="plan-body">
                                <div className="plan-title-row">
                                    <h3>{plan.name}</h3>
                                    <span className="plan-price">
                                        <span className="amount">{plan.price}</span>
                                        <span className="period">per month</span>
                                    </span>
                                </div>

                                <p className="plan-desc">{plan.desc}</p>

                                <ul className="plan-features">
                                    {plan.features.map((f) => (
                                        <li key={f}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <circle cx="12" cy="12" r="9" />
                                                <polyline points="8.5 12 11 14.5 15.5 9.5" />
                                            </svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <button type="button" className="plan-cta">
                                    Check Availability
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* DIV 2: Every Nestly room is Safety-First */}
            <section className="safety-banner-wrap" aria-labelledby="safety-banner-heading">
                <div className="safety-banner">
                    <div className="safety-text">
                        <h2 id="safety-banner-heading">Every Nestly room is Safety-First</h2>
                        <p>
                            We don't just provide rooms; we provide peace of mind for you
                            and your parents. Our safety protocols are the highest in the
                            industry.
                        </p>

                        <ul className="safety-pills">
                            {safetyPills.map((pill) => (
                                <li key={pill.label}>
                                    <span aria-hidden="true">{pill.icon}</span>
                                    {pill.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="safety-image">
                        <img
                            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=700&auto=format&fit=crop"
                            alt="Female staff member overseeing the biometric entry kiosk in the lobby"
                            loading="lazy"
                            width="500"
                            height="375"
                        />
                    </div>
                </div>
            </section>

        </div>
    );
}