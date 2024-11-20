import logo from '../images/logo-black.svg';
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Registration() {
    const [nameHub, setnameHub] = useState('');
    const [serialNumber, setserialNumber] = useState('');
    const [hubs, setHubs] = useState(() => {
        const storageHubs = JSON.parse(localStorage.getItem('hubs'))
        return storageHubs ?? [];
    })
    const [showRegistered, setShowRegistered] = useState(false);
    const [showModelClause, setshowModelClause] = useState(false);
    const [errorNameHub, seterrorNameHub] = useState('');
    const [errorSerialHub, seterrorSerialHub] = useState('');
    const [showErrorNameHub, setshowErrorNameHub] = useState(false);
    const [showErrorSerialHub, setShowErrorSerialHub] = useState(false);
    const [startAnimation, setStartAnimation] = useState(false);

    const isFormValid = nameHub.trim() !== '' && serialNumber.trim() !== '' && !showModelClause;

    const handleSubmit = () => {
        const hubNameExists = hubs.some(hub =>
            hub.nameHub.toLowerCase() === nameHub.toLowerCase()
        );
        const hubSerialExists = hubs.some(hub =>
            hub.serialNumber.toLowerCase() === serialNumber.toLowerCase()
        );
        if (hubNameExists && hubSerialExists) {
            seterrorNameHub('Hub name was already entered');
            seterrorSerialHub('Serial number was already entered');
            setshowErrorNameHub(true);
            setShowErrorSerialHub(true);
            setshowModelClause(false);
            return;
        } else {
            setshowErrorNameHub(false);
            setShowErrorSerialHub(false);
        }
        if (hubNameExists) {
            seterrorNameHub('Hub name was already entered');
            setshowErrorNameHub(true);
            setshowModelClause(false);
            return;
        }
        if (hubSerialExists) {
            seterrorSerialHub('Serial number was already entered');
            setShowErrorSerialHub(true);
            setshowModelClause(false);
            return;
        }
        setHubs(prev => {
            const newHubs = [...prev, { nameHub, serialNumber }]

            //Save to local storage
            const jsonHubs = JSON.stringify(newHubs)
            localStorage.setItem("hubs", jsonHubs)
            return newHubs
        })
        setshowModelClause(true);
        setStartAnimation(true);
        // Start registration animation
        setTimeout(() => {
            setShowRegistered(true);
        }, 4000);
    }


    return (
        <div className=" min-h-screen bg-gray-100 px-4 pb-2 md:pb-20 min-w-full">
            <div className="md:pl-8 pb-4">
                <img src={logo} alt="Logo" className="w-32 h-24" />
                <Link to="/register" className="flex items-center text-gray-700 hover:text-gray-900">
                    <ArrowLeft className="w-7 h-7" />
                    <span className="ml-1 text-md">Back</span>
                </Link>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8">
                <h1 className="mb-12 text-[#222021] text-[35px] font-medium leading-10">Smarthub registration</h1>

                <form className={`mb-8 ${showErrorNameHub ? 'space-y-2' : 'space-y-8 '}`}>
                    <div className='flex'>
                        <label className="max-w-20 min-w-20 md:max-w-32 md:min-w-32 my-auto mb-1 text-[#222021] text-lg font-medium leading-[23px]">
                            Hub name*
                        </label>
                        <input
                            type="text"
                            value={nameHub}
                            placeholder="Enter Hub name"
                            onChange={e => setnameHub(e.target.value)}
                            className="w-full px-3 py-2 border border-[#aeadad]"
                        />
                    </div>
                    {showErrorNameHub && (
                        <div className="pl-20 md:pl-32 mt-1 pb-4">
                            <span className="h-4 text-[#c32431] text-sm font-medium font-['Helvetica Neue LT Pro'] leading-none">{errorNameHub}</span>
                        </div>
                    )}
                    <div className='flex'>
                        <label className="max-w-20 min-w-20 md:max-w-32 md:min-w-32 my-auto mb-1 text-[#222021] text-lg font-medium leading-[23px]">
                            Serial number*
                        </label>
                        <input
                            type="text"
                            value={serialNumber}
                            placeholder="Enter serial number"
                            onChange={e => setserialNumber(e.target.value)}
                            className="w-full px-3 py-2 border border-[#aeadad]"
                        />
                    </div>
                    {showErrorSerialHub && (
                        <div className="pl-20 md:pl-32 mt-1">
                            <span className="text-red-500 text-sm">{errorSerialHub}</span>
                        </div>
                    )}
                    <div className='ml-20 md:ml-32'>
                        <button
                            onClick={handleSubmit}
                            disabled={!isFormValid}
                            type="button"
                            className={`w-32 px-4 py-2 rounded-md text-md transition-colors ${isFormValid
                                ? 'bg-[#ff6b4a] text-white hover:bg-[#ff8b6a]'
                                : 'bg-[#222021]/20 text-white cursor-not-allowed'
                                }`}
                        >
                            Register
                        </button>
                    </div>
                </form>

                <div className={!showModelClause ? 'hidden' : ''}>
                    <div className="md:flex justify-between gap-8">
                        <div className="flex-1">
                            <p className="mb-4 text-[#222021] text-2xl font-semibold leading-[29px]">Activate your hub</p>
                            <ol className="list-decimal list-inside space-y-3 md:space-y-2 pl-1 text-[#222021] text-md font-medium leading-none">
                                <li>Turn on your hub</li>
                                <li>Connect your hub to internet</li>
                                <li>Waiting for pairing</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                            </ol>
                            {!showRegistered ? (
                                <Link to="/register" className="mt-4 flex space-x-2 items-center text-gray-900 hover:text-gray-900">
                                    <span className="text-lg font-semibold ml-1">Skip and Save</span>
                                    <ArrowRight className="w-7 h-7" />
                                </Link>
                            ) : (
                                <div className="mt-52 md:mt-4 flex space-x-4 py-2 justify-center md:justify-start">
                                    <Link to="/">
                                        <button className="min-w-32 md:px-6 py-2 border border-gray-900 rounded-md hover:bg-gray-50">
                                            Home
                                        </button>
                                    </Link>
                                    <Link to="/register">
                                        <button className="min-w-32 md:px-6 py-2 bg-[#ff6b4a] border border-[#ff6b4a] text-white rounded-md hover:bg-[#ff8b6a]">
                                            Add device
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {startAnimation && (
                            <div className="relative top-[-280px] md:top-0 mt-10 flex items-center justify-center p-8">
                                {!showRegistered && (
                                    <div className="relative w-40 h-40 md:w-40 md:h-40">
                                        <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-[#ff6b4a] animate-[spin_4s_linear_forwards]" />
                                        <div className="absolute top-4 left-4 right-4 bottom-4 rounded-full border-4 border-transparent border-t-black animate-[spin_4s_linear_forwards]"
                                            style={{ animationDelay: '0.2s' }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-gray-500">Pairing...</span>
                                        </div>
                                    </div>
                                )}
                                {showRegistered && (
                                    <div className="relative w-40 h-40 md:w-40 md:h-40">
                                        <div className="absolute w-full h-full rounded-full border-4 border-[#ff6b4a] 
                                  animate-[appearCircle_0.5s_ease-out_forwards]" />
                                        <div className="absolute top-4 left-4 right-4 bottom-4 rounded-full border-4 border-black 
                                    animate-[appearCircle_0.5s_ease-out_forwards]"
                                            style={{ animationDelay: '0.2s' }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-gray-800 font-medium">Registered</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;
