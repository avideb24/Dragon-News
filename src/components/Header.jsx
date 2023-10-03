
import moment from 'moment/moment';
import logo from '../images/logo.png'

const Header = () => {
    return (
        <div className='text-center space-y-2 py-8'>
            <img className='max-w-md mx-auto' src={logo} alt="" />
            <p className='text-[#706F6F] text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-[#494747] text-xl'> <span className='text-black font-medium'>{moment().format(`dddd`)}</span> {moment().format(`MMMM D YYYY`)}</p>
        </div>
    );
};

export default Header;