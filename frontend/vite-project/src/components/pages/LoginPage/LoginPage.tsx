import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {

  const navigate = useNavigate();
  const [redirectToUserPanel, setRedirectToUserPanel] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [wrongInfo, setWrongInfo] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setWrongInfo(false);
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
      const modifiedFormData = {
        "user_id": formData.email,
        "password": formData.password,
      };
      const response = await axios.post('http://localhost:8000/user/login/', modifiedFormData,
        {
          headers: {
              "Content-Type": 'application/json'
          }
        }
      )
      setRedirectToUserPanel(true);
      localStorage.setItem('token', response.data)
    } catch (error) {
      setWrongInfo(true);
      console.log(error.response.data);
    }
  };

  if (redirectToUserPanel) {
    navigate('/panel')
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 font">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 dir="rtl" className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ورود به حساب کاربری
        </h2>
      </div>

      <Gradient />

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit}>
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
                placeholder='you@example.com'
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
              className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ورود
            </button>
            <br />
            {wrongInfo ? <p dir="rtl" style={{color: 'red', }}>
              ایمیل یا رمز عبور وارد شده اشتباه است!
            </p> : null}
          </div>
        </form>

        <p dir="rtl" className="mt-10 text-center text-sm text-gray-500">
          حسابی ندارید؟&nbsp;
          <button onClick={() => navigate('/register')} className="font-semibold leading-6 text-emerald-700 hover:text-emerald-600">
            شروع کنید
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
