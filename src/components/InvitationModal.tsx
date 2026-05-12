import { useState } from 'react';
import { weddingConfig } from '../config/weddingConfig';
import { CountdownTimer } from './CountdownTimer';
import '../styles/modal.css';

interface InvitationModalProps {
  inviterName: string;
  isOpen: boolean;
  onClose: () => void;
}

export function InvitationModal({ inviterName, isOpen, onClose }: InvitationModalProps) {
  const [activeTab, setActiveTab] = useState<'welcome' | 'details' | 'gallery' | 'venue' | 'message'>('welcome');

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="ornament ornament-top"></div>

        {/* Tab Navigation */}
        <div className="tab-nav">
          <button
            className={`tab-button ${activeTab === 'welcome' ? 'active' : ''}`}
            onClick={() => setActiveTab('welcome')}
          >
            វិវាហ៍
          </button>
          <button
            className={`tab-button ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            ព័ត៌មាន
          </button>
          <button
            className={`tab-button ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            រូបថត
          </button>
          <button
            className={`tab-button ${activeTab === 'venue' ? 'active' : ''}`}
            onClick={() => setActiveTab('venue')}
          >
            ទីកន្លែង
          </button>
          <button
            className={`tab-button ${activeTab === 'message' ? 'active' : ''}`}
            onClick={() => setActiveTab('message')}
          >
            សារ
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'welcome' && (
            <div className="tab-panel welcome-panel">
              <h2 className="couple-title">{weddingConfig.couple.coupleTitle}</h2>
              <p className="inviter-text">វិវាហ៍របស់ {inviterName}</p>
              <CountdownTimer />
            </div>
          )}

          {activeTab === 'details' && (
            <div className="tab-panel details-panel">
              <h2 className="section-title">វិវាហ៍ពិលាស</h2>
              <div className="couple-names">
                <div className="name-pair">
                  <p className="name-label">បងប្អូនបុរស</p>
                  <p className="name">{weddingConfig.couple.groomName}</p>
                </div>
                <div className="name-pair">
                  <p className="name-label">បងប្អូនស្រី</p>
                  <p className="name">{weddingConfig.couple.brideName}</p>
                </div>
              </div>

              <div className="invitation-message">
                <p>{weddingConfig.invitationMessage}</p>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="tab-panel gallery-panel">
              <h2 className="section-title">រូបថតលោក</h2>
              <div className="gallery-grid">
                {weddingConfig.gallery_photos.map((photo) => (
                  <img key={photo.id} src={photo.src} alt={photo.alt} className="gallery-image" />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'venue' && (
            <div className="tab-panel venue-panel">
              <h2 className="section-title">ទីកន្លែង</h2>
              <div className="venue-info">
                <h3>{weddingConfig.venue.name}</h3>
                <p className="venue-description">{weddingConfig.venue.description}</p>
                <div className="venue-image-container">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QvrvZEPGSK87BiQmgkd3fK8UvKOMSi.png"
                    alt="Venue"
                    className="venue-image"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'message' && (
            <div className="tab-panel message-panel">
              <h2 className="section-title">សារពិសេស</h2>
              <div className="message-content">
                <p>សូមស្វាគមន៍ចូលរួមបរិបូណ៌អាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ</p>
                <p>
                  ជាមួយគ្រា ដូចមុនងាយ យើងទៀងផ្សាយលម រឹងទៀង ក្នុងលក្ខណ៍ដែលលើនេះ ដូច៎ពេលផ្សាយឧរដើម ព័ឋមថ្នូងឃ
                  ទស់ព័ឋមថ្នូង នឹងមាន ពេលខាងក្រោមនេះ ដែលក្នុងលក្ខណ៍ដែលលើនេះ នឹងមាន អ្វីដែលលើនេះ។
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="ornament ornament-bottom"></div>
      </div>
    </div>
  );
}
