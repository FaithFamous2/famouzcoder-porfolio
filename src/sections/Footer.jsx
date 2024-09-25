const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
  <div className="social-icon">
    <a href="https://github.com/FaithFamous2" target="_blank" rel="noopener noreferrer" className="social-icon">
      <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
    </a>
  </div>
  <div className="social-icon">
    <a href="https://twitter.com/@FamousFaith_1" target="_blank" rel="noopener noreferrer"className="social-icon">
      <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
    </a>
  </div>
  <div className="social-icon">
    <a href="https://instagram.com/famouzcoder" target="_blank" rel="noopener noreferrer" className="social-icon">
      <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
    </a>
  </div>
  <div className="social-icon">
    <a href="https://facebook.com/ola.olowookere.54" target="_blank" rel="noopener noreferrer" className="social-icon">
      <img src="/assets/facebook.svg" alt="instagram" className="w-1/2 h-1/2" />
    </a>
  </div>
  <div className="social-icon">
    <a href="https://linkedin.com/in/olowookere-faith-272605227" target="_blank" rel="noopener noreferrer" className="social-icon">
      <img src="/assets/linkedin.svg" alt="instagram" className="w-1/2 h-1/2" />
    </a>
  </div>
</div>


        {/* <p className="text-white-500">© 2024 Famouzcoder. All rights reserved.</p> */}
        <p className="text-white-500">© {new Date().getFullYear()} Famouzcoder. All rights reserved.</p>

      </footer>
    );
  };

  export default Footer;
