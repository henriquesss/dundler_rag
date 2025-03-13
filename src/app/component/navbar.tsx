"use client";
import Link from 'next/link';

const NavBar: React.FC = () => {

  return (
    <nav style={{ backgroundColor: '#111', padding: '1rem' }}>
      <ol style={{ listStyleType: 'none', margin: 10, padding: 0, color: "#fff" }}>
        <img src='/logo.png' width={70} style={{ display: 'inline', marginLeft: '1rem' }} />
        <li style={{ display: 'inline', marginLeft: '5rem' }}>
          <Link href="/">
            Chat
          </Link>
        </li>
        <li style={{ display: 'inline', marginLeft: '2rem' }}>
          <Link href="/teach">
            Train
          </Link>
        </li>
        <li style={{ display: 'inline', marginLeft: '2rem' }}>
          <Link href="/documentation">
            Documentation
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default NavBar;
