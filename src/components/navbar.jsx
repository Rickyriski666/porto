import NavbarDesktop from './navbarcomponent/NavbarDesktop';
import NavbarMobile from './navbarcomponent/NavbarMobile';

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex justify-between items-center px-4 py-6 md:px-24 bg-background">
      <span>
        <h1 className="text-4xl font-extrabold text-dark-grey">Ricky</h1>
      </span>
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  );
}
