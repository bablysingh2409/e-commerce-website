import React from "react";
import { Link } from "react-router-dom";
import style from './Nav.module.css'

const Nav=()=>{
    return(
        <div className={style.nav_container}>
            <ul  className={style.nav_list_container}>
                <li>
                    <Link to='/'>Products</Link>
                    
                </li>
                <li>
                    <Link to='/add'>Add Product</Link>
                    
                </li>
                <li>
                    <Link to='update'>Update Product</Link>
                    
                </li>
                <li>
                    <Link to='logout'>Logout</Link>
                    
                </li>
                <li>
                    <Link to='profile'>Profile</Link>
                    
                </li>
            </ul>
        </div>
    )
}

export default Nav;