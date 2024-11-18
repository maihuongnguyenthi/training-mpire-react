import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import logoTanCang from '../logoTanCang.jpg';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Layout = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggle = () => {
        setIsToggled(prevState => !prevState);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return (
        <div>
            <header>
                <div className="min-h-24 bg-white flex justify-between text-[#4758ef] font-normal px-0 md:px-4 lg:px-16">
                    <ul className="my-auto">
                        <li className="">
                            <img src={logoTanCang} alt="logoTanCang" className=" h-16" />
                        </li>
                    </ul>
                    <ul className="hidden md:inline-flex m-auto space-x-16">
                        <li className="">Giới thiệu</li>
                        <li className="">Dịch vụ</li>
                        <li className="">Tin tức</li>
                        <li className="">Thư viện</li>
                        <li className="">Hỗ Trợ</li>
                    </ul>
                    <ul className="my-auto space-x-4 hidden md:inline-flex">
                        <li className="">
                            <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full shadow-md cursor-pointer hover:bg-gray-200">
                                <FaSearch className="text-gray-400 text-sm font-thin" />
                            </div>
                        </li>
                        <li className="flex justify-center m-auto">
                            <div
                                onClick={handleToggle}
                                className={`w-16 h-6 flex items-center bg-gray-100 rounded-full shadow-md px-1 cursor-pointer hover:bg-gray-200 transition-colors relative`}
                            >
                                <div
                                    className={`w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md transition-transform transform 
                                    ${isToggled ? 'translate-x-8' : 'translate-x-0'}`}
                                ></div>
                                <div
                                    className={`absolute justify-end ml-[20px] flex items-center px-3 text-gray-600 text-sm font-medium`}
                                >
                                    {isToggled ? 'EN' : 'VN'}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="my-auto inline-flex md:hidden">
                        <li className="">
                            <button
                                onClick={toggleMenu}
                                className="w-10 h-16 flex items-center justify-center cursor-pointer"
                            >
                                {isMenuOpen ? <FaTimes className="text-gray-600" /> : <FaBars className="text-[#4758ef]" />}
                            </button>

                        </li>
                    </ul>
                </div>
            </header>

            <Outlet />

            <footer>
                <div className=''>
                    <div className="text-white font-normal">
                        Liên hệ với chúng tôi để được cung cấp dịch vụ và cập nhật thông tin
                    </div>
                    <div>form</div>
                </div>
                <div className='bg-white'>
                    <div className=''>
                        <div className=''>

                        </div>
                        <div className=''>

                        </div>
                    </div>
                    <div className=''>

                    </div>
                </div>
            </footer>
        </div>
    )
};

export default Layout;