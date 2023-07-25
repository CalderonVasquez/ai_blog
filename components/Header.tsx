import Link from 'next/link';
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="mt-2">
      <div className="text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 py-2 my-6 rounded-md">
        <div className="flex items-center justify-between">
          <div>
            <Image
              src="/ai_logo.png"
              width={80}
              height={80}
              alt="logo"
            />
          </div>
          <div className="text-slate-300 space-x-4">
            <Link className="hover:underline" href="/" passHref>Home</Link>
            <Link className="hover:underline" href="/about" passHref>About</Link>
          </div>
        </div>
        <h1 className="text-2xl text-white font-bold mt-4">AI-Boosted Entrepreneur</h1>
        <p className="text-slate-300 text-center mb-10">We educate small businesses on all aspects of Artificial Intelligence</p>
      </div>
    </header>
  );
};

export default Header;
