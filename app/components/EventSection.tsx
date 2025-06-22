export default function EventSection() {
    return (
        <section id="event-info" className="event-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Relax Day 2025</h2>
                    <div className="section-divider"></div>
                    <p className="event-subtitle">팀원들과 함께하는 힐링과 휴식의 하루</p>
                </div>
                <div className="event-content">
                    <div className="calendar-container">
                        <div className="calendar-header">
                            <h3>2025년 6월</h3>
                        </div>
                        <div className="calendar-grid">
                            {[...Array(30)].map((_, i) => (
                                <div
                                    key={i + 1}
                                    className={`calendar-day${i + 1 === 26 ? ' special-day' : ''}`}
                                >
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="event-schedule">
                        <h3>타임테이블</h3>
                        <div className="schedule-items">
                            <div className="schedule-item">
                                <div className="schedule-time">10:00 AM</div>
                                <div className="schedule-content">
                                    <h4>Team Breakfast & Coffee</h4>
                                    <p>따뜻한 아침식사와 커피 한 잔으로 하루를 시작해요</p>
                                </div>
                            </div>
                            <div className="schedule-item">
                                <div className="schedule-time">12:00 PM</div>
                                <div className="schedule-content">
                                    <h4>Outdoor Activities & Games</h4>
                                    <p>자연 속에서 즐기는 다양한 게임과 활동</p>
                                </div>
                            </div>
                            <div className="schedule-item">
                                <div className="schedule-time">2:00 PM</div>
                                <div className="schedule-content">
                                    <h4>Creative Workshop Session</h4>
                                    <p>창의성을 발휘하는 워크샵 시간</p>
                                </div>
                            </div>
                            <div className="schedule-item">
                                <div className="schedule-time">4:00 PM</div>
                                <div className="schedule-content">
                                    <h4>Relaxing Tea Time & Reflection</h4>
                                    <p>차 한 잔과 함께하는 여유로운 마무리</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}