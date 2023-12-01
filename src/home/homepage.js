import "./homepage.css";
import React, { useState, useEffect, useRef } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'

let maskPath="M23.8,-25.5C31.2,-22.1,37.8,-15,39.5,-6.7C41.3,1.6,38.3,10.9,33.5,19.5C28.7,28,22.2,35.6,14.4,37.7C6.5,39.8,-2.8,36.4,-11.4,32.7C-20.1,29,-28.2,25,-31.9,18.5C-35.6,11.9,-35,2.9,-32.1,-4.3C-29.2,-11.5,-24,-17,-18.3,-20.7C-12.5,-24.4,-6.3,-26.3,1,-27.4C8.2,-28.6,16.4,-28.9,23.8,-25.5Z"

function Homepage() {
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const shadowRef = useRef(null);
    const shadowPosition = {x:43, y:43};
    // const [centerX,setCenterX] = useState(0);
    // const [centerY,setCenterY] =  useState(0);
    // const [shadowPosition, setShadowPosition] = useState({x:0, y:0});

    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         const { left, top, width, height } = shadowRef.current.getBoundingClientRect();
    //         const centerX = left + width / 2;
    //         const centerY = top + height / 2;

    //         setMousePosition({ x: e.clientX, y: e.clientY });
    //         var shadowY = Math.max(Math.min(e.clientY-centerY,12),-12);
    //         var shadowX = Math.max(Math.min(e.clientX-centerX,12),-12);
    //         var circleFitFactor = ((shadowX**2 + shadowY**2)**0.5)/12;
    //         // if (circleFitFactor>2){
    //             shadowX = 12;
    //             shadowY = 12;
    //         // }
    //         setShadowPosition({x:shadowX, y:shadowY});
    //     };



    //     document.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         document.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);
    

  return (
    <div className="homepage">
        <div>
            <div className="firstlevel">
                <div className="left">
                    CONTENT ON ITS WAY...
                </div>
                <div className="right">
                    <div>
                    <div className="masked-image" ref={shadowRef} >
                        <svg
                        id="sw-js-blob-svg"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <mask id="profilemask" mask-type="alpha">
                            <path
                            d={maskPath}
                            transform="translate(50 50)"
                            ></path>
                        </mask>
                        <g mask="url(#profilemask)">
                            <path
                            d={maskPath}
                            transform="translate(50 50)"
                            ></path>
                            <image href="me.jpg" className="profileImage" x="-80"  y="5"  />
                        </g>
                        </svg>
                    </div>
                    <div className="small">Hi! my name is,</div>
                        <div className="big">
                            <div className="name">
                                <div className="firstname">Abhijat</div> <div className="lastname">Bharadwaj</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scrollDown">
            <FontAwesomeIcon icon={faCircleDown} />
            </div>
        </div>
    </div>
  );
}
export default Homepage;