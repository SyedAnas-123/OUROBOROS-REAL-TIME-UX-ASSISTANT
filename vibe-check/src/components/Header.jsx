import { ShoppingCart } from 'lucide-react';

export default function Header({ cartCount }) {
  return (
    <header className="bg-indigo-600 text-white p-4 shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">Ouroboros Store</h1>
        
        <div className="flex items-center gap-6 font-medium">
          <ul className="hidden md:flex gap-6">
            <li className="hover:text-indigo-200 cursor-pointer">Home</li>
            <li className="hover:text-indigo-200 cursor-pointer">Products</li>
          </ul>

          {/* This is what we will watch in the video */}
          <div className="flex items-center gap-2 bg-indigo-700 px-4 py-2 rounded-full hover:bg-indigo-800 transition cursor-pointer">
            <ShoppingCart size={20} />
            <span>Cart: {cartCount}</span>
          </div>
        </div>
      </nav>
    </header>
  );
}