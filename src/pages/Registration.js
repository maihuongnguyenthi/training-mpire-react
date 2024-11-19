import logo from '../logo-black.svg';
import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Registration() {
    const [showRegistered, setShowRegistered] = useState(false);
    const [nameHub, setnameHub] = useState('');
    const [serialNumber, setserialNumber] = useState('');
    const [hubs, setHubs] = useState([])
    const [errorNameHub, seterrorNameHub] = useState('');
    const [errorSerialHub, seterrorSerialHub] = useState('');
    const [showErrorNameHub, setshowErrorNameHub] = useState(false);
    const [showErrorSerialHub, setShowErrorSerialHub] = useState(false);

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
            return;
        }else{
            setshowErrorNameHub(false);
            setShowErrorSerialHub(false);
        }
        if (hubNameExists) {
            seterrorNameHub('Hub name was already entered');
            setshowErrorNameHub(true);
            return;
        }
        if (hubSerialExists) {
            seterrorSerialHub('Serial number was already entered');
            setShowErrorSerialHub(true);
            return;
        }
        setHubs([...hubs,
        {
            nameHub,
            serialNumber
        }])
        console.log(hubs);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowRegistered(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-0">
            <div className="pl-8">
                <img src={logo} alt="Logo" className="w-32 h-24" />
                <Link to="/register" className="flex items-center text-gray-700 hover:text-gray-900">
                    <ArrowLeft className="w-7 h-7" />
                    <span className="ml-1 text-md">Back</span>
                </Link>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-semibold mb-12">Smarthub registration</h1>

                <form className={`mb-8 ${showErrorNameHub ?'space-y-2' : 'space-y-8 '}`}>
                    <div className='flex '>
                        <label className="min-w-32 text-md my-auto font-medium text-gray-900 mb-1">
                            Hub name*
                        </label>
                        <input
                            type="text"
                            value={nameHub}
                            placeholder="Enter Hub name"
                            onChange={e => setnameHub(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                        />
                    </div>
                    {showErrorNameHub && (
                        <div className="pl-32 mt-1 pb-4">
                            <span className="text-red-500 text-sm">{errorNameHub}</span>
                        </div>
                    )}
                    <div className='flex'>
                        <label className="min-w-32 text-md my-auto font-medium text-gray-900 mb-1">
                            Serial number*
                        </label>
                        <input
                            type="text"
                            value={serialNumber}
                            placeholder="Enter serial number"
                            onChange={e => setserialNumber(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                        />
                    </div>
                    {showErrorSerialHub && (
                        <div className="pl-32 mt-1">
                            <span className="text-red-500 text-sm">{errorSerialHub}</span>
                        </div>
                    )}
                    <div className='pl-32'>
                        <button
                            onClick={handleSubmit}
                            type="button"
                            className="w-24 px-4 py-2 bg-gray-300 text-white rounded-md text-md hover:bg-gray-500 transition-colors"
                        >
                            Register
                        </button>
                    </div>
                </form>

                <div className="flex justify-between gap-8">
                    <div className="flex-1">
                        <h2 className="font-semibold mb-4 text-xl">Activate your hub</h2>
                        <ol className="list-decimal list-inside space-y-2 text-md text-gray-900 pl-1">
                            <li>Turn on your hub</li>
                            <li>Connect your hub to internet</li>
                            <li>Waiting for pairing</li>
                            <li>Lorem ipsum dolor sit amet consectetur</li>
                            <li>Lorem ipsum dolor sit amet consectetur</li>
                            <li>Lorem ipsum dolor sit amet consectetur</li>
                            <li>Lorem ipsum dolor sit amet consectetur</li>
                            <li>Lorem ipsum dolor sit amet consectetur</li>
                        </ol>
                        <button className="mt-4 text-lg font-semibold text-gray-900 hover:text-gray-900">
                            Skip and Start
                        </button>
                    </div>

                    <div className="w-80 h-80 relative top-28">
                        <div className="flex gap-8 items-center justify-center p-8">
                            {!showRegistered && (
                                <div className="relative w-40 h-40">
                                    <div className="absolute w-full h-full rounded-full border-4 border-gray-200" />
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
                                <div className="relative w-40 h-40">
                                    <div className="absolute w-full h-full rounded-full border-4 border-gray-200" />
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
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Registration;
