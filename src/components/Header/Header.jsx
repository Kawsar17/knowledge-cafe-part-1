import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h1 className='text-6xl font-bold bg-red-300'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;