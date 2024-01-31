import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from "axios"

const RegistrationForm: React.FC = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
    gender: '',
    weight: '',
    height: '',
    age: '',
    exercise_level: '',
  });

  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [emailFormat, setEmailFormat] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'password2') {
      if (formData.password !== value) {
        setPasswordsMatch(false);
      } else {
        setPasswordsMatch(true);
      }
    }
    else if (name == 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) {
        setEmailFormat(true);
      } else {
        setEmailFormat(false);
      }
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (passwordsMatch && emailFormat) {
      try {
        const modifiedFormData = {
          "user_id": formData.email,
          "first_name": formData.first_name,
          "last_name": formData.last_name,
          "age": parseInt(formData.age),
          "weight": parseInt(formData.weight),
          "height": parseInt(formData.height),
          "activity_level": formData.exercise_level,
          "password": formData.password,
          "password2": formData.password2,
//          'gender': formData.gender,
        };
        Axios.post('http://localhost:8000/user/register/', modifiedFormData,
          {
            headers: {
                "Content-Type": 'application/json'
            }
          }
        )
        .then(res => console.log(res))
        .catch(error => console.log(error))
        /*const response = await fetch('http://localhost:8000/user/register/', {
          method: 'POST',
          body: modifiedFormData,
        });

        /*const response = await fetch('http://127.0.0.1:8000/user/meallist/1/egg/dinner/2024-01-25/', {
          method: 'GET'
        });
  
        if (response.ok) {
          // Handle successful response
          console.log('Form submitted successfully:', formData);
        } else {
          // Handle error response
          console.error('Error submitting form:', response.statusText);
        }*/
      } catch (error) {
        console.error('Error submitting form');
      }
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 dir="rtl" className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          شروع مسیر سلامتی با دایتلی!
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div dir="rtl">
            <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
              نام
            </label>
            <div className="mt-2">
              <input
                id="first_name"
                name="first_name"
                type="text"
                value={formData.first_name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div dir="rtl">
            <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
              نام خانوادگی
            </label>
            <div className="mt-2">
              <input
                id="last_name"
                name="last_name"
                type="text"
                value={formData.last_name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label dir="rtl" htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              نشانی ایمیل
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={emailFormat ? "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" : "block w-full rounded-md border-0 py-1.5 text-red-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}
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
            <label dir="rtl" htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              تکرار رمز عبور
            </label>
            <div className="mt-2">
              <input
                id="password2"
                name="password2"
                type="password"
                value={formData.password2}
                onChange={handleChange}
                className={passwordsMatch ? "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6": "block w-full border-0 rounded-md py-1.5 text-red-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}
              />
            </div>
          </div>

          <div dir="rtl">
            <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
              جنسیت
            </label>
            <div className="mt-2">
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              >
                <option value="Male">مرد</option>
                <option value="Female">زن</option>
              </select>
            </div>
          </div>

          <div dir="rtl">
            <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
              وزن (کیلوگرم)
            </label>
            <div className="mt-2">
              <input
                id="weight"
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div dir="rtl">
            <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">
              قد (سانتی متر)
            </label>
            <div className="mt-2">
              <input
                id="height"
                name="height"
                type="number"
                value={formData.height}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div dir="rtl">
            <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">
              سن
            </label>
            <div className="mt-2">
              <input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div dir="rtl">
            <label htmlFor="exercise_level" className="block text-sm font-medium leading-6 text-gray-900">
              میزان فعالیت
            </label>
            <div className="mt-2">
              <select
                id="exercise_level"
                name="exercise_level"
                value={formData.exercise_level}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="little or no exercise">هیچ</option>
                <option value="light exercise">کم</option>
                <option value="moderate exercise">متوسط</option>
                <option value="hard exercise">بالا</option>
                <option value="very hard exercise">بسیار بالا</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ثبت نام
            </button>
          </div>
        </form>

        <p dir="rtl" className="mt-10 text-center text-sm text-gray-500">
          حساب کاربری دارید؟&nbsp;
          <button onClick={() => navigate('/login')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            ورود
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
