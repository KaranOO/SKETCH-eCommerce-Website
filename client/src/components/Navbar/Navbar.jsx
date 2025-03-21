import React from'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import "./Navbar.scss"
import { useState } from 'react';
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = ( ) => {

    const [open,setOpen] = useState(false);
    const products = useSelector((state) => state.cart.products);

    return(
        <div className="navbar">
            <div className="wrapper">
                {/* LEFT PART OF NAVBAR */}
                <div className="left">
                    <div className="item">
                        <img src="/img/india-flag-icon.png" alt="TEMPLOGO" width="27px" height="20px"/>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <span>IND</span>
                        <KeyboardArrowDownIcon/>
                    </div>

                    <div className="item">
                        <Link className="link" to="/products/1">Painting</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">Sketches</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">Exhibition</Link>
                    </div>
                </div>
                    {/* CENTER PART OF NAVBAR */}
                <div className="center">
                    <Link className="link" to="/">SKETCH</Link>
                </div>
                {/* RIGHT PART OF  NAVBAR */}
                <div className="right">
                <div className="item">
                    <Link className="link" to="/">Home</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">About</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Contact</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Stores</Link>
                </div>
                <div className="icons">
                        <SearchIcon/>
                        <PersonOutlineIcon/>
                        <FavoriteBorderIcon/>
                        <div className="cartIcon">
                            <ShoppingCartIcon onClick={()=>setOpen(!open)}/>
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    );
};

export default Navbar

// import React, { useState } from "react";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import SearchIcon from "@mui/icons-material/Search";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { Link } from "react-router-dom";
// import "./Navbar.scss"
// import Cart from "../Cart/Cart";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const [open,setOpen] = useState(false)
//   const products = useSelector((state) => state.cart.products);

//   return (
//     <div className="navbar">
//       <div className="wrapper">
//         <div className="left">
//           <div className="item">
//             <img src="/img/en.png" alt="" />
//             <KeyboardArrowDownIcon />
//           </div>
//           <div className="item">
//             <span>USD</span>
//             <KeyboardArrowDownIcon />
//           </div>
//           <div className="item">
//             <Link className ="link" to="/products/1">Women</Link>
//           </div>
//           <div className="item">
//             <Link className ="link" to="/products/2">Men</Link>
//           </div>
//           <div className="item">
//             <Link className ="link" to="/products/3">Children</Link>
//           </div>
//         </div>
//         <div className="center">
//           <Link className ="link" to="/">LAMASTORE</Link>
//         </div>
//         <div className="right">
//           <div className="item">
//             <Link className ="link" to="/">Homepage</Link>
//           </div>
//           <div className="item">
//             <Link className ="link" to="/">About</Link>
//           </div>
//           <div className="item">
//             <Link className ="link" to="/">Contact</Link>
//           </div>
//           <div className="item">
//             <Link className ="link" to="/">Stores</Link>
//           </div>
//           <div className="icons">
//             <SearchIcon/>
//             <PersonOutlineOutlinedIcon/>
//             <FavoriteBorderOutlinedIcon/>
//             <div className="cartIcon" onClick={()=>setOpen(!open)}>
//               <ShoppingCartOutlinedIcon/>
//               <span>{products.length}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {open && <Cart/>}
//     </div>
//   );
// };

// export default Navbar;
