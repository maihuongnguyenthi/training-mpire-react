import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import logoTanCang from '../images/logoTanCang.jpg';
import imgFooter from '../images/imgFooter.jpg';
import { FaSearch, FaBars, FaTimes, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Mail, MapPin } from 'lucide-react';
import { CiYoutube } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { Link } from 'react-router-dom';


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
                        <li>Giới thiệu</li>
                        <li>Dịch vụ</li>
                        <li>Tin tức</li>
                        <li>Thư viện</li>
                        <li>Hỗ Trợ</li>
                    </ul>
                    <ul className="my-auto space-x-4 hidden md:inline-flex">
                        <li>
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
                    className="relative min-h-[650px] md:min-h-[550px] min-w-full bg-cover bg-center overflow-hidden bg-no-repeat"
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
                <div className='bg-white px-0 md:px-40'>
                    <div className=" mx-auto px-4 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                            <div className="flex flex-col space-y-2">
                                <img src={logoTanCang} alt="logoTanCang" className="h-16 w-40" />
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-5 w-5 text-blue-500" />
                                    <a href="mailto:phonghoatieu@saigonnewport.com.vn" className="text-gray-600 hover:text-blue-500">
                                        phonghoatieu@saigonnewport.com.vn
                                    </a>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                                    <span className="text-gray-600">
                                        470 Đồng Văn Cống, phường Thạnh Mỹ Lợi, Thủ Đức, TP. HCM
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-2">
                                <div className="flex justify-end space-x-4">
                                    <div className='min-w-full flex-grow'>
                                        <select className="w-full p-2 border rounded-md">
                                            <option>Công ty hoa tiêu tân cảng </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex md:justify-end space-x-4">
                                    <div className="text-blue-600">
                                        Hotline: <a href="tel:02837423565" className="hover:underline">028 37423565</a>
                                    </div>
                                </div>
                                <div className="flex md:justify-end space-x-4">
                                    <div className="text-blue-600">
                                        Fax: <span>(+84) 28.37423566</span>
                                    </div>
                                </div>
                                <div className="flex md:justify-end space-x-4">
                                    <Link href="#" className="text-blue-500 hover:text-blue-700">
                                        <FaFacebookF className="text-[#4758ef]" />
                                    </Link>
                                    <Link href="#" className="text-red-500 hover:text-red-700">
                                        <CiYoutube className="text-[#4758ef]" />
                                    </Link>
                                    <Link href="#" className="text-pink-500 hover:text-pink-700">
                                        <FaInstagram className="text-[#4758ef]" />
                                    </Link>
                                    <Link href="#" className="text-blue-700 hover:text-blue-900">
                                        <FaLinkedinIn className="text-[#4758ef]" />
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-gray-700">
                                        <AiOutlineMail className="text-[#4758ef]" />
                                    </Link>
                                    <Link href="#" className="text-blue-400 hover:text-blue-600">
                                        <SiZalo className="text-[#4758ef]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t">
                        <div className="container mx-auto px-4 py-4">
                            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-sm text-gray-600">
                                <div>
                                    © Copyright 2023 - CÔNG TY TNHH MỘT THÀNH VIÊN HOA TIÊU TÂN CẢNG
                                </div>
                                <div className="flex flex-wrap justify-center md:justify-end gap-4">
                                    <Link href="#" className="hover:text-blue-500">Quy định & điều khoản</Link>
                                    <Link href="#" className="hover:text-blue-500">Chính sách bảo mật</Link>
                                    <Link href="#" className="hover:text-blue-500">Chính sách cookie</Link>
                                    <Link href="#" className="hover:text-blue-500">Sitemap</Link>
                                    <Link href="#" className="hover:text-blue-500">Tổng công ty</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
};

export default Layout;