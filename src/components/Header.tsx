import TelegramLogo from "../assets/telegram-logo.svg";
import HeaderLogo from "../assets/header-logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="-mt-4">
        <img src={HeaderLogo} alt="" />
      </div>
      <div className="flex gap-3 items-center">
        <a
          href="https://www.linkedin.com/in/jorge-allende-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer flex gap-2 items-center font-bold bg-blue-600 px-4 py-2 md:px-5 md:py-2 rounded-full text-white hover:bg-blue-700 transition-colors">
            <svg className="w-4 md:w-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="hidden md:block text-sm">LinkedIn</span>
          </div>
        </a>
        <a
          href="https://wa.me/5584981701942"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cursor-pointer flex gap-2 items-center font-bold bg-orange-600 px-4 py-2 md:px-5 md:py-2 rounded-full text-base-cream-500 hover:bg-orange-700 transition-colors">
            <img src={TelegramLogo} className="w-4 md:w-5" alt="" />
            <span className="hidden md:block text-sm">Entre em contato</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
