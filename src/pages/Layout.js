import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import logoTanCang from '../logoTanCang.jpg';
import imgFooter from '../imgFooter.jpg';
import { FaSearch, FaBars, FaTimes, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { CiYoutube } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { SiZalo } from "react-icons/si";


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
                <div className="fixed top-0 z-50 shadow-md min-h-24 min-w-full bg-white flex justify-between text-[#4758ef] font-normal px-0 md:px-4 md:pr-12 lg:px-16">
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
                <div
                    className="relative min-h-[550px] min-w-full bg-cover bg-center overflow-hidden bg-no-repeat"
                    style={{
                        backgroundImage: `url(${imgFooter})`,
                        backgroundSize: 'cover', backgroundPosition: 'center',
                    }}

                >
                    <div className="absolute container md:flex justify-around top-8 px-4 md:top-20 md:px-16 flex-shrink">
                        <div className="text-white font-thin text-3xl md:text-6xl space-y-2 pb-4">
                            <p>Liên hệ với chúng tôi để </p>
                            <p>được cung cấp dịch vụ  </p>
                            <p>và cập nhật thông tin</p>
                        </div>
                        <div className='bg-white md:min-w-96 max-w-xl px-10 py-12 space-y-9 flex-grow flex-shrink rounded-xl'>
                            <input className='placeholder:italic placeholder:text-slate-400 block bg-slate-100 w-full py-3 pl-6 pr-3 shadow-sm 
                                focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder="Họ và tên *" type="text" name="hovaten">
                            </input>
                            <input className='placeholder:italic placeholder:text-slate-400 block bg-slate-100 w-full py-3 pl-6 pr-3 shadow-sm 
                                focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder="Tên công ty *" type="text" name="tencongty">
                            </input>
                            <input className='placeholder:italic placeholder:text-slate-400 block bg-slate-100 w-full py-3 pl-6 pr-3 shadow-sm 
                                focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder="Địa chỉ email *" type="text" name="diachiemail">
                            </input>
                            <input className='placeholder:italic placeholder:text-slate-400 block bg-slate-100 w-full py-3 pl-6 pr-3 shadow-sm 
                                focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder="Thông tin đăng ký *" type="text" name="thngtindangky">
                            </input>

                            <button
                                className='bg-[#4858EF] py-3 rounded-md w-full text-center text-lg leading-[23px] text-white font-bold'
                            >
                                Đăng ký
                            </button>
                        </div>
                    </div>

                </div>
                <div className='bg-white px-40'>

                    <div className='flex justify-between py-6'>
                        <div className='space-y-4'>
                            <img src={logoTanCang} alt="logoTanCang" className="h-16" />
                            <p className='pt-6'>phonghoatieu@saigonnewport.com.vn</p>
                            <p>470 Đồng Văn Cống, phường Thạnh Mỹ Lợi, Thủ Đức, TP. HCM</p>
                        </div>

                        <div className='space-y-4'>
                            <div className=''>
                                <select
                                    id="company"
                                    name="company"
                                    className="block min-w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                                >
                                    <option >Công ty Hoa Tiêu Tân Cảng</option>
                                    <option>Công ty Hoa Tiêu Tân Cảng 2</option>
                                    <option>Công ty Hoa Tiêu Tân Cảng 3</option>
                                </select>
                            </div>

                            <p className='pt-6 text-end' >Hotline: 028 37423565</p>
                            <p className='text-end'>Fax: (+84) 28.37423565</p>
                            <div className='inline-flex space-x-4 text-end items-end pl-10'>
                                <FaFacebookF className="text-[#4758ef]" />
                                <CiYoutube className="text-[#4758ef]" />
                                <FaInstagram className="text-[#4758ef]" />
                                <FaLinkedinIn className="text-[#4758ef]" />
                                <AiOutlineMail className="text-[#4758ef]" />
                                <SiZalo className="text-[#4758ef]" />
                            </div>
                        </div>
                    </div>

                    <div className='inline-flex space-x-4'>
                        <p>© Copyright 2023 – CÔNG TY TNHH MỘT THÀNH VIÊN HOA TIÊU TÂN CẢNG</p>
                        <p>Quy định & điều khoản</p>
                        <p>Chính sách bảo mật</p>
                        <p>Chính sách cookie</p>
                        <p>Sitemap</p>
                        <p>Tổng công ty</p>
                    </div>
                </div>
            </footer>
        </div>
    )
};

export default Layout;