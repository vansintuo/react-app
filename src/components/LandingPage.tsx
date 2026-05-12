import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { weddingConfig } from '../config/weddingConfig';
import '../styles/landing.css';

export function LandingPage() {
  const navigate = useNavigate();
  const [inviterName, setInviterName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);

  const handleInviteClick = () => {
    setShowNameInput(true);
  };

  const handleNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inviterName.trim()) {
      navigate(`/invitation/${encodeURIComponent(inviterName)}`);
    }
  };

  return (
    <div className="landing-container">
      <div className="ornament ornament-top-left"></div>
      <div className="ornament ornament-top-right"></div>

      {/* Hero Image - Hidden when showing name input */}
      {!showNameInput && (
        <div className="hero-section">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zTBqkUf4wMi0cAhicBVCZHULbOeA2y.png"
            alt={`${weddingConfig.couple.coupleTitle} Wedding`}
            className="hero-image"
          />
        </div>
      )}

      {/* Invitation Section */}
      <div className={`invitation-section ${showNameInput ? 'form-fullscreen' : ''}`}>
        {!showNameInput ? (
          <button className="invite-button" onClick={handleInviteClick}>
            វិវាហ៍របស់ {weddingConfig.couple.coupleTitle}
            <span className="button-arrow">→</span>
          </button>
        ) : (
          <form onSubmit={handleNameSubmit} className="name-input-form">
            <label htmlFor="inviter-name" className="input-label">
              តើអ្នកមានឈ្មោះថាយ៉ាង?
            </label>
            <input
              id="inviter-name"
              type="text"
              placeholder="ឈ្មោះរបស់អ្នក"
              value={inviterName}
              onChange={(e) => setInviterName(e.target.value)}
              className="name-input"
              autoFocus
            />
            <button type="submit" className="submit-button">
              បង្ហាញលម
            </button>
          </form>
        )}
      </div>

      <div className="ornament ornament-bottom-left"></div>
      <div className="ornament ornament-bottom-right"></div>
    </div>
  );
}
