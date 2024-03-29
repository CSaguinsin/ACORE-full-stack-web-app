import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase'; // Import your Firebase configuration
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/Styles.css';


const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    about: '',
  });

  const [imgUrl, setImgUrl] = useState([]);

  const handleInputChange = (e, field) => {
    const value = e.target.value;

    // Update the form data state
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    uploadImage(file);
  };

  const uploadImage = (image) => {
    const imgRef = ref(imageDb, `files/${v4()}`);
    uploadBytes(imgRef, image).then((value) => {
      getDownloadURL(value.ref).then((url) => {
        setImgUrl((data) => [...data, url]);
        setFormData({
          ...formData,
          fileURL: url, // Store the file URL in formData
        });
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add user data to Firestore as a new document
      await addUserDataToFirestore(formData);

      // Reset form data after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        contactNumber: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
        about: '',
        services: '',
      });
      alert('Maraming Salamat!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('An error occurred while submitting data.');
    }
  };

  const addUserDataToFirestore = async (userData) => {
    const usersCollection = collection(db, 'users');
    await addDoc(usersCollection, userData);
  };

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );


  return (
    <>
    <Navbar />
    <div className='pt-20'>
        <h1 className="pt-10 dark:text-white justify-center text-center my-4 servicetitle sm:justify-center">
          MAKE AN APPOINTMENT NOW!
        </h1>
        <p className='paragph2 justify-center text-center'>
        Regular health appointments with a primary care physician are crucial for maintaining optimal well-being. These check-ups not only help detect and manage potential health issues but also promote preventive care. Whether it's an annual physical or follow-up consultations, these appointments contribute to a holistic understanding of one's health and aid in early detection of any concerns, establishing a foundation for proactive healthcare management.
        </p>
    </div>

<div className='pl-8 pr-8'>
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange(e, 'firstName')}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange(e, 'lastName')}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                 value={formData.contactNumber}
                 onChange={(e) => handleInputChange(e, 'contactNumber')}
                  id="email"
                  name="email"
                  type="number"
                  autoComplete="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Street address
              </label>
              <div className="mt-2">
                <input
                   value={formData.address}
                  onChange={(e) => handleInputChange(e, 'address')}
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <input
                  value={formData.city}
                  onChange={(e) => handleInputChange(e, 'city')}
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  value={formData.province}
                  onChange={(e) => handleInputChange(e, 'province')}
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange(e, 'postalCode')}
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  


      <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Reason of your clinic appointment
              </label>
              <div className="mt-2">
                <textarea
                                  value={formData.about}
                                  onChange={(e) => handleInputChange(e, 'about')}
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </div>
    </form>
    </div>
    <Footer />
    </>
  )
}

export default Booking