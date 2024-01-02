import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='container'>
      <div className='inner-content'>
      <div className='brand'> <Link to={"/"}>İzlenecekler</Link></div>
      <ul className='nav-links'>
        <li><Link to={"/person"}>Kişiler</Link></li>
        <li><Link to={"/watched"}>İzlenenler</Link></li>
        <Link to={"/add"} className='btn'><li><i className='fas fa-plus'></i></li></Link>
      </ul>
      </div>
      </div>
    </header>
  )
}

export default Header
