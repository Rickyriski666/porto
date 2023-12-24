import { useClickAway } from '@uidotdev/usehooks';
import Hamburger from 'hamburger-react';
import { useRef, useState } from 'react';
import { routes } from '../../routes/route';

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));

  return (
    <div className="lg:hidden">
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
      {isOpen && (
        <div className="fixed left-0 right-0 w-full shadow-4xl top-[4.5rem] p-5 pt-10 bg-background border-b border-b-white/20">
          <ul className="grid gap-2">
            {routes.map((route) => {
              return (
                <li
                  key={route.title}
                  className="w-full p-[0.08rem] rounded-xl "
                >
                  <a
                    onClick={() => setIsOpen((prev) => !prev)}
                    className={
                      'flex items-center justify-between w-full p-5 rounded-xl hover:bg-dark-grey hover:text-background transition-colors'
                    }
                    href={route.href}
                  >
                    <span className="flex gap-1 text-lg justify-center">
                      {route.title}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
