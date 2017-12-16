import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'
import css from './css/LoginProfile.css'
import googlelogin from './img/google-login.svg'
import { Link   } from 'react-router-dom'

import HeaderInterno from './HeaderInterno'
import HeaderHome from './HeaderHome'

function LoginProfile ({ appName, user, onAuth, onLogout }) {

    function renderUserData () {
        return (
          <div className='render-user-data'>
          <div className="row">
          <div className='col-lg-6'>
          <img className='avatar circle' src={user.photoURL} />
          </div>
          <div className='col-lg-6'>         
               <p>{user.displayName}</p>
               <Link to="" class="link-sair" onClick={onLogout}>Sair</Link>
          </div>
          </div>
          </div>
        )
      }

      function renderLoginButton () {
        return (
          <div>
          <ul className='right'>
            <li>
              <Link to='/login'>
                Login
              </Link>
            </li>
          </ul>
          </div>
        )
      }

    return (
      <div>
        <ul className='navbar right-top'> 
          <li>
          <p className='show-login'></p>
                {user ? renderUserData() : renderLoginButton() }
          </li>
            
        </ul>
        </div>
    )
}

export default LoginProfile