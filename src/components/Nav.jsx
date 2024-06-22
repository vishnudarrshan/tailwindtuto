import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a className="font-montserrat leading-normal text-lg text-slate-gray">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden">
          <img src={hamburger} alt="navLogo" width={29} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
