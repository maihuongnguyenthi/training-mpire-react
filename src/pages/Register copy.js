import logo from '../logo-black.svg';
import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { FaSpinner } from 'react-icons/fa';

function Register() {
  const listHubs = [
    { id: 1, name: 'Hub 1 Lorem ipsum dolor sit amet', status: 'Inactive' },
    { id: 2, name: 'Hub 2 Lorem ipsum dolor sit amet', status: 'Restarting...' },
    { id: 3, name: 'Hub 3 Lorem ipsum dolor sit amet', status: 'Active' },
    { id: 4, name: 'Hub 4 Lorem ipsum dolor sit amet', status: 'Active' },
    { id: 5, name: 'Hub 5 Lorem ipsum dolor sit amet', status: 'Active' },
    { id: 6, name: 'Hub 6 Lorem ipsum dolor sit amet', status: 'Active' },
  ];

  const [hubs, setHubs] = useState(listHubs);

  const [selectedHub, setSelectedHub] = useState(null);

  const removeInactiveHub = (id) => {
    setHubs(hubs.filter((hub) => hub.id !== id || hub.status !== 'Inactive'));
  };
  return (
    <div className="container min-h-screen">
      <div className="pl-8">
        <img src={logo} alt="Logo" className="mb-20 w-24 h-24" />
      </div>

      <div className='flex flex-wrap space-y-4 md:px-2'>
        <div className="flex-1 flex items-center  text-4xl md:text-6xl">
          <div className="mx-auto">Choose Hub to <br />create your flow</div>
        </div>

        <div className='flex-1'>
          <div className="bg-white shadow-lg rounded-lg p-10 ml-0 max-w-xl">
            <div className="scrollbar-custom space-y-4 overflow-y-auto max-h-60 pr-4">
              {hubs.map((hub) => (
                <div
                  key={hub.id}
                  className="flex items-start border-b pb-2 last:border-b-0"
                >
                  {hub.status === 'Restarting...' ? (
                    <div className="mr-4 mt-1 flex items-center">
                      <FaSpinner className="animate-spin text-orange-500 w-4 h-5" />
                    </div>
                  ) : (
                    <input
                      type="radio"
                      name="hub"
                      checked={selectedHub === hub.id}
                      disabled={hub.status === 'Inactive' || hub.status === 'Restarting...'}
                      onChange={() => setSelectedHub(hub.id)}
                      className={`cursor-pointer mr-4 mt-1 text-orange-500 focus:ring-orange-500 ${hub.status === 'Inactive' ?
                        'opacity-50 cursor-not-allowed' : ''}`}
                    />
                  )}
                  <div className="flex flex-col flex-shrink flex-grow space-y-3">
                    <span className={`font-medium grow shrink basis-0 h-[30px] text-lg leading-[23px] 
                                ${hub.status === 'Inactive' ? 'text-gray-400' : 'text-[#222021]'}`}>
                      {hub.name}
                    </span>
                    <span
                      className={`text-sm grow shrink ${hub.status === 'Active'
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
                    <button className='pt-5' onClick={() => removeInactiveHub(hub.id)}>
                      <XIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-red-500" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className='min-w-80'>
              <button
                className={`flex justify-center mx-auto mt-6 pb-1 rounded-md w-24 h-7 text-center text-lg font-medium leading-[23px] ${selectedHub === null
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
      </div>

    </div>
  );
}

export default Register;
