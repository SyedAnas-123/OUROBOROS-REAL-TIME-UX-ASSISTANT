// We receive the 'onAddToCart' function from the parent
export default function ProductCard({ title, price, onAddToCart }) {
  
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
      <div className="h-48 bg-slate-200 rounded mb-4 w-full object-cover"></div>
      <h3 className="font-bold text-lg text-slate-900">{title}</h3>
      <p className="text-indigo-600 font-medium">${price}</p>
      
      {/* THE BUG IS HERE: 
          The onClick is missing! 
          It should be: onClick={onAddToCart}
          But right now, clicking does absolutely nothing.
      */}
      <button 
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition active:scale-95 font-semibold"
        onClick={onAddToCart} // FIX: Added the onClick handler
      >
        Add to Cart
      </button>
    </div>
  );
}