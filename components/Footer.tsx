import MailchimpSubscribeForm from "./MailchimpSubscriberForm";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="text-slate-700">
        <MailchimpSubscribeForm />
      </div>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-500">
        <h2>AI-Boosted Entrepreneur</h2>
        <p className="mb-1">Copyright © 2023 AI-Boosted Entrepreneur</p>
      </div>
      
    </footer>
  );
};

export default Footer;
