const Footer = () => {
  return (
    <section
      className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col sm:flex-row justify-between items-center flex-wrap gap-5 text-center sm:text-left"
    >
      <div className="text-white-500 flex gap-2 justify-center sm:justify-start">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy</p>
      </div>
      <div className="flex gap-3 cursor-pointer justify-center sm:justify-start">
        <div className="social-icon">
          <img
            src="/assets/github.svg"
            alt="github"
            className="w-6 h-6"
          />
        </div>
        <div className="social-icon">
          <img src="/assets/twitter.svg" alt="twitter" className="w-6 h-6" />
        </div>
        <div className="social-icon">
          <img
            src="/assets/icons8-linkedin.svg"
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </div>
      </div>
      <p className="text-white-500 w-full sm:w-auto">
        &copy; 2023 CWJ. <span className="text-white-800"></span> All rights reserved.
      </p>
    </section>
  );
};

export default Footer;