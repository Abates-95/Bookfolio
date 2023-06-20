import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { User, signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const Navigate = useNavigate();

  useEffect(() => {
    const logOut = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => logOut();
  }, []);

  const signOutOnClick = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        Navigate('/');
      })
      .catch((error) => {
        console.log('Sign out error:', error);
      });
  };

  const signInOnClick = async () => {
    try {
      const response = await signInWithPopup(auth, Providers.google);
      if (response.user) {
        setUser(response.user);
        Navigate('/');
      }
    } catch (error) {
      console.log('Sign in error:', error);
    }
  };

  return (
    <nav className='flex flex-row justify-between items-center'>
      <div>
        <Link to='/' className=' bg-[#23d5ab] border-[#E73C7E] border-double border-8 font-semibold text-4xl tracking-tight text- text-[#E73C7E] p-2 m-5 underline'>
          Bookfolio
        </Link>
      </div>
      <div className='flex'>
        <button className='border-4 border-[#E73C7E] p-2 m-5 text-2xl bg-[#23d5ab] justify-center hover:bg-[#E73C7E] rounded'>
          <Link to='/' className='flex place-items-center text-[#E73C7E] hover:text-[#23d5ab]'>
            Home
          </Link>
        </button>
        <button className='border-4 border-[#E73C7E] p-2 m-5 text-2xl bg-[#23d5ab] justify-center hover:bg-[#E73C7E] rounded'>
          <Link to='/about' className='flex place-items-center text-[#E73C7E] hover:text-[#23d5ab]'>
            About
          </Link>
        </button>
        {!user ? (
          <button className='border-4 border-[#E73C7E] p-2 m-5 text-2xl bg-[#23d5ab] justify-center hover:bg-[#E73C7E] rounded'>
            <div>
              <Link to='/' onClick={signInOnClick} className='flex place-items-center text-[#E73C7E] hover:text-[#23d5ab]'>
                Login
              </Link>
            </div>
          </button>
        ) : (
          <>
            <button className='border-4 border-[#E73C7E] p-2 m-5 text-2xl bg-[#23d5ab] justify-center hover:bg-[#E73C7E] rounded'>
              <div>
                <Link to='/' onClick={signOutOnClick} className='flex place-items-center text-[#E73C7E] hover:text-[#23d5ab]'>
                  Logout
                </Link>
              </div>
            </button>
            <button className='border-4 border-[#E73C7E] p-2 m-5 text-2xl bg-[#23d5ab] justify-center hover:bg-[#E73C7E] rounded'>
              <Link to='/dashboard' className='flex place-items-center text-[#E73C7E] hover:text-[#23d5ab]'>
                Dashboard
              </Link>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


