import React from 'react';
import './footer.css';

export default function FooterAbove() {
    return (
        <div className="footer-above-container">
            <h4 className="footer-above-subtitle">LOVE FROM THE COMMUNITY</h4>
            <h2 className="footer-above-title">What learners are saying</h2>

            <div className="testimonials-grid">
                {/* Testimonial 1 */}
                <div className="testimonial-card">
                    <p className="testimonial-text">
                        "I never write reviews but I absolutely love this, 3 lessons in and I'm very impressed."
                    </p>
                    <span className="testimonial-author">ANDREA</span>
                </div>

                {/* Testimonial 2 */}
                <div className="testimonial-card">
                    <p className="testimonial-text">
                        "Really thoughtful and well presented content. Easy to learn important concepts on the go when you have a few minutes of down time."
                    </p>
                    <span className="testimonial-author">PETER</span>
                </div>

                {/* Testimonial 3 */}
                <div className="testimonial-card">
                    <p className="testimonial-text">
                        "Essential app for thinking logically and critically."
                    </p>
                    <span className="testimonial-author">LUKE</span>
                </div>

                {/* Testimonial 4 */}
                <div className="testimonial-card">
                    <p className="testimonial-text">
                        "This is weirdly satisfying. It makes me feel like I'm finally not wasting my time and doing something useful."
                    </p>
                    <span className="testimonial-author">EVAN</span>
                </div>
            </div>
        </div>
    );
}
