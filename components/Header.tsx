import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <h1>AI-Boosted Entrepreneur</h1>
        <p>We educate small businesses and solopreneurs on all aspects of Artificial Intelligence</p>
        
      </div>
      <nav>
        <div>
            <Link href="/" passHref>Home</Link>
            <Link href="/about" passHref>About</Link>
            <Link href="/contact" passHref>Contact</Link>
        </div>
            <br />
    </nav>
    </header>
  );
};

export default Header;
