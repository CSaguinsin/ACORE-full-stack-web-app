import React from 'react'
import '../components/Styles.css'

const Location = () => {
  return (
    <>
<section id='location' className='pt-10 pb-10'>
          <div>
            <h1 className="pt-10 dark:text-white justify-center text-center my-4 servicetitle sm:justify-center">
                Our Location
            </h1>
          </div>

    <div style={{ width: "100%" }}>
      <iframe
        width="100%"
        height={600}
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=241%20Governor's%20Drive%20Langkaan%201%204114%20Dasmari%C3%B1as,%20Philippines+(A%20Core%20Lying%20In)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
      >
        &lt;a href="https://www.maps.ie/population/"&gt;Population mapping&lt;/a&gt;
      </iframe>
    <p className='paragph'>241 Governor’s Drive Langkaan 1, 4114 Dasmariñas City, Cavite</p>
    </div>
</section>
    </>
  )
}

export default Location