import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <div className="text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 my-6 rounded-md">
        <h1 className="text-2xl text-white font-bold mt-4">AI-Boosted Entrepreneur</h1>
        <p className="text-slate-300 text center">We educate small businesses on all aspects of Artificial Intelligence</p>
        
        <nav className="flex justify-center mt-4">
          <div className="text-slate-300 space-x-4 underline-hover">
            <Link href="/" passHref>Home</Link>
            <Link href="/about" passHref>About</Link>
            <Link href="/contact" passHref>Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
