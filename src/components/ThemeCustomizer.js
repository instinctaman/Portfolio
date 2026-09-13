import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/soundEffects';

const STORAGE_KEY = 'aman_portfolio_custom_theme_v26';

const COLOR_PRESETS = [
  { id: 'cyan', name: 'Cyber Cyan', primary: '#00f2fe', secondary: '#4facfe', glow: 'rgba(0, 242, 254, 0.35)' },
  { id: 'violet', name: 'Neon Violet', primary: '#c084fc', secondary: '#8a2be2', glow: 'rgba(138, 43, 226, 0.35)' },
  { id: 'emerald', name: 'Matrix Emerald', primary: '#34d399', secondary: '#10b981', glow: 'rgba(16, 185, 129, 0.3)' },
  { id: 'amber', name: 'Solar Amber', primary: '#fbbf24', secondary: '#f59e0b', glow: 'rgba(245, 158, 11, 0.3)' },
  { id: 'rose', name: 'Laser Rose', primary: '#fb7185', secondary: '#f43f5e', glow: 'rgba(244, 63, 94, 0.3)' },
];

const BG_PRESETS = [
  { id: 'void', name: 'Obsidian Void', color: '#050608' },
  { id: 'navy', name: 'Cyber Navy', color: '#070b14' },
  { id: 'slate', name: 'Deep Slate', color: '#0b0f19' },
];

