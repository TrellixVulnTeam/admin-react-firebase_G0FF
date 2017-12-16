import React from 'react'
import { Link } from 'react-router-dom'
import css from './css/HeaderInterno.css'

import logo2 from './logo2.png'

function HeaderInterno ({user, appName, onLogout, onAuth}) {

    function renderUserData () {
        return (
          <div>
          <ul className="nav navbar-nav navbar-right">
            <li><img width="32" className="img-circle" src={user.photoURL}/></li>
            <li> {user.displayName}</li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{user.displayName} <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Meus Cupons</a></li>
                <li role="separator" class="divider"></li>
                <li><Link to="" onClick={onLogout}>Sair</Link></li>
              </ul>
            </li>
            <li></li>
          </ul>
          </div>
        )
      }
    
      function renderLoginButton () {
        return (
          <div>
          <ul className='right'>
            <li>
              <button className='waves-effect waves-light btn blue darken-1' onClick={onAuth}>
                Login
              </button>
            </li>
          </ul>
          </div>
        )
    }
  
    return(
        <nav className="navbar fixed-top bg-yellow">
        <div className="container">
          <Link className="navbar-brand" to=""><img alt="MercadoDev" src={logo2} height={80} /></Link>
          <ul className="nav navbar-nav navbar-right">
          <li><Link to="">{user ? renderUserData() : false}</Link></li>           
          </ul>
          </div>
      </nav>
    )
}

export default HeaderInterno