import ContactButton from '../ui/ContactButton';
import NavLink from '../ui/NavLink';

export default function Header() {
  return (
    <header className="bg-yellow-100 p-4">
      <nav className="container">
        <ul className="flex gap-3">
          <li>
            <NavLink href="/">HomePage</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/posts">Blogs</NavLink>
          </li>
          <ContactButton />
        </ul>
      </nav>
    </header>
  );
}
