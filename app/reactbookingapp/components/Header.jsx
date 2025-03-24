'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';  
import logo from '@/assets/images/logo.svg';
// import LoginPage from '@/app/login/page';
// import Register from '@/app/register/register';
import destroySession from '@/app/actions/destroySession';
import { toast } from 'react-toastify';


import {FaUser, FaSignOutAlt, FaSignInAlt, FaBuilding} from 'react-icons/fa';
const Header = () => {

  const router = useRouter();

  const handleLogout = async () => {
  const {success, error } = await destroySession();

    // await destroySession();

    if(success){
      router.push('/login');

    }else{
      toast.error(error);
    }
  };

    return ( <>
    
    <header className="bg-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image className="h-12 w-12" src={logo} alt="Bookit" priority={true} />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Rooms
                </Link>
                {/* <!-- Logged In Only --> */}
                <Link
                  href="/bookings"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Bookings
                </Link>
                <Link
                  href="/rooms/add"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                >
                  Add Room
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- Right Side Menu --> */}
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              {/* <!-- Logged Out Only --> */}
              <Link
                href="/login"
                className="mr-3 text-gray-800 hover:text-gray-600"
              >
                <FaSignInAlt className='mr-1 inline'/> Login
              </Link>
              <Link
                href="/register"
                className="mr-3 text-gray-800 hover:text-gray-600"
              >
                <FaUser className='mr-1 inline'/> Register
              </Link>
              <Link href="/rooms/my">
              <FaBuilding className='mr-1 inline'/> My Rooms
              </Link>
              <button
                onClick={handleLogout}
                className="mx-3 text-gray-800 hover:text-gray-600"
              >
                <FaSignOutAlt className='mr-1 inline'/> Sign Out
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Mobile menu --> */}
      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Rooms
          </Link>
          {/* <!-- Logged In Only --> */}
          <Link
            href="/bookings"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Bookings
          </Link>
          <Link
            href="/rooms/add"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Add Room
          </Link>
        </div>
      </div>
    </header>
    
    </> );
}
 
export default Header;