import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Signup form submitted! (Data logged to console)'); // Placeholder
  };

  return (
    <>
      <div className="min-h-screen outfit flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-brand-coal text-brand-beige">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="mx-auto h-12 w-auto grid place-items-center text-center bg-brand-coal rounded-full w-[56px] h-[56px]">
               <svg 
                 xmlns="http://www.w3.org/2000/svg" 
                 width="32" 
                 height="32" 
                 viewBox="0 0 32 32" 
                 fill="currentColor"
                 className="text-brand-yellow"
               >
                 <title>Hackathon Logo</title>
                 <path d="M8 4L4 8V24L8 28H12L16 24L20 28H24L28 24V8L24 4H20L16 8L12 4H8Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                 <path d="M12 12L16 16L12 20M20 12L16 16L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                 <path d="M16 8L16 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
               </svg>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-beige">Sign up for the hackathon</h2>
            <p className="mt-2 text-center text-sm text-brand-beige">See the info <a href="/" className="font-semibold text-brand-yellow hover:underline">here</a></p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  autoComplete="name" 
                  required 
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-brand-charcoal/10 dark:border-brand-coal placeholder-gray-300 rounded-t-md focus:outline-none focus:ring-0 focus:z-10 focus:border-brand-purple dark:focus:border-brand-coal sm:text-sm bg-brand-white dark:bg-brand-charcoal"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input 
                  id="email-address" 
                  name="email" 
                  type="email" 
                  autoComplete="email" 
                  required 
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-brand-charcoal/10 dark:border-brand-coal placeholder-gray-300 bg-brand-white dark:bg-brand-charcoal focus:outline-none focus:ring-0 focus:z-10 focus:border-brand-purple dark:focus:border-brand-coal  sm:text-sm"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="teamName" className="sr-only">Team Name (Optional)</label>
                <input 
                  id="teamName" 
                  name="teamName" 
                  type="text" 
                  autoComplete="off" 
                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-brand-charcoal/10 dark:border-brand-coal placeholder-gray-300 bg-brand-white dark:bg-brand-charcoal rounded-b-md focus:outline-none focus:ring-0 focus:z-10 focus:border-brand-purple dark:focus:border-brand-coal sm:text-sm"
                  placeholder="Team Name (Optional)"
                  value={formData.teamName}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <button 
                type="submit" 
                className="group relative w-full flex justify-center py-2 px-4 rounded-md font-black bg-brand-yellow text-brand-coal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow disabled:opacity-50"
                 disabled={false}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage; 