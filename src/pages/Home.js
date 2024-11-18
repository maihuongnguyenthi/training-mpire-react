import { SlArrowRight } from "react-icons/sl";
import { FaAddressCard, FaBitcoin, FaAddressBook } from "react-icons/fa";

const Home = () => {
  return (
    <div className="mt-24 px-28 bg-[#f0f8ff]">

      <div className=" py-10 flex space-x-3 text-gray-500 ">
        <p className="text-[#4758ef]">Trang chủ</p>
        <div className="py-1">
          <SlArrowRight className="w-3 h-3 font-normal " />
        </div>
        <p>Báo giá</p>
      </div>

      <div className="flex space-x-6 justify-center">
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

        <p className="text-[#00327d] text-center text-2xl pb-6">BÁO GIÁ DỊCH VỤ</p>

        <div className="w-full bg-white space-y-8 p-12 ">
          <input className=' placeholder:text-red-400 placeholder:text-lg
           block w-full py-3 pr-3 border-b-2 border-red-400
        focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder="Thông tin tàu" type="text" name="hovaten">
          </input>

          <div className="flex justify-between space-x-24">
            <div className=" flex-grow">
              <label htmlFor="username" className="block text-md font-medium text-gray-400 py-1">
                Quốc tịch *
              </label>
              <input className='placeholder:text-gray-400 block bg-slate-100 w-full py-3 pl-6 pr-3 shadow-sm 
    focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder="Chọn" type="text" name="hovaten">
              </input>
            </div>

            <div className=" flex-grow">
              <label htmlFor="username" className="block text-md font-medium text-gray-400 py-1">
                Trọng tải (mt)*
              </label>
              <input className='placeholder:text-gray-400 block bg-slate-100 w-full py-3 pl-6 pr-3 shadow-sm 
    focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' placeholder="Nhập thông tin" type="text" name="hovaten">
              </input>
            </div>
          </div>

        </div>

        <div className="w-full bg-white space-y-8 p-12 ">
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm/6">
              <label htmlFor="comments" className="font-medium text-[#00327d] ">
                Dịch vụ hoa tiêu
              </label>
            </div>
          </div>
        </div>

        <div className="w-full bg-white space-y-8 p-12 ">
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm/6">
              <label htmlFor="comments" className="font-medium text-[#00327d] ">
                Dịch vụ dịch chuyển tàu
              </label>
            </div>
          </div>
        </div>

        <p className="text-red-600">Vui lòng chọn ít nhất một dịch vụ. </p>

        <div className="w-full flex justify-center pb-24">
          <button
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