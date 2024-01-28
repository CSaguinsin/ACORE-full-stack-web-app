import React from 'react'
import Logo from '../assets/logo.png'
import picture1 from '../assets/picture1.jpg'
import picture2 from '../assets/picture2.jpg'
import picture3 from '../assets/picture3.jpg'
import picture4 from '../assets/picture4.jpg'
import assetLogin from '../assets/assetLogIn.jpg'

const products = [
    {
      id: 1,

      imageSrc: picture1,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      imageSrc: picture2,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 4,
      imageSrc: picture4,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
const About = () => {
  return (
<>
<section id='about' className="flex items-center  xl:h-screen font-poppins  ">
  <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
    <div className="flex flex-wrap ">
      <div className="w-full px-4 lg:w-1/2 lg:mb-0">
        <div className="relative lg:max-w-md">
          <img
            src={Logo}
            alt="aboutimage"
            className="relative z-10 object-cover w-full "
          />
          <div className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
            <p className="paragph text-lg font-semibold md:w-72">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
              </svg>{" "}
              Successfully Providing Health Care since 2010
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
        <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
          <h1 className="paragph mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
            About Us
          </h1>
        </div>
        <p className="paragph mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
        Welcome to A Core Maternity Lying In, your dedicated maternity lying-in center. We prioritize the well-being of expectant mothers and their families, providing comprehensive and compassionate care. Our experienced team ensures a positive birthing experience through open communication and individualized attention. From antenatal care to a state-of-the-art birthing facility, we emphasize safety and comfort. Postpartum support and a commitment to excellence in maternity care define our services. For questions or to schedule a visit, contact us. Your trusted partner in the journey to parenthood.
        </p>
      </div>
    </div>
  </div>
</section>
<div className="flex justify-center items-center h-full sm:flex">
  <div className="max-w-2xl px-4 lg:max-w-7xl">
    <div className="flex justify-center  grid-cols-1 gap-x-6 gap-y-10 sm:flex lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <a key={product.id} href={product.href} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-100 w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
        </a>
      ))}
    </div>
  </div>
</div>


</>
  )
}

export default About