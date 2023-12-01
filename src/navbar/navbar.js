import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css'
import { useEffect, useState } from 'react';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    useEffect(()=>{
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        }
        window.addEventListener('resize', handleResize);
        return()=>{
            window.removeEventListener('resize', handleResize);
        }
    },[window.innerWidth]);

    const handleSidebarOpening=()=>{
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className='navbar-container'>
            <span className='name'>.keymii</span>
    
            <div className='sideBar'>{ isMobile?
                <div className='navbar-toggle' onClick={handleSidebarOpening}>
                        {sidebarOpen?<FontAwesomeIcon icon={faX} />:<FontAwesomeIcon icon={faBars}  />}
                    </div>:null}
                    {!isMobile || sidebarOpen?
                <div className='linkContainer'>
                    <div className='navbar-link'>Home</div>
                    <div className='navbar-link'>Link 2</div>
                    <div className='navbar-link'>Link 3</div>
                </div>:null}
            </div>
        </div>
    )
}
export default Navbar;