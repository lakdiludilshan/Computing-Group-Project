import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import toast from "react-hot-toast"

const Navbar = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [search, setSearch] = useState('');

    // toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem('jwt'); // Remove token from local storage
        setIsAuthenticated(false); // Update authentication state
        navigate("/");
        toast.success("Loggin out",{
            duration:3000,
            position:"top-right"
        })
        location.realod()
    };

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            setIsAuthenticated(true);
        }
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-10'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* logo */}
                    <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                        <FaBlog className='inline-block' />Books
                    </Link>

                    {/* nav item for large devices */}
                    <ul className='md:flex space-x-6 hidden'>
                        {isAuthenticated && isAuthenticated? <div className='flex md:space-x-6 items-center justify-center'>
                            <Link to="/" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700  px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150'>Home</Link>
                            <Link to="/shop" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700  px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150'>Shop</Link>
                            <Link to="/about" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700  px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150'>About</Link>
                            <Link to="/admin/dashboard" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700  px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150'>Sell Your Book</Link>
                            <Link  className='block text-base text-black uppercase cursor-pointer hover:text-blue-700  px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150' onClick={handleLogout}>LogOut</Link>
                        </div>   :<div className='flex md:space-x-6'>
                            <Link to="/" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700  px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150'>Home</Link>
                            <Link to="/shop" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700  px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150'>Shop</Link>
                            <Link to="/about" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700  px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150'>About</Link>
                            <Link to="/admin/dashboard" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700  px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150'>Sell Your Book</Link>
                            <Link to="/signIn" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700  px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150'>SignIn</Link>
                        </div>}
                    </ul>

                    {/* btn for lg devices */}
                    <div className='space-x-12 hidden md:flex items-center'>
                        <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
                    </div>

                    {/* menu btn for mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>
                            }
                        </button>
                    </div>
                </div>

                {/* navitems for sm devices*/}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0 md:hidden" : "hidden"}`}>
                <div className='flex justify-center items-center'>
                {isAuthenticated && isAuthenticated? <div className='flex md:space-x-12 flex-column space-y-6'>
                            <Link to="/" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150 '>Home</Link>
                            <Link to="/shop" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150 '>Shop</Link>
                            <Link to="/about" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150 '>About</Link>
                            <Link to="/admin/dashboard" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150 '>Sell Your Book</Link>
                            <Link  className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150 ' onClick={handleLogout}>LogOut</Link>
                        </div>   :<div className='flex md:space-x-12 flex-column space-y-6'>
                            <Link to="/" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150 '>Home</Link>
                            <Link to="/shop" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150 '>Shop</Link>
                            <Link to="/about" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150 '>About</Link>
                            <Link to="/admin/dashboard" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150 '>Sell Your Book</Link>
                            <Link to="/signIn" className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 px-4 py-2 rounded-lg hover:bg-red-300 hover:ease-in hover:duration-150 '>SignIn</Link>
                        </div>}
                </div>
                </div>
                {/* search bar */}
                <div className='flex items-center justify-between w-[60%] mx-auto gap-2'>
                    <input type="text" placeholder='Search for books' className='flex-1 px-4 py-2 rounded-lg focus:outline-none border border-black' onChange={
                        (e)=>setSearch(e.target.value)
                    }/>
                    <button className='bg-blue-700 text-white px-4 py-2 border-black rounded-lg' onClick={
                        ()=>navigate(`/shop?q=${search}`)
                    }>Search</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
