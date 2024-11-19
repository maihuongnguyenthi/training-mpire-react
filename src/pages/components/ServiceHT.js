import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const ServiceHT = () => {
  return (
    <div className="">
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Khu vực cảng*</label>
            <select className="w-full p-2 border rounded-lg bg-white">
              <option>Thành phố Hồ Chí Minh</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Khu vực cảng của các dịch vụ phải giống nhau
            </p>
          </div>

          <div>
            <label className="block text-sm mb-1">Tuyến yêu cầu hoa tiêu*</label>
            <select className="w-full p-2 border rounded-lg bg-white">
              <option>Tuyến đến và tuyến rời</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 text-blue-600 mb-4">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>Tuyến đến</span>
          </div>

          <div className="mb-4">
            <div className="text-sm mb-2">Tuyến tàu</div>
            <div className="flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input type="radio" name="route1" defaultChecked className="peer sr-only" />
                  <div className="w-5 h-5 border-2 rounded-full border-blue-600 peer-checked:border-blue-600 peer-checked:after:block after:hidden after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-blue-600 after:rounded-full" />
                </div>
                <span>Quốc tế</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input type="radio" name="route1" className="peer sr-only" />
                  <div className="w-5 h-5 border-2 rounded-full border-gray-300 peer-checked:border-blue-600 peer-checked:after:block after:hidden after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-blue-600 after:rounded-full" />
                </div>
                <span>Nội địa</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Tuyến đến*</label>
              <select className="w-full p-2 border rounded-lg bg-gray-50">
                <option>Chọn</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Luồng*</label>
              <select className="w-full p-2 border rounded-lg bg-gray-50">
                <option>Chọn</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Vị trí đón*</label>
              <select className="w-full p-2 border rounded-lg bg-gray-50">
                <option>Chọn</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Vị trí trả*</label>
              <select className="w-full p-2 border rounded-lg bg-gray-50">
                <option>Chọn</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Ngày*</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg bg-gray-50"
                  placeholder="Chọn"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Giờ*</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg bg-gray-50"
                  placeholder="Chọn"
                />
                <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 text-blue-600 mb-4">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>Tuyến rời</span>
          </div>

          <div className="mb-4">
            <div className="text-sm mb-2">Tuyến tàu</div>
            <div className="flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input type="radio" name="route2" className="peer sr-only" />
                  <div className="w-5 h-5 border-2 rounded-full border-gray-300 peer-checked:border-blue-600 peer-checked:after:block after:hidden after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-blue-600 after:rounded-full" />
                </div>
                <span>Quốc tế</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input type="radio" name="route2" defaultChecked className="peer sr-only" />
                  <div className="w-5 h-5 border-2 rounded-full border-blue-600 peer-checked:border-blue-600 peer-checked:after:block after:hidden after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-blue-600 after:rounded-full" />
                </div>
                <span>Nội địa</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Cảng rời*</label>
              <select className="w-full p-2 border rounded-lg bg-gray-50">
                <option>Chọn</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Luồng*</label>
              <select className="w-full p-2 border rounded-lg bg-gray-50">
                <option>Chọn</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Vị trí đón*</label>
              <select className="w-full p-2 border rounded-lg bg-gray-50">
                <option>Chọn</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Vị trí trả*</label>
              <select className="w-full p-2 border rounded-lg bg-gray-50">
                <option>Chọn</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Ngày*</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg bg-gray-50"
                  placeholder="Chọn"
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Giờ*</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg bg-gray-50"
                  placeholder="Chọn"
                />
                <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHT;