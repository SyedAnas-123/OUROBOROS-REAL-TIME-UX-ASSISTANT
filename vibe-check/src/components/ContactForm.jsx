import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // This stops the page from reloading
    alert(`Success! We sent a confirmation to ${email}`);
    setEmail(""); // Clear the input
  };

  return (
    <section className="bg-slate-50 p-8 rounded-xl my-8 border border-slate-200">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Subscribe for Updates</h2>
      {/* FIXED: The onSubmit is now correctly attached */}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
        <input 
          type="email" 
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded-lg flex-1 border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          required 
        />
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition shadow-sm">
          Join Now
        </button>
      </form>
    </section>
  );
}