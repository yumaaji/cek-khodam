import React, { useState } from 'react';

const khodams = [
  "Ular Racing", "Macan Kumbang", "Elang Emas", "Naga Biru", "Harimau Terbang",
  "Kuda Besi", "Anjing Langit", "Ayam Berapi", "Serigala Putih", "Kucing Hitam",
  "Singa Laut", "Gajah Perkasa", "Burung Hantu", "Rubah Merah", "Kelinci Emas",
  "Kuda Hitam", "Kura-Kura Emas", "Ular Terbang", "Monyet Emas", "Paus Biru",
  "Ikan Terbang", "Tikus Besi", "Anjing Perkasa", "Kupu-Kupu Indah", "Gorila Kecil",
  "Domba Putih", "Ikan Emas", "Burung Merak", "Kucing Merah", "Ayam Jago",
  "Sapi Terbang", "Laba-laba Sepeda", "Gajah Ngebut", "Katak Hoki", "Bebek Kungfu",
  "Ikan Pedas", "Burung Sepatu", "Kuda Buntung", "Semut Hiperaktif", "Kucing Pink",
  "Ayam Penyet", "Kelelawar Disko", "Tikus Gendut", "Lumba-lumba Rocket", "Anjing Geledek",
  "Kucing Kura-kura", "Kupu-Kupu Samurai", "Kambing Ninja", "Burung Awan", "Kuda Laut Biru"
];

function App() {
  const [name, setName] = useState('');
  const [khodam, setKhodam] = useState('');
  const [showButton, setShowButton] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
    setKhodam(randomKhodam);
    setShowButton(false);
  }

  const handleTryAgain = () => {
    setName('');
    setKhodam('');
    setShowButton(true);
    window.location.reload();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">⭐Cek Khodam⭐</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Masukkan Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded mb-6 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-300 transition"
            autoFocus
          required/>
          {showButton ? (
            <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition">Cek Khodam</button>
          ) : (
            <button type="button" onClick={handleTryAgain} className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition">Coba Nama Lain</button>
          )}
        </form>
        {khodam && (
          <div className="mt-6 p-4 bg-purple-100 border border-purple-300 rounded-lg animate-fade-in-down">
            <p className="text-center text-lg text-purple-900">Nama: <span className="font-bold">{name}</span></p>
            <p className="text-center text-lg text-purple-900">Khodam: <span className="font-bold text-purple-600">{khodam}</span></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
