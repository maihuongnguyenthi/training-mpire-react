import logo from '../logo-black.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { FaSpinner } from 'react-icons/fa';

function Register() {
  const listHubs = [
    { id: 1, name: 'Hub 1 Lorem ipsum dolor sit amet', status: 'Inactive' },
    { id: 2, name: 'Hub 2 Lorem ipsum dolor sit amet', status: 'Restarting...' },
    { id: 3, name: 'Hub 3 Lorem ipsum dolor sit amet', status: 'Active' },
    { id: 4, name: 'Hub 4 Lorem ipsum dolor sit amet', status: 'Active' },
  ];

  const [hubs, setHubs] = useState(listHubs);

  const [selectedHub, setSelectedHub] = useState(null);

  const removeInactiveHub = (id) => {
    setHubs(hubs.filter((hub) => hub.id !== id || hub.status !== 'Inactive'));
  };
  return (
    <div className="">
      <div className="absolute top-2 left-8">
        <img src={logo} alt="Logo" className="mb-20 w-24 h-24" />
      </div>

      <div className='flex flex-row space-x-16 items-start justify-center items-center h-screen bg-gray-50 p-4'>
        <div className="">
          <h1 className="text-3xl font-semibold mb-2">Choose Hub to</h1>
          <h1 className="text-3xl font-semibold mb-2">create your flow</h1>
        </div>

        <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <div className="scrollbar-custom space-y-4 overflow-y-auto max-h-60 pr-2 scrollbar-thin scrollbar-thumb-gray-300
                         scrollbar-track-gray-100">
            {hubs.map((hub) => (
              <div
                key={hub.id}
                className="flex items-start border-b pb-2 last:border-b-0"
              >
                {hub.status === 'Restarting...' ? (
                  <div className="mr-4 mt-1 flex items-center">
                    <FaSpinner className="animate-spin text-orange-500 w-5 h-5" />
                  </div>
                ) : (
                  <input
                    type="radio"
                    name="hub"
                    checked={selectedHub === hub.id}
                    disabled={hub.status === 'Inactive' || hub.status === 'Restarting...'}
                    onChange={() => setSelectedHub(hub.id)}
                    className={`mr-4 mt-1 text-orange-500 focus:ring-orange-500 ${hub.status === 'Inactive' ?
                      'opacity-50 cursor-not-allowed' : ''}`}
                  />
                )}
                <div className="flex flex-col flex-grow">
                  <span className={`font-medium ${hub.status === 'Inactive' ? 'text-gray-400' : ''}`}>
                    {hub.name}
                  </span>
                  <span
                    className={`text-sm ${hub.status === 'Active'
                      ? 'text-red-500'
                      : hub.status === 'Restarting...'
                        ? 'black cursor-not-allowed'
                        : 'text-gray-400'
                      }`}
                  >
                    {hub.status}
                  </span>
                </div>
                {hub.status === 'Inactive' && (
                  <button onClick={() => removeInactiveHub(hub.id)}>
                    <XIcon className="w-5 h-5 text-gray-400 hover:text-red-500" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            className={`mt-6 w-20 pb-1 rounded-md ml-40 ${selectedHub === null
              ? 'bg-[#f5f5f5] text-black font-semibold border-2 border-black cursor-not-allowed'
              : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}
            disabled={selectedHub === null}
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
}

export default Register;
