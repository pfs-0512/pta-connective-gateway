import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-100/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link to="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
            プライバシーポリシー
          </Link>
          <Link to="/terms" className="text-gray-600 hover:text-gray-900 text-sm">
            利用規約
          </Link>
          <Link to="/company" className="text-gray-600 hover:text-gray-900 text-sm">
            運営会社
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
            お問い合わせフォーム
          </Link>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-400 text-xs">© 2024 PTA会員向けプラン All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;