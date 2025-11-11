import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        
        {/* Left Section - Branding */}
        <div className="md:w-1/3">
          <h2 className="text-white text-2xl font-bold mb-3">ImageGen</h2>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Bring your imagination to life with AI-generated visuals — fast, creative, and unique.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-blue-700 font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Get Started Free
          </Link>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex flex-col space-y-2 md:w-1/3">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:text-white transition">Home</Link>
            <Link href="#" className="hover:text-white transition">About</Link>
            <Link href="#" className="hover:text-white transition">Pricing</Link>
            <Link href="#" className="hover:text-white transition">Contact</Link>
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms</Link>
          </div>
        </div>

        {/* Right Section - Social / Info */}
        <div className="md:w-1/3 md:text-right">
          <h3 className="text-white font-semibold mb-3">Stay Connected</h3>
          <p className="text-sm mb-3 text-gray-400">Follow us for the latest updates:</p>
          <div className="flex md:justify-end space-x-4">
            <Link href="#" className="hover:text-white">Twitter</Link>
            <Link href="#" className="hover:text-white">LinkedIn</Link>
            <Link href="#" className="hover:text-white">GitHub</Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 px-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} ImageGen. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with ❤️ by the ImageGen Team</p>
      </div>
    </footer>
  );
};

export default Footer;
