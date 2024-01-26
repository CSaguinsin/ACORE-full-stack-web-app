import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import { auth } from '../../config/firebase'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const AdminPanel = () => {
  const {name} = useParams();
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState('');

  const handleLogout = () => {
    setLoggingOut(true); // Set the state to indicate logging out

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setTimeout(() => {
          setLoggingOut(false); // Set the state to indicate logout is done
          navigate("/");
        }, 2000); // Simulating a 2-second delay for demonstration (you can remove this in your actual implementation)
      })
      .catch((error) => {
        // Handle logout error
        setLoggingOut(false); // Set the state to indicate logout is done
        // Handle error accordingly
      });
  };


  useEffect(() => {
    
    const fetchUserData = async () => {
      try {
        const db = getFirestore();
        const users = collection(db, 'users');
        const q = query(peopleRef, where('name', '==', formattedName));
    
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          querySnapshot.forEach(async (doc) => {
            const personData = doc.data();
            try {
              const imageRef = ref(storage, personData.profilePictureRef);
              const imageUrl = await getDownloadURL(imageRef);
              const updatedPersonData = { ...personData, id: doc.id, profilePictureURL: imageUrl };
              setUserData(updatedPersonData);
              setComments(updatedPersonData.comments || []);
            } catch (error) {
              console.error('Error fetching image URL:', error);
              console.error('Fetched user data without image URL:', personData);
              setUserData({ ...personData, id: doc.id });
              setComments(personData.comments || []);
            }
          });
        } else {
          console.log('No data found for the provided name:', formattedName);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    if (name) {
      fetchUserData();
    }
  }, [name]);


  return (
<>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span className="sr-only">Open sidebar</span>
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      />
    </svg>
  </button>
  <aside
    id="default-sidebar"
    className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <img src={Logo} />
            
          </a>
        </li>
        <li>

        </li>
        <li>
          <Link to='/appointments'>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Appointments</span>

          </a>
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
          </a>
        </li>

        <li>
        <button onClick={handleLogout}>
          <a
            href="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
              />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>
          </a>
          </button>
        </li>

      </ul>
    </div>
  </aside>

  {userData && (
        <section className="container px-6 py-12 mx-auto">
          <div className="container px-6 py-12 mx-auto flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">First Name</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {userData.firstName || 'Loading...'}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Last Name</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {userData.lastName || 'Loading...'}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {userData.address || 'Loading...'}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Contact Number</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {userData.contact || 'Loading...'}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {userData.about || 'Loading...'}
                    </dd>
                  </div>
                </dl>
              </div>
              <h1>Works</h1>
              <div className='imageholder container px-6 py-12 mx-auto flex flex-col lg:flex-row'>
                {[1, 2, 3].map((index) => (
                  <React.Fragment key={index}>
                    <img
                      src={imageholderf}
                      className='imageholderf'
                      style={{ marginRight: '10px' }} // Adjust the margin value as needed
                    />
                  </React.Fragment>
                ))}
              </div>
              <Link to='/build-masters-hub'>
                <a href="#" className="inline-block">
                  <button className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                    <span className="font-medium text-[#333] group-hover:text-white">Back</span>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </section>
      )}

</>

  )
}

export default AdminPanel