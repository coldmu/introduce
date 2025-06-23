'use client';
import { useEffect, useState } from 'react';

export default function PasswordGate({ children }: { children: React.ReactNode }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const correctPassword = 'secret';

    useEffect(() => {
        const auth = sessionStorage.getItem('authenticated');
        if (auth === 'true') setAuthenticated(true);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === correctPassword) {
            sessionStorage.setItem('authenticated', 'true');
            setAuthenticated(true);
            setError(false);
        } else {
            setError(true);
            setPassword('');
        }
    };

    if (!authenticated) {
        return (
            <div className="login-screen">
                <div className="login-container">
                    <div className="login-card">
                        <h1 className="login-title">초대장</h1>
                        <p className="login-subtitle">
                            비밀스러운 세계로 들어가기 위해<br />암호를 입력해주세요 <br />
                        </p>
                        <form onSubmit={handleLogin} className="login-form">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control login-input"
                                placeholder="암호를 입력하세요..."
                                required
                            />
                            <button type="submit" className="btn btn--primary login-btn">
                                들어가기
                            </button>
                        </form>
                        {error && (
                            <div className="error-message">잘못된 암호입니다. 다시 시도해주세요.</div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}