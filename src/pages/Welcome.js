import logo from '../images/logo.svg';
import backgroundImageWelCome from '../images/backgroundImageWelCome.jpg'
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div
      className="backdrop-brightness-50 relative min-h-screen w-full 
       bg-cover bg-center flex items-center overflow-hidden bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImageWelCome})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}

    >
      <div className="container font-helvetica font-medium">
        <div className="text-white px-16 md:px-48 lg:px-80 space-y-8 font-medium">
          <img src={logo} alt="Logo" className="mb-md w-32 h-24" />
          <div className="text-5xl md:text-7xl lg:text-8xl">Welcome to<br />Advanced Flow</div>
          <div className="pt-4 text-2xl">Please log in to continue</div>
          <Link to="/register" className="px-4 mt-5 inline-block py-3 min-w-32 rounded-[10px] w-32  border border-white text-center text-white text-lg">
            Log in
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Welcome;
