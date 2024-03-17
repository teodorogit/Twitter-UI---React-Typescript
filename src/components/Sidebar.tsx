

import twitterLogo from '../assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, Sparkle, User } from 'phosphor-react'
import './Sidebar.css'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <img  className='logo' src={twitterLogo} alt="logo" />
        <nav className='main_navigation'>
          <NavLink to="/">
            <House weight='fill'/>
            <span>Home</span></NavLink>
          <a href="">
            <Hash/>
            <span>Explore</span></a>
          <a href="">
            <Bell/>
            <span>Notifications</span></a>
          <a href="">
            <Envelope/>
            <span>Messages</span></a>
          <a href="">
            <BookmarkSimple/>
            <span>Bookmarks</span></a>
          <a href="">
            <FileText/>
            <span>Lists</span></a>
          <a href="">
            <User/>
            <span>Profile</span></a>
          <a href="">
            <DotsThreeCircle/>
            <span>More</span></a>

        </nav>
        <button className='new_tweet' type='button'><Pencil/><span>tweet</span></button>
      </aside>
  )
}

export default Sidebar
