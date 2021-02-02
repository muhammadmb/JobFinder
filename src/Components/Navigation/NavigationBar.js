import React from "react";
import '../../Style.css';
import './NavigationBarStyle.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import RecentActorsOutlinedIcon from '@material-ui/icons/RecentActorsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {Link} from 'react-router-dom';

const NavigationBar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark " style = {{backgroundColor: '#172b57'}} >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className = "container">

                    <div className="collapse navbar-collapse" id="navbarContent">

                        <a className="navbar-brand brand" href="#">JF</a>

                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="#home"> <HomeIcon/> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#home"> <SearchIcon fontSize="small"/> Offers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#home"> <ContactSupportOutlinedIcon fontSize="small"/> About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#home"> <RecentActorsOutlinedIcon fontSize="small"/> Contact</Link>
                        </li>

                        </ul>
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="#home"> <AccountCircleOutlinedIcon fontSize="small"/> Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#home"> <PersonAddOutlinedIcon fontSize="small"/> SignUp</Link>
                        </li>
                        </ul>

                    </div>
                </div>

            </nav>
        </>
    );

}
export default NavigationBar;