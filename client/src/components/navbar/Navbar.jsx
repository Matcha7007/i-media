import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/dark-mode-context';
import { AuthContext } from '../../context/auth-context';

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext)
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <div className="left">
        <Link to='/' style={{ textDecoration:'none' }}>
          <span>ilhamedia</span>
        </Link>
        <HomeOutlinedIcon className='icon-button' />
        { 
          darkMode  ? 
                      (<DarkModeOutlinedIcon className='icon-button' onClick={toggle} />) 
                    : 
                      (<WbSunnyOutlinedIcon className='icon-button' onClick={toggle} />)
        }
        <GridViewOutlinedIcon className='icon-button' />
        <div className="search">
          <SearchOutlinedIcon className='icon-button' />
          <input type="text" placeholder='Search..' />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon className='icon-button' />
        <EmailOutlinedIcon className='icon-button' />
        <NotificationsOutlinedIcon className='icon-button' />
        <div className="user">
          <img src={currentUser.pict} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar