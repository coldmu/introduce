import PasswordGate from './password-gate';
import TeamIntro from './components/TeamIntro';
import TeamMembers from './components/TeamMembers';
import EventSection from './components/EventSection';
import FloatingClouds from './components/FloatingClouds';

export default function HomePage() {
    return (
        // <PasswordGate>
        <>
        <>
            <nav className="navbar fixed-navbar">
                <div className="nav-container">
                    <div className="nav-logo">🌿 Chillax Day</div>
                    <ul className="nav-menu">
                        <li>
                            <a href="#team-intro" className="nav-link">
                                🌟 Invitation
                            </a>
                        </li>
                        <li>
                            <a href="#team-members" className="nav-link">
                                👩‍💻 Special Guests
                            </a>
                        </li>
                        <li>
                            <a href="#event-info" className="nav-link">
                                🎉 Events
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="main-content show">
                <FloatingClouds/>
                <section className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title font-cursive">잠시 멈춤, Chillax Day</h1>
                        <p className="hero-subtitle">오늘 하루는 편하게 쉬어보아요</p>
                    </div>
                </section>

                <TeamIntro/>
                <TeamMembers />
                <EventSection />
            </div>
        </>
        </>
        /* </PasswordGate> */
    );
}