import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            {/* Logo Area */}
            <Link href="/" className="navbar-logo">
                Orbee
            </Link>

            {/* Navigation Links */}
            <div className="navbar-links">
                <Link href="#features" className="navbar-link">
                    Features
                </Link>
                <Link href="#pricing" className="navbar-link">
                    Pricing
                </Link>
                <Link href="#about" className="navbar-link">
                    About
                </Link>
            </div>

            {/* Action Buttons */}
            <div className="navbar-actions">
                <Link href="/login" className="navbar-login">
                    Log in
                </Link>
                <Link href="/signup" className="navbar-signup">
                    Get Started
                </Link>
            </div>
        </nav>
    );
}
