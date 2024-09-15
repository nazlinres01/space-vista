import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada giriş işlemi yapılacak
    console.log("Login işlemi başarılı:", { email, password });
  };

  const handleGoogleLogin = () => {
    // Burada Google ile giriş yapılacak
    console.log("Google ile giriş yapılıyor");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Giriş Yap</h2>
        
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

          <div className="mb-6">
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

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Giriş Yap
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center my-4">
          <span className="text-gray-400">veya</span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
        >
          <FaGoogle className="mr-2" />
          Google ile Giriş Yap
        </button>

        <div className="mt-4 text-center">
          <p>
            Hesabınız yok mu?{" "}
            <a href="/kayit-ol" className="text-blue-500 hover:underline">
              Kayıt Ol
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
