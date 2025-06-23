export default function TeamIntro() {
    return (
        <section id="team-intro" className="team-intro-section">
                <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Invitation</h2>
                    <div className="section-divider"></div>
                </div>
                <p className="team-description">
                일상에 작은 쉼표, 우리만의 힐링 타임! <br />
                바쁜 하루 속, 잠시 멈춰 뮤지컬 속 감동, 깊은 명상 <br />
                칠렉스한 분위기를 함께 즐겨보는 건 어때요?
                </p>
                <div className="team-values">
                    <div className="value-item">
                        <div className="value-icon">🧘</div>
                        <h3>Meditation</h3>
                        <p>Get Rest</p>
                    </div>
                    <div className="value-item">
                        <div className="value-icon">🌙</div>
                        <h3>Chillax</h3>
                        <p>Chill & Relax</p>
                    </div>
                    <div className="value-item">
                        <div className="value-icon">🎭</div>
                        <h3>Musical Pub</h3>
                        <p>Musical & Beer</p>
                    </div>
                </div>
            </div>
        </section>
    );
}