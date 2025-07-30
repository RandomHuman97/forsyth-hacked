import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router';
import Turnstile from '../components/Turnstile';

type TeamMember = {
  id: number;
};

const SignupPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([{ id: 0 }]);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitting) return;

    const data = new FormData(e.currentTarget as HTMLFormElement);
    const turnstileToken = data.get('cf-turnstile-response');

    if (!turnstileToken || typeof turnstileToken !== 'string' || turnstileToken.trim() === '') {
      alert('Please complete the Captcha challenge.');
      return;
    }

    setSubmitting(true);

    const sendData = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      grade: data.get('grade'),
      school: data.get('school'),
      CloudflareTurnstileResponse: turnstileToken,
      members: teamMembers.map((member) => ({
        name: data.get(`member-name-${member.id}`),
        email: data.get(`member-email-${member.id}`),
        phone: data.get(`member-phone-${member.id}`),
        grade: data.get(`member-grade-${member.id}`),
        school: data.get(`member-school-${member.id}`),
      })),
    };

    try {
      const response = await fetch('https://zayaan.adiavi.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendData),
      });

      if (response.ok) {
        alert('Signup successful!');
        navigate('/#');
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const addTeamMember = () => {
    if (teamMembers.length >= 3) return;
    const newId = teamMembers.length ? Math.max(...teamMembers.map((m) => m.id)) + 1 : 0;
    setTeamMembers([...teamMembers, { id: newId }]);
  };

  const removeTeamMember = (id: number) => {
    setTeamMembers(teamMembers.filter((m) => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-brand-coal text-brand-beige px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto grid place-items-center bg-brand-coal rounded-full w-[56px] h-[56px]">
            <svg width="32" height="32" fill="currentColor" className="text-brand-yellow" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold">Sign up for the hackathon</h2>
          <p className="mt-2 text-sm">
            See the info{' '}
            <a href="/" className="text-brand-yellow hover:underline font-semibold">
              here
            </a>
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl mx-auto bg-gray-900 rounded-xl border border-gray-800 shadow-2xl overflow-auto"
        >
          {/* Tabs */}
          <div className="flex items-center bg-gray-800/80 border-b border-gray-700 px-4">
            <div className="flex space-x-2 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="ml-4 text-sm flex">
              <div className="px-4 py-2 text-gray-500">main.ts</div>
              <div className="px-4 py-2 text-gray-500">team.ts</div>
              <div className="px-4 py-2 text-brand-blue-light border-b-2 border-brand-blue-light">signup.json</div>
            </div>
          </div>

          {/* Hint */}
          <div className="text-center text-sm italic text-gray-400 px-4 pt-4">// Edit the code block below to fill in your information</div>

          {/* Code-style Inputs */}
          <div className="p-5 font-mono space-y-2">
            <div className="text-purple-400">{'{'}</div>
            <div className="ml-4 space-y-2">
              <div>
                <span className="text-brand-blue">"full_name"</span>: "
                <input
                  name="name"
                  required
                  placeholder="Full Name"
                  className="bg-transparent text-yellow-300 w-full max-w-[30ch] px-1 focus:outline-none"
                />",
              </div>
              <div>
                <span className="text-brand-blue">"email"</span>: "
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="bg-transparent text-yellow-300 w-full max-w-[30ch] px-1 focus:outline-none"
                />",
              </div>
              <div>
                <span className="text-brand-blue">"phone"</span>: "
                <input
                  name="phone"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  type="tel"
                  placeholder="1012345678"
                  className="bg-transparent text-yellow-300 w-full max-w-[11ch] px-1 focus:outline-none"
                />",
              </div>
              <div>
                <span className="text-brand-blue">"grade"</span>:{' '}
                <input
                  name="grade"
                  type="number"
                  min="9"
                  max="12"
                  required
                  placeholder="9-12"
                  className="bg-transparent text-yellow-300 w-12 px-1 focus:outline-none inline-block ml-1
                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />,
              </div>
              <div>
                <span className="text-brand-blue">"school"</span>: "
                <input
                  name="school"
                  required
                  placeholder="School"
                  className="bg-transparent text-yellow-300 w-full max-w-[30ch] px-1 focus:outline-none"
                />",
              </div>

              <br />

              <div>
                <span className="text-brand-blue">"team_members"</span>: [
              </div>
              <div className="ml-4 space-y-2">
                {teamMembers.map(({ id }, i) => (
                  <div key={id}>
                    <div className="flex gap-2">
                      <div className="text-gray-400">{'{'}</div>
                      <button
                        type="button"
                        onClick={() => removeTeamMember(id)}
                        className="text-red-400 hover:underline hover:cursor-pointer select-none"
                        aria-label={`Remove team member ${i + 1}`}
                      >
                        // Remove
                      </button>
                    </div>
                    <div className="ml-4 space-y-1">
                      <div>
                        <span className="text-brand-blue">"full_name"</span>: "
                        <input
                          name={`member-name-${id}`}
                          required
                          placeholder="Full Name"
                          className="bg-transparent text-yellow-300 w-full max-w-[30ch] px-1 focus:outline-none"
                        />",
                      </div>
                      <div>
                        <span className="text-brand-blue">"email"</span>: "
                        <input
                          name={`member-email-${id}`}
                          type="email"
                          placeholder="Email (optional)"
                          className="bg-transparent text-yellow-300 w-full max-w-[30ch] px-1 focus:outline-none"
                        />",
                      </div>
                      <div>
                        <span className="text-brand-blue">"phone"</span>: "
                        <input
                          name={`member-phone-${id}`}
                          type="tel"
                          placeholder="1012345678 (optional)"
                          className="bg-transparent text-yellow-300 w-full max-w-[22ch] px-1 focus:outline-none"
                        />",
                      </div>
                      <div>
                        <span className="text-brand-blue">"grade"</span>:{' '}
                        <input
                          name={`member-grade-${id}`}
                          type="number"
                          min="9"
                          max="12"
                          required
                          placeholder="9-12"
                          className="bg-transparent text-yellow-300 w-12 px-1 focus:outline-none inline-block ml-1
                            [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />,
                      </div>
                      <div>
                        <span className="text-brand-blue">"school"</span>: "
                        <input
                          name={`member-school-${id}`}
                          placeholder="School"
                          className="bg-transparent text-yellow-300 w-full max-w-[30ch] px-1 focus:outline-none"
                        />",
                      </div>
                    </div>
                    <div className="text-gray-400">{i === teamMembers.length - 1 ? '}' : '},'}</div>
                  </div>
                ))}
              </div>
              {
                teamMembers.length < 3 && ( 
              <button
                          type="button"
                          onClick={() => addTeamMember()}
                          className="text-green-600 hover:underline hover:cursor-pointer select-none"
                          aria-label={`Add team member`}
                        >
                          // Add Team Member
                        </button>
                ) 
              }

              <div>],</div>
            </div>
            <div className="text-purple-400">{'}'}</div>

            {/* Buttons */}
            <div className="pt-5 space-y-3">
              <Turnstile />
              <button
                type="button"
                onClick={addTeamMember}
                disabled={teamMembers.length >= 3}
                className={`w-full py-2 px-4 border rounded-md transition ${
                  teamMembers.length >= 3
                    ? 'border-gray-600 text-gray-600 cursor-not-allowed'
                    : 'border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-coal cursor-pointer'
                }`}
              >
                + Add Team Member
              </button>
              <button
                type="submit"
                disabled={submitting}
                className={
                  'w-full py-2 px-4 font-black bg-brand-yellow text-brand-coal rounded-md hover:opacity-90 transition ' +
                  (submitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer')
                }
              >
                {submitting ? 'Signing Up...' : 'Sign Up'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
