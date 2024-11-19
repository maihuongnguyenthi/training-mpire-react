import { SlArrowRight } from "react-icons/sl";
import { FaAddressCard, FaBitcoin, FaAddressBook } from "react-icons/fa";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import ServiceHT from './components/ServiceHT';
import ServiceCT from './components/ServiceCT';

const Home = () => {
  const [services, setServices] = useState({
    hoaTieu: false,
    dichChuyen: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceChange = (serviceName) => {
    setServices(prev => ({
      ...prev,
      [serviceName]: !prev[serviceName]
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  return (
    <div className=" mt-24 px-0 md:px-28 bg-[#f0f8ff] min-w-full ">

      <div className="px-2 md-px-0 py-10 flex space-x-3 text-gray-500 ">
        <p className="text-[#4758ef]">Trang chủ</p>
        <div className="py-1">
          <SlArrowRight className="w-3 h-3 font-normal " />
        </div>
        <p>Báo giá</p>
      </div>

      <div className="flex space-x-6 justify-center px-2">
        <div className="space-y-3">
          <div className="w-10 h-10 flex mx-auto items-center justify-center bg-[#4758ef] rounded-full shadow-md cursor-pointer hover:bg-gray-200">
            <FaAddressCard className="text-white text-xl font-thin" />
          </div>
          <p>Thông tin yêu cầu</p>
        </div>

        <div className=" w-32 mt-6 border-t-2 border-y-1 border-gray-400"></div>

        <div className="space-y-3">
          <div className="w-10 h-10 flex mx-auto items-center justify-center bg-[#4758ef] rounded-full shadow-md cursor-pointer hover:bg-gray-200">
            <FaBitcoin className="text-white text-xl font-thin" />
          </div>
          <p>Thông tin yêu cầu</p>
        </div>

        <div className=" w-32 mt-6 border-t-2 border-y-1 border-gray-400"></div>

        <div className="space-y-3">
          <div className="w-10 h-10 flex mx-auto items-center justify-center bg-[#4758ef] rounded-full shadow-md cursor-pointer hover:bg-gray-200">
            <FaAddressBook className="text-white text-xl font-thin" />
          </div>
          <p>Thông tin yêu cầu</p>
        </div>
      </div>

      <div className="py-10 space-y-8">
        <h1 className="text-2xl text-blue-500 font-medium text-center mb-12">Báo giá dịch vụ</h1>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <input className=' placeholder:text-red-500 placeholder:text-lg mb-6
           block w-full py-3 pr-3 border-b-2 border-red-500
        focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder="Thông tin tàu" type="text" name="hovaten">
          </input>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">
                Quốc tích<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md appearance-none">
                  <option>Chọn</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">
                Trọng tải (mt)<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập thông tin"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="max-w-full bg-white p-4">
          <div className="flex items-center justify-between p-4 cursor-pointer">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                defaultChecked
                checked={services.hoaTieu}
                onChange={() => handleServiceChange('hoaTieu')}
              />
              <span className="text-blue-600 font-medium">Dịch vụ hoa tiêu</span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
          <div className={!isSubmitted || !services.hoaTieu ? 'hidden' : ''}>
            <ServiceHT />
          </div>
        </div>

        <div className="max-w-full bg-white p-4">
          <div className="flex items-center justify-between p-4 cursor-pointer">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                defaultChecked
                checked={services.dichChuyen}
                onChange={() => handleServiceChange('dichChuyen')}
              />
              <span className="text-blue-600 font-medium">Dịch vụ dịch chuyển tàu</span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
          <div className={!isSubmitted || !services.dichChuyen ? 'hidden' : ''}>
            <ServiceCT />
          </div>
        </div>

        {isSubmitted && !services.hoaTieu && !services.dichChuyen && (
          <p className="text-red-600">Vui lòng chọn ít nhất một dịch vụ.</p>
        )}

        <div className="w-full flex justify-center pb-24">
          <button
            onClick={handleSubmit}
            className='bg-[#4858EF] py-3 rounded-md min-w-80 text-center text-lg leading-[23px] text-white font-bold'
          >
            Báo giá dự kiến
          </button>
        </div>

      </div>

    </div>
  );
};

export default Home;