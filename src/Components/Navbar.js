import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FaDiceD20} from 'react-icons/fa'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Button} from './Button'
import Dropdown from './Dropdown'
import './Navbar.css'

function Navbar() {

    const [click ,setClick]= useState(false)
    const [button, setButton]= useState(true)
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () =>setClick(!click)
    const closeMobileMenu= ()=> setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(true);
        } else {
          setDropdown(true);
        }
      };
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

    const showButton= ()=>{
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true);
        }
    }
    window.addEventListener('resize',showButton)

    
    return (
        <>
        <div className='navbar'>
        <div className='navbar-container container'>
            
          <Link to='/' className='navbar-logo'>
          <FaDiceD20 className='navbar-icon'></FaDiceD20>
          PRIVILEGECAPITAL 
             </Link> 
             <div className='menu-icon' onClick={handleClick}>
             {click ?<FaTimes className='fa-bars'/>:<FaBars className='fa-bars'/>}
             </div>
             <div className='b-card'>
             <ul className={click ? 'nav-menu active': 'nav-menu'} onClick={closeMobileMenu}>
               <li className='nav-item'>
                   <Link to='/' className='nav-links'>Home</Link>
                </li>  
                <li className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                >
                   <Link to='/construction' className='nav-links' onClick={closeMobileMenu}>constructon</Link>
                   {dropdown && <Dropdown/>}
                   </li>  
                   <li className='nav-item'>
                   <Link to='/generalsupply' className='nav-links' onClick={closeMobileMenu}>GeneralSupply</Link>
                   </li>  
                   <li className='nav-item'  
                   >
                   <Link to='/about' className='nav-links'>About us</Link>
                  
                   </li>  
                   <li className='nav-item'>
                   <Link to='/contactUs' className='nav-links'>Contact us</Link>
                   </li> 
                   <li className='nav-btn'>
                    {button ?(
                        <Link to='/login' className='btn-link'>
                        <Button buttonStyle='btn--outline'>Login</Button>
                        </Link>
                    ):(
                        <Link to='/login' className='btn-link'>
                            <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Login</Button>
                        </Link>
                    )

                    }
                   </li>


             </ul>
             </div>
        </div> 
        </div>
        </>
    )
}

export default Navbar
