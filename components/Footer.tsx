const Footer: React.FC = () => {
  return (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-500">
        <h2>AI-Boosted Entrepreneur</h2>
        <p className="mb-1">Copyright © 2023 AI-Boosted Entrepreneur</p>
        <form>
          <input type="email" placeholder="Enter your email" className="w-64 py-2 px-4 border-slate-400 rounded-md" />
          <button type="submit" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white font-bold py-2 px-3 rounded-md">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
