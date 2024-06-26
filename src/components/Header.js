import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = ()=>{

    const[btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header render");

    // if no dependency array => useEffect is called on every render 
    // if dependency array is empty =[]=> useEffect is called on initial render(just once)
    // if dependency array is [btnNameReact]=> called everyTime btnNameReact is updated
    useEffect(()=>{
        console.log("useEffect called");
    },[btnNameReact]);

    return (
        <div className="header">
            <div className="logo-name">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button 
                        className='login-btn' 
                        onClick={()=>{
                            btnNameReact == "Login"
                            ? setBtnNameReact("Logout")
                            : setBtnNameReact("Login");
                    }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>

        </div>
    );
};

export default Header;