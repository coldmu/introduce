export default function TeamIntro() {
    return (
        <section id="team-intro" className="team-intro-section">
                <div className="container">
                <div className="section-header">
                    <h2 className="section-title">우리 팀을 소개합니다</h2>
                    <div className="section-divider"></div>
                </div>
                <p className="team-description">
                    우리는 창의성과 조화를 추구하는 디자인 팀입니다.<br />
                    지브리의 마법같은 세계관에서 영감을 받아<br />
                    아름다워지는 디지털 경험을 만들어갑니다.
                </p>
                <div className="team-values">
                    <div className="value-item">
                        <div className="value-icon">✨</div>
                        <h3>창의성</h3>
                        <p>상상력을 현실로 만드는 힘</p>
                    </div>
                    <div className="value-item">
                        <div className="value-icon">🤝</div>
                        <h3>조화</h3>
                        <p>서로 다른 재능의 아름다운 합성</p>
                    </div>
                    <div className="value-item">
                        <div className="value-icon">💝</div>
                        <h3>열정</h3>
                        <p>끝없는 도전과 성장의 동력</p>
                    </div>
                </div>
            </div>
        </section>
    );
}