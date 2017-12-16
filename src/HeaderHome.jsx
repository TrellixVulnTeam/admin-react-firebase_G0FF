import React, { Component } from 'react'
import { Link   } from 'react-router-dom'
import firebase from 'firebase'
import LoginProfile from './LoginProfile'

import logo from './logo.png'
import css from './css/HeaderHome.css'

//functional stateless component
//<p className="text-center"><Link className="btn btn-anuncie btn-lg" to="/novo-anuncio" role="button">Anuncie Grátis &raquo;</Link></p>
class HeaderHome extends Component {

    constructor () {
        super()
        this.handleAuth = this.handleAuth.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }
    
    state = {
        user: null
    }
    
    componentWillMount () {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user })
        })
    }
    
      handleAuth () {
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/plus.login')
    
        firebase.auth().signInWithPopup(provider)
          .then(result => console.log(`${result.user.email} ha iniciado sesión`))
          .catch(error => console.log(`Error ${error.code}: ${error.message}`))
      }
    
      handleLogout () {
        firebase.auth().signOut()
          .then(result => console.log('Te has desconectado correctamente'))
          .catch(error => console.log(`Error ${error.code}: ${error.message}`))
      }      

    render(){
        return(
            
            <div>
                <nav class="navbar navbar-expand-lg bg-warning">
                <div className="container">
                <a class="navbar-brand" href="#">Akicupom Manager</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                  </ul>
                    <Link class="btn btn-danger my-2 my-sm-0" to="/">Dashboard</Link>
                    <Link class="btn btn-danger  my-sm-0" to="nova-promocao">Nova Promoção</Link>
                </div>
                </div>
              </nav>
            </div>          
        )
    }    
}

export default HeaderHome