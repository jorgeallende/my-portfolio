import TelegramLogo from "../assets/telegram-logo.svg";
import HeaderLogo from "../assets/header-logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="-mt-4">
        <img src={HeaderLogo} alt="" />
      </div>
      <a
        href="https://wa.me/5584981701942"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="cursor-pointer flex gap-2 items-center font-bold bg-orange-600 px-5 py-2 md:px-5 md:py-2 rounded-full text-base-cream-500">
          <img src={TelegramLogo} className="w-4 md:w-5" alt="" srcset="" />
          <span className={`hidden md:block text-sm`}>Entre em contato</span>
        </div>
      </a>
    </div>
  );
};

export default Header;
