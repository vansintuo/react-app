import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CountdownTimer } from './CountdownTimer';
import { weddingConfig } from '../config/weddingConfig';
import '../styles/invitation-page.css';

export function InvitationPage() {
  const { inviterName } = useParams<{ inviterName: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('welcome');

  const handleBack = () => {
    navigate('/');
  };

  const tabs = [
    { id: 'welcome', label: 'វិវាហ៍' },
    { id: 'details', label: 'សម្រាប់' },
    { id: 'gallery', label: 'ឧបករណ៍' },
    { id: 'venue', label: 'ទីតាំង' },
    { id: 'message', label: 'សារ' },
  ];

  return (
    <div className="invitation-page">
      {/* Close Button */}
      <button className="close-button" onClick={handleBack} aria-label="Close invitation">
        ✕
      </button>

      {/* Decorative Elements */}
      <div className="ornament-page ornament-page-top-left"></div>
      <div className="ornament-page ornament-page-top-right"></div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {/* Welcome Tab */}
        {activeTab === 'welcome' && (
          <div className="tab-pane welcome-pane">
            <div className="welcome-header">
              <h1 className="couple-names">
                {weddingConfig.couple.brideFirstName} & {weddingConfig.couple.groomFirstName}
              </h1>
              <p className="invitation-greeting">
                សូមស្វាគមន៍ចូលទៅក្នុងឆ្នាំយើងសារឋាន!
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="countdown-section">
              <div className="calendar-icon">📅</div>
              <h2 className="countdown-title">ដណ្ដើមរយៈពេល</h2>
              <CountdownTimer targetDate={weddingConfig.wedding.date} />
            </div>

            {/* Guest Info */}
            {inviterName && (
              <div className="guest-info">
                <p className="guest-greeting">
                  សូមស្វាគមន៍ <span className="guest-name">{decodeURIComponent(inviterName)}</span>!
                </p>
              </div>
            )}
          </div>
        )}

        {/* Details Tab */}
        {activeTab === 'details' && (
          <div className="tab-pane details-pane">
            <div className="details-container">
              <h2 className="section-title">អញ្ជើញរួមរីក ស្វាគមន៍</h2>

              <div className="couple-details">
                <div className="person-detail">
                  <h3 className="role-title">ពពzeich</h3>
                  <p className="person-name">
                    {weddingConfig.couple.brideFirstName} {weddingConfig.couple.brideLastName}
                  </p>
                </div>

                <div className="person-detail">
                  <h3 className="role-title">ពពzeich</h3>
                  <p className="person-name">
                    {weddingConfig.couple.groomFirstName} {weddingConfig.couple.groomLastName}
                  </p>
                </div>
              </div>

              <div className="invitation-message">
                <p>{weddingConfig.wedding.message}</p>
              </div>

              <button className="rsvp-button">
                <span className="calendar-icon">📅</span>
                រក្សាទុកកាលបរិច្ឆេទ
              </button>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="tab-pane gallery-pane">
            <h2 className="section-title">ឧបករណ៍របស់យើងសាលា</h2>
            <div className="gallery-grid">
              {weddingConfig.gallery.images.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image.url} alt={image.caption} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Venue Tab */}
        {activeTab === 'venue' && (
          <div className="tab-pane venue-pane">
            <h2 className="section-title">ទីតាំងរួមផ្សំ</h2>

            <div className="venue-card">
              <img src={weddingConfig.venue.image} alt={weddingConfig.venue.name} className="venue-image" />

              <div className="venue-details">
                <h3 className="venue-name">{weddingConfig.venue.name}</h3>
                <p className="venue-description">{weddingConfig.venue.description}</p>

                <div className="venue-info-item">
                  <span className="info-label">📍ទីតាំង:</span>
                  <p className="info-value">{weddingConfig.venue.location}</p>
                </div>

                <div className="venue-info-item">
                  <span className="info-label">⏰ពេលវេលា:</span>
                  <p className="info-value">{weddingConfig.venue.time}</p>
                </div>

                <button className="map-button">មើលផែនទី</button>
              </div>
            </div>
          </div>
        )}

        {/* Message Tab */}
        {activeTab === 'message' && (
          <div className="tab-pane message-pane">
            <h2 className="section-title">សារពិសេស</h2>

            <div className="special-messages">
              <div className="message-box">
                <p className="message-title">សូមស្វាគមន៍សូមបង្ហាញលម</p>
                <p className="message-text">
                  យើងរីករាយក្នុងការបង្ហាញលម ឈ្មោះរបស់អ្នក នៅឱកាស
                  ពិសេស នេះ និងប្រាថ្នាឱ្យលទ្ធិលាភ ល្អប្រសើរបំផុត ចំពោះរូប គូ។
                </p>
              </div>

              {inviterName && (
                <div className="personalized-message">
                  <p className="custom-message">
                    {decodeURIComponent(inviterName)}, ស្វាគមន៍ចូលទៅក្នុងឆ្នាំយើងសារឋាន!
                  </p>
                </div>
              )}

              <div className="message-box">
                <p className="message-title">ការបង្ហាញលម</p>
                <p className="message-text">
                  ព្យាបាលដល់ការដឹងលឹង ឬលើកស្មារតីនៃការបង្ហាញលម របស់អ្នក
                  នឹងត្រូវដោះដូល ក្រោយលើកលម។
                </p>
              </div>

              <button className="qr-button">
                <span>📱</span>
                ស្កេនលេខសម្រាប់ការបង្ហាញលម
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="ornament-page ornament-page-bottom-left"></div>
      <div className="ornament-page ornament-page-bottom-right"></div>
    </div>
  );
}
