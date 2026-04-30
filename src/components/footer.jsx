import React from "react";
function Footer() {
  return (
    <footer className="ipl-footer">
      <div className="footer-section">
        <span className="partner-label">TITLE SPONSOR</span>
        <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-tata-logo.webp" className="logo-tata" alt="TATA" />
      </div>
      <div className="divider"></div>
      <div className="footer-section">
        <span className="partner-label">ASSOCIATE PARTNER</span>
        <div className="logo-group">
          <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-angelone-logo.webp" className="logo-angel" alt="AngelOne" />
          <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-rupay-logo.webp" className="logo-rupay" alt="RuPay" />
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer-section">
        <span className="partner-label">OFFICIAL <br/> UMPIRE PARTNER</span>
        <img src="https://documents.iplt20.com//ipl/assets/images/new-partner-wonder-cement.webp" className="logo-wonder" alt="Wonder Cement" />
      </div>
      <div className="divider"></div>
      <div className="footer-section">
        <span className="partner-label">OFFICIAL STRATEGIC <br/> TIMEOUT PARTNER</span>
        <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-ceat-logo.webp" className="logo-ceat" alt="CEAT" />
      </div>
      <div className="divider"></div>
      <div className="footer-section">
        <span className="partner-label">OFFICIAL <br/> BROADCASTER</span>
        <img src="https://documents.iplt20.com//ipl/assets/images/new-sponsor-start-sports-logo.webp" className="logo-star" alt="Star Sports" />
      </div>
      <div className="divider"></div>
      <div className="footer-section">
        <span className="partner-label">OFFICIAL DIGITAL <br/> STREAMING PARTNER</span>
        <img src="https://documents.iplt20.com//ipl/assets/images/JioHotstar.webp" className="logo-streaming" alt="JioCinema" />
      </div>
    </footer>
  );
}

export default Footer;