const DEFAULT_SETTINGS = {
  theme: 'dark', // 'dark' | 'light'
  fontSize: 16,  // in px
  accentPreset: 'cyan',
  bgPreset: 'void',
  customAccent: '#00f2fe',
  customBg: '#050608',
  customText: '#ffffff',
  useCustomColors: false,
};

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
    } catch (e) {
      // Ignore storage error
    }
    return DEFAULT_SETTINGS;
  });

  // Apply theme settings to DOM
  useEffect(() => {
    const root = document.documentElement;

    // 1. Theme mode
    root.setAttribute('data-theme', settings.theme);

    // 2. Font Size (+/- 1px)
    root.style.fontSize = `${settings.fontSize}px`;

    // 3. Colors
    if (settings.useCustomColors) {
      root.style.setProperty('--accent-cyan', settings.customAccent);
      root.style.setProperty('--accent-blue', settings.customAccent);
      root.style.setProperty('--grad-cyan-blue', `linear-gradient(135deg, ${settings.customAccent} 0%, ${settings.customAccent} 100%)`);
      root.style.setProperty('--accent-cyan-glow', `${settings.customAccent}40`);
      root.style.setProperty('--bg-void', settings.customBg);
      root.style.setProperty('--text-primary', settings.customText);
    } else {
      // Remove inline overrides for bg & text so [data-theme="light"] or :root handles it cleanly
      root.style.removeProperty('--bg-void');
      root.style.removeProperty('--text-primary');

      const preset = COLOR_PRESETS.find(p => p.id === settings.accentPreset) || COLOR_PRESETS[0];
      if (settings.accentPreset !== 'cyan' || settings.theme === 'dark') {
        root.style.setProperty('--accent-cyan', preset.primary);
        root.style.setProperty('--accent-blue', preset.secondary);
        root.style.setProperty('--grad-cyan-blue', `linear-gradient(135deg, ${preset.primary} 0%, ${preset.secondary} 100%)`);
        root.style.setProperty('--accent-cyan-glow', preset.glow);
      } else {
        root.style.removeProperty('--accent-cyan');
        root.style.removeProperty('--accent-blue');
        root.style.removeProperty('--grad-cyan-blue');
        root.style.removeProperty('--accent-cyan-glow');
      }

      if (settings.theme === 'dark') {
        const bgChoice = BG_PRESETS.find(b => b.id === settings.bgPreset)?.color || '#050608';
        root.style.setProperty('--bg-void', bgChoice);
      }
    }

    // Persist
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      // Ignore storage error
    }
  }, [settings]);

  const updateSetting = (key, val) => {
    sounds.playClick();
    setSettings(prev => ({ ...prev, [key]: val }));
  };

  const adjustFontSize = (delta) => {
    sounds.playClick();
    setSettings(prev => {
      const nextSize = Math.max(13, Math.min(22, prev.fontSize + delta));
      return { ...prev, fontSize: nextSize };
    });
  };

  const handleReset = () => {
    sounds.playActivate();
    setSettings(DEFAULT_SETTINGS);
  };

  return (
    <>
      {/* Floating Bottom-Right Launcher Trigger */}
      <div className="customizer-fixed-anchor">
        <button
          onClick={() => {
            sounds.playClick();
            setIsOpen(!isOpen);
          }}
          onMouseEnter={() => sounds.playHover()}
          title="Theme & Display Customizer"
          className={`customizer-trigger-btn ${isOpen ? 'open' : ''} glass-card`}
        >
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-wand-magic-sparkles"}></i>
          <span className="theme-toggle-label">
            {isOpen ? 'Close' : 'Theme & Display'}
          </span>
          <span className={`customizer-status-dot ${settings.theme === 'dark' ? 'dark' : 'light'}`} />
        </button>
      </div>

      {/* Floating Customizer Drawer / Modal */}
      {isOpen && (
        <div className="customizer-window-modal glass-card">
          {/* Header */}
          <div className="customizer-hdr-row">
            <div className="customizer-hdr-left">
              <i className="fa-solid fa-palette customizer-hdr-icon"></i>
              <span className="customizer-hdr-title">
                Display & Theme Studio
              </span>
            </div>
            <button
              onClick={handleReset}
              title="Reset all to default studio settings"
              className="customizer-reset-btn"
            >
              Reset
            </button>
          </div>

          {/* 1. Dark / Light Theme Mode Switcher */}
          <div className="customizer-section">
            <label className="customizer-label">
              1. Theme Mode
            </label>
            <div className="customizer-2col-toggle">
              <button
                onClick={() => updateSetting('theme', 'dark')}
                className={`customizer-toggle-btn mode-dark ${settings.theme === 'dark' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-moon"></i>
                <span>Dark Mode</span>
              </button>

              <button
                onClick={() => updateSetting('theme', 'light')}
                className={`customizer-toggle-btn mode-light ${settings.theme === 'light' ? 'active' : ''}`}
              >
                <i className="fa-solid fa-sun"></i>
                <span>Light Mode</span>
              </button>
            </div>
          </div>

          {/* 2. Font Size Scaling (+/- 1px increments) */}
          <div className="customizer-section">
            <div className="customizer-hdr-row">
              <label className="customizer-label">
                2. Font Scaler (±1px)
              </label>
              <span className="customizer-font-display-badge">
                {settings.fontSize}px {settings.fontSize === 16 ? '(Default)' : ''}
              </span>
            </div>

            <div className="customizer-stepper-row">
              <button
                onClick={() => adjustFontSize(-1)}
                disabled={settings.fontSize <= 13}
                className="customizer-step-btn"
              >
                <i className="fa-solid fa-minus"></i>
                <span>-1px Font</span>
              </button>

              <button
                onClick={() => adjustFontSize(1)}
                disabled={settings.fontSize >= 22}
                className="customizer-step-btn"
              >
                <i className="fa-solid fa-plus"></i>
                <span>+1px Font</span>
              </button>
            </div>
          </div>

          {/* 3. Accent Color Presets */}
          <div className="customizer-section">
            <label className="customizer-label">
              3. Cyber Accent Glow
            </label>
            <div className="customizer-swatches-row">
              {COLOR_PRESETS.map((preset) => {
                const isSelected = !settings.useCustomColors && settings.accentPreset === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => {
                      sounds.playClick();
                      setSettings(prev => ({
                        ...prev,
                        accentPreset: preset.id,
                        useCustomColors: false,
                      }));
                    }}
                    title={preset.name}
                    className={`customizer-swatch-circle swatch-${preset.id} ${isSelected ? 'selected' : ''}`}
                  />
                );
              })}
            </div>
          </div>

          {/* 4. Background Presets (in dark mode) */}
          {settings.theme === 'dark' && !settings.useCustomColors && (
            <div className="customizer-section">
              <label className="customizer-label">
                4. Background Tone
              </label>
              <div className="customizer-bg-options-row">
                {BG_PRESETS.map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => updateSetting('bgPreset', bg.id)}
                    className={`customizer-bg-choice-btn bg-preset-${bg.id} ${settings.bgPreset === bg.id ? 'selected' : ''}`}
                  >
                    {bg.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 5. Custom Color Palette (Custom Hex Picker) */}
          <div className="customizer-custom-palette-box">
            <div className="customizer-hdr-row">
              <label className="customizer-label">
                5. Custom Hex Colors
              </label>
              <button
                onClick={() => updateSetting('useCustomColors', !settings.useCustomColors)}
                className={`customizer-custom-toggle-btn ${settings.useCustomColors ? 'active' : ''}`}
              >
                {settings.useCustomColors ? 'Custom: ACTIVE' : 'Enable Custom'}
              </button>
            </div>

            <div className={`customizer-picker-tri-grid ${settings.useCustomColors ? '' : 'customizer-picker-grid-disabled'}`}>
              {/* Accent Color Input */}
              <div className="customizer-color-picker-unit">
                <input
                  type="color"
                  value={settings.customAccent}
                  onChange={(e) => updateSetting('customAccent', e.target.value)}
                  className="customizer-color-input"
                />
                <span className="customizer-picker-label">
                  Accent
                </span>
              </div>

              {/* Background Color Input */}
              <div className="customizer-color-picker-unit">
                <input
                  type="color"
                  value={settings.customBg}
                  onChange={(e) => updateSetting('customBg', e.target.value)}
                  className="customizer-color-input"
                />
                <span className="customizer-picker-label">
                  Background
                </span>
              </div>

              {/* Text Color Input */}
              <div className="customizer-color-picker-unit">
                <input
                  type="color"
                  value={settings.customText}
                  onChange={(e) => updateSetting('customText', e.target.value)}
                  className="customizer-color-input"
                />
                <span className="customizer-picker-label">
                  Text
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThemeCustomizer;
