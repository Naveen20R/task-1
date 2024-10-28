import React, { useEffect, useState } from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import AOS from 'aos';
import "./styles/homeStyleNew.css";
import "./styles/footerStyle.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import GlobeComponent from './components/GlobeComponent';



function App() {
  const [visibleWave, setVisibleWave] = useState(1);


  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
      AOS.init();
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWave((prevWave) => (prevWave + 1) % 4); // Cycle through waves 0, 1, 2
    }, 60000); // 800ms interval

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  console.log(visibleWave, 'visibleWave');


  return (
    <>

      {/* npm install three three-globe */}
      {/* https://globe.gl/ */}

      <div className="banner-parent">
        <div className="banner-whole-set">
          <div class="wave-parent">
            <Navbar />
            <div id={`wave-${visibleWave}`}></div>
            {
              visibleWave == 1 && (
                <div id={`wave-${visibleWave + 1}`}></div>

              )
            }
            {
              visibleWave == 2 && (

                <div id={`wave-${visibleWave + 1}`}></div>
              )
            }

            {
              visibleWave == 3 && (

                <div id={`wave-${visibleWave - 2}`}></div>
              )
            }
            <div id="triangle-bottomright" ></div>
          </div>
          <div className="container">
            <div className="row banner-content">
              <div className="col-12 my-auto col-md-12 col-lg-6">
                <div className="left-content">
                  <div className="banner-note-parent">
                    <h6 className='banner-note'>Invite only</h6>
                  </div>
                  <h1 className='banner-title my-4'>Financial infrastructure to grow your revenue</h1>
                  <p className='banner-desc'>Join the millions of companies of all sizes that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.</p>
                  <div className="row">
                    <div className="col">
                      <a className="right-arrow banner-btn px-2 py-2" aria-current="page" href="#">
                        <span className='px-1'>Request an invite</span>
                        <span className='second-span'>
                          <IoIosArrowForward className='right-arrow-icon' />
                          <IoMdArrowRoundForward className='right-arrow-icon-full' />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 my-auto col-md-12 col-lg-6">
                <div className="right-content">
                  <img className='w-100 h-100' src="/image/prife-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid footer mt-5">
        <div id="triangle-bottomright-2" ></div>
        <div className="container mt-5">
          <div className="row py-5 ">
            <div className="col-12 footer-content col-md-12 col-lg-6">
              <div className="">
                <h4 className='footer-title-1'>Global Scale</h4>
                <h2 className='footer-title-2'>The backbone for global commerce</h2>
                <p className='footer-desc'>Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.</p>
              </div>
              <div className="row my-5">
                <div className="col-12 col-md-6 col-md-3 my-3">
                  <div className="footer-card">
                    <h2>500M+</h2>
                    <p>API requests per day,peaking at 13,000 requests a second.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-md-3 my-3">
                  <div className="footer-card">
                    <h2>99.999%</h2>
                    <p>historical uptime for Stripe services.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-md-3 my-3">
                  <div className="footer-card">
                    <h2>47+</h2>
                    <p>Countries with local acquiring</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-md-3 my-3">
                  <div className="footer-card">
                    <h2>135+</h2>
                    <p>currencies and payment methods supported.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="glob-container">
                <GlobeComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;