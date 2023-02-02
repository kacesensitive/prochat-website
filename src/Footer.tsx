import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">&copy; 2023 ProChat</p>
        <div className="footer-links">
          <a href="/privacypolicy">Privacy Policy</a>
          <a href="/termsofservice">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
