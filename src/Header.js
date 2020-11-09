import React from 'react'
import './Header.style.css'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Header() {
    return (
        <div className='header'>
            <img src='https://www.logolynx.com/images/logolynx/cd/cdd59a3d7288df84335a3c5a61b1652d.png' alt='' />
            <div className='header-icons'>
<SearchIcon/>
<MoreVertIcon/>

            </div>
            
        </div>
    )
}

export default Header
