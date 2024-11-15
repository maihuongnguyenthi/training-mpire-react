import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center flex items-center overflow-hidden bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `url('https://s3-alpha-sig.figma.com/img/30ab/9054/6f99b7857bb70a663cc1ae5d47adc300?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NB5xIBHc5dcj11M8eYO6bdSojkZ3X-Djqklvzs3yL~U47sG4OJF8Z7wkRSQbVJXFPeiAKu0zyGPQ1KgHNQnb43T-OHeaZr1PzKVrofX4kucN3n86p0rxT42wECqkXQ3sg~KmG0oSLQrVSuuLrhc-ZHGEaJFUiWtDGlRXVD0jAoiVtJsNzUJ-kaR06znZcIEtv1Qv-1OaEXe7zLLibgHzIqUVcKK7bl5q3Y0XkNyaqc4JN9XcZAML~YDqvy1sfNo4ca8dyW5xANrCcg~GEQTmQCZcoh~~NimbY6s69qZDuW7fAKKA3sya7Vp-76d1PDZbThMRgVvpGHDqnaVCYltVgA__')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}
    >
      <div className=" inset-0 bg-black opacity-50"></div>

      <div className="text-white max-w-[891px] mx-auto">
        <img src={logo} alt="Logo" className="mb-[20px] w-24 h-24" />
        <div className="w-[891px] text-white text-[90px] font-medium font-['Helvetica Neue LT Pro']]">Welcome to<br />Advanced Flow</div>
        <div className="text-white text-2xl font-medium font-['Helvetica Neue LT Pro'] ">Please log in to continue</div>
        <Link to="/register" className="px-4 mt-5 inline-block py-3 min-w-32 rounded-[10px] w-32  border border-white text-center text-white text-lg font-medium font-['Helvetica Neue LT Pro'] ">
          Log in
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
