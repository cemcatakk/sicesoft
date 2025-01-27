import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-form" id="iletisim">
      <div className="container">
        <h2>Bizimle İletişime Geçin</h2>
        <div className="form-container">
          <form>
            <div className="form-group">
              <label className="form-label">Ad Soyad</label>
              <input
                type="text"
                className="form-input"
                name="name"
                id="name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">E-posta</label>
              <input
                type="email"
                className="form-input"
                name="email"
                id="email"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Telefon</label>
              <div style={{display: 'flex'}}>
                <span style={{
                  padding: '0.5rem',
                  background: '#f3f4f6',
                  border: '1px solid #d1d5db',
                  borderRight: 'none',
                  borderRadius: '0.375rem 0 0 0.375rem'
                }}>+90</span>
                <input
                  type="tel"
                  className="form-input"
                  style={{borderRadius: '0 0.375rem 0.375rem 0'}}
                  name="phone"
                  id="phone"
                />
              </div>
            </div>
            <button type="submit" className="submit-button">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;