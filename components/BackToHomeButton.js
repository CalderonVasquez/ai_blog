// components/BackToHomeButton.js

import Link from 'next/link';

const BackToHomeButton = () => {
  return (
    <div className="mt-4 text-center">
          <Link href="/"
              className="text-blue-600 hover:underline">Back to Home
          </Link>
    </div>
  );
};

export default BackToHomeButton;
