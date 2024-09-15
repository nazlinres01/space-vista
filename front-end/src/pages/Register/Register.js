import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('individual'); // 'individual' or 'company'

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kayıt olma işlemi burada yapılacak
    console.log("Kayıt olundu:", { email, password, userType });
  };

  const handleGoogleRegister = () => {
    // Google ile kayıt olma işlemi
    console.log("Google ile kayıt olunuyor");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Kayıt Ol</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">E-posta</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="E-posta adresinizi girin"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Şifrenizi girin"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Kullanıcı Tipi</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            >
              <option value="individual">Bireysel</option>
              <option value="company">Şirket</option>
            </select>
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Kayıt Ol
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center my-4">
          <span className="text-gray-400">veya</span>
        </div>

        <button
          onClick={handleGoogleRegister}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
        >
          <FaGoogle className="mr-2" />
          Google ile Kayıt Ol
        </button>

        <div className="mt-4 text-center">
          <p>
            Zaten hesabınız var mı?{" "}
            <a href="/giris" className="text-blue-500 hover:underline">
              Giriş Yap
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
