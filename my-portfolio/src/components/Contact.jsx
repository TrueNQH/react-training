import { useState } from "react";
export default function Contact() {

    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        error: null
      });
function handleContactSubmit(e) { 
    
}
function handleInputChange(e) {}

    return (
         <section id="contact">
        <div className="container">
          <h2 className="section-title">Liên hệ</h2>
          <div className="contact-container">
            {/* Contact Form */}
            <div className="contact-form">
              <h3 className="form-title">Gửi tin nhắn cho tôi</h3>
              <form onSubmit={handleContactSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Họ và tên *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Nhập họ và tên của bạn"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Nhập email của bạn"
                      required
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="subject" className="form-label">Chủ đề *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Nhập chủ đề tin nhắn"
                      required
                    />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="message" className="form-label">Nội dung tin nhắn *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                      required
                    />
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
                </button>

                {/* Form Status Messages */}
                {formStatus.isSubmitted && (
                  <div className="form-status success">
                    ✅ Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.
                  </div>
                )}
                
                {formStatus.error && (
                  <div className="form-status error">
                    ❌ {formStatus.error}
                  </div>
                )}
                
                {formStatus.isSubmitting && (
                  <div className="form-status info">
                    📤 Đang gửi tin nhắn...
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}