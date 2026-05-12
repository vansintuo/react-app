import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CountdownTimer } from './CountdownTimer';
import { weddingConfig } from '../config/weddingConfig';
import '../styles/invitation-page.css';

export function InvitationPage() {
  const { inviterName } = useParams<{ inviterName: string }>();
  const navigate = useNavigate();
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="invitation-page">
      {/* Hero Section - Cover */}
      <section className={`hero-section ${isRevealed ? 'revealed' : ''}`}>
        <div className="ornament ornament-top-left"></div>
        <div className="ornament ornament-top-right"></div>

        <div className="hero-content">
          {/* Background Image */}
          <div className="hero-image-container">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zTBqkUf4wMi0cAhicBVCZHULbOeA2y.png"
              alt="Wedding couple"
              className="hero-image"
            />
          </div>

          {/* Text Overlay */}
          <div className="hero-text-overlay">
            <h1 className="couple-title">អាវាហវិវាហមង្គល</h1>
            <p className="invitation-subtitle">សូមគោរពអញ្ជើញ</p>

            <div className="couple-name-box">
              <h2 className="couple-name">
                {weddingConfig.couple.groomFirstName} {weddingConfig.couple.groomLastName} &amp;
                <br />
                {weddingConfig.couple.brideFirstName} {weddingConfig.couple.brideLastName}
              </h2>
            </div>

            {/* Action Button */}
            {!isRevealed ? (
              <button
                className="reveal-button"
                onClick={() => setIsRevealed(true)}
              >
                បើក
              </button>
            ) : (
              <button
                className="close-button"
                onClick={() => navigate('/')}
              >
                ← ត្រឡប់ក្រោយ
              </button>
            )}
          </div>
        </div>

        <div className="ornament ornament-bottom-left"></div>
        <div className="ornament ornament-bottom-right"></div>
      </section>

      {/* Full Content - Revealed */}
      {isRevealed && (
        <div className="content-wrapper">
          {/* Invitation Message */}
          <section className="content-section message-section">
            <h2 className="section-title">ការអាពាហ៍ពិពាហ៍</h2>
            <p className="section-text">
              {weddingConfig.wedding.message}
            </p>
          </section>

          {/* Date & Time */}
          <section className="content-section date-section">
            <div className="date-container">
              <h3 className="date-label">ថ្ងៃ ម៉ោង</h3>
              <p className="date-value">{weddingConfig.wedding.displayDate}</p>
              <p className="time-value">{weddingConfig.wedding.time}</p>
            </div>

            {/* Countdown Timer */}
            <div className="countdown-wrapper">
              <h3 className="countdown-label">សរុបរយៈពេល</h3>
              <CountdownTimer targetDate={weddingConfig.wedding.date} />
            </div>
          </section>

          {/* Venue */}
          <section className="content-section venue-section">
            <h2 className="section-title">ទីកន្លែង</h2>
            <div className="venue-image-container">
              <img
                src={weddingConfig.venue.image}
                alt={weddingConfig.venue.name}
              />
            </div>
            <div className="venue-details">
              <h3 className="venue-name">{weddingConfig.venue.name}</h3>
              <p className="venue-hall">{weddingConfig.venue.hallName}</p>
              <p className="venue-description">{weddingConfig.venue.description}</p>
              <p className="venue-location">📍 {weddingConfig.venue.location}</p>
            </div>
          </section>

          {/* Gallery */}
          <section className="content-section gallery-section">
            <h2 className="section-title">រូបថត</h2>
            <div className="gallery-grid">
              {weddingConfig.gallery.images.map((image) => (
                <div key={image.id} className="gallery-item">
                  <img src={image.url} alt={image.caption} />
                </div>
              ))}
            </div>
          </section>

          {/* Schedule */}
          <section className="content-section schedule-section">
            <h2 className="section-title">កាលវិភាគកម្មវិធី</h2>
            <div className="schedule-timeline">
              {weddingConfig.schedule.map((item, index) => (
                <div key={index} className="schedule-item">
                  <div className="schedule-time">{item.time}</div>
                  <div className="schedule-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Banking Info */}
          <section className="content-section banking-section">
            <h2 className="section-title">ព័ត៌មានលម</h2>
            <div className="banking-card">
              <p><span className="label">ឈ្មោះ:</span> {weddingConfig.bankingInfo.brideName}</p>
              <p><span className="label">ឯកសារលម:</span> {weddingConfig.bankingInfo.accountNumber}</p>
              <p><span className="label">ធនាគារ:</span> {weddingConfig.bankingInfo.bankName}</p>
            </div>
          </section>

          {/* Personalized Message */}
          {inviterName && (
            <section className="content-section personal-message-section">
              <p className="personal-greeting">
                សូមគោរពអញ្ជើញលោក/នាង <span className="guest-name">{decodeURIComponent(inviterName)}</span>
              </p>
            </section>
          )}

          {/* Closing */}
          <section className="content-section closing-section">
            <p className="closing-text">សូមស្វាគមន៍ក្នុងពិធីបុណ្យយើងខ្ញុំ</p>
          </section>
        </div>
      )}
    </div>
  );
}
