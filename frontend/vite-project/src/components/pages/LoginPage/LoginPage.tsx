import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const modifiedFormData = {
      "user_id": formData.email,
      "password": formData.password,
    };
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 dir="rtl" className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ورود به حساب کاربری
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label dir="rtl" htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              نشانی ایمیل
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label dir="rtl" htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              رمز عبور
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ورود
            </button>
          </div>
        </form>

        <p dir="rtl" className="mt-10 text-center text-sm text-gray-500">
          حسابی ندارید؟&nbsp;
          <button onClick={() => navigate('/register')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            شروع کنید
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
