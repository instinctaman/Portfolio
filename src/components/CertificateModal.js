import React, { useEffect } from 'react';
import { sounds } from '../utils/soundEffects';

const CertificateModal = ({ item, onClose }) => {
  useEffect(() => {
    if (item) {
      sounds.playActivate();
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [item]);

  if (!item) return null;

  return (
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div className="cert-modal-window glass-card" onClick={e => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="cert-modal-header">
          <div className="cert-header-left">
            <span className="cert-header-dot"></span>
            <span className="cert-header-title">
              {item.type || 'Credential Dossier'}
            </span>
          </div>
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="cert-close-btn"
            aria-label="Close modal"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Modal Body */}
        <div className="cert-modal-body">
          {/* Image Frame */}
          {item.image && (
            <div className="cert-media-frame">
              <img
                src={item.image}
                alt={item.title}
                className="cert-media-img"
              />
            </div>
          )}

          {/* Details */}
          <div>
            <h3 className="cert-info-title">
              {item.title}
            </h3>
            <div className="cert-info-meta">
              <span>
                <i className="fa-solid fa-building"></i> {item.organization}
              </span>
              {item.duration && (
                <span>
                  <i className="fa-regular fa-calendar"></i> {item.duration}
                </span>
              )}
            </div>

            <p className="cert-info-desc">
              {item.description}
            </p>

            {/* Tech / Skills tags */}
            {item.technologies && (
              <div>
                <div className="cert-tags-section-label">
                  Associated Domain & Tools
                </div>
                <div className="cert-tags-row">
                  {item.technologies.map((tech, idx) => (
                    <span key={idx} className="cyber-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="cert-modal-footer">
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="btn-secondary cert-footer-btn"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
