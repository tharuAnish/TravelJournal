import './navbar.style.css'
import { IoMdGlobe } from 'react-icons/io';

export default function Navbar (){
    return(
        <div>
            <div className='navbar'>
                <IoMdGlobe className='nav-logo'/>
                <h1 className='nav-text'>my travel journal.</h1>
            </div>
        </div>
    )
}