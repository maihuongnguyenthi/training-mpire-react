import logo from '../images/logo-black.svg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { XIcon } from '@heroicons/react/outline';
import { FaSpinner } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Register() {
  const listHubs = [
    { id: 1, name: 'Hub 1 Lorem ipsum dolor sit amet', status: 'Inactive' },
    { id: 2, name: 'Hub 2 Lorem ipsum dolor sit amet', status: 'Restarting...' },
    { id: 3, name: 'Hub 3 Lorem ipsum dolor sit amet', status: 'Active' },
    { id: 4, name: 'Hub 4 Lorem ipsum dolor sit amet', status: 'Inactive' },
    { id: 5, name: 'Hub 5 Lorem ipsum dolor sit amet', status: 'Active' },
    { id: 6, name: 'Hub 6 Lorem ipsum dolor sit amet', status: 'Active' },
  ];

  const navigate = useNavigate();

  const [hubs, setHubs] = useState(listHubs);
  const [selectedHub, setSelectedHub] = useState(null);

  const removeInactiveHub = (id) => {
    setHubs(hubs.filter((hub) => hub.id !== id));
  };

  const handleSubmut = (selectedHub) => {
    if (selectedHub !== null) {
      console.log("Selected Hub:", selectedHub);

      navigate('/services');
    } else {
      console.warn("Please select a hub before proceeding");
    }
  };

  return (
    <div className="container min-h-screen mx-auto">
      <div className="pl-8">
        <img src={logo} alt="Logo" className="mb-20 w-32 h-24" />
      </div>

      <div className="flex flex-wrap mt-[-50px] space-y-4 md:px-2">
        <div className="flex-1 flex md:mt-52 text-4xl md:text-6xl">
          <div className="mx-auto text-center">Choose Hub to <br />create your flow</div>
        </div>

        <div className="flex-1">
          <div className="bg-white shadow-lg rounded-lg p-10 pb-0 ml-0 max-w-[652px] min-h-[480px]">
            <div className="scrollbar-custom space-y-4 overflow-y-auto max-h-96 pr-4">
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
                    <div
                      className={`w-4 h-4 border-2 rounded-full flex items-center justify-center mr-4 mt-1
                        ${hub.status === 'Inactive' ? 'border-gray-400 cursor-not-allowed opacity-50' : 'border-black cursor-pointer'}
                      `}
                      onClick={() => hub.status === 'Active' && setSelectedHub(hub.id)}
                    >
                      {selectedHub === hub.id && (
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                      )}
                    </div>
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
                          ? 'text-black cursor-not-allowed'
                          : 'text-gray-400'
                        }`}
                    >
                      {hub.status}
                    </span>
                  </div>
                  {hub.status === 'Inactive' && (
                    <button className="pt-5" onClick={() => removeInactiveHub(hub.id)}>
                      <XIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-red-500" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="min-w-80 flex justify-center mt-12">
              <button
                onClick={() => handleSubmut(selectedHub)}
                className={`px-4 py-1 rounded-lg text-md transition-colors w-32  text-center text-lg font-[540] ${selectedHub === null
                  ? 'bg-[#f5f5f5] text-gray-900 border-[1px] border-gray-600 cursor-not-allowed'
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
                  }`}
                disabled={selectedHub === null}
              >
                Next
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center py-12 max-w-[652px]">
            <div className="text-xl md:text-3xl text-gray-900">
              or Register a new Hub
            </div>

            <Link
              to="/registration"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 font-[545] text-xl transition-colors"
            >
              Register
              <ArrowRight className="w-6 h-10" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;
