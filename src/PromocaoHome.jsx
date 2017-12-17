import React from 'react'
import { Link } from 'react-router-dom'
import css from './css/AnuncioHome.css'
import base, { storage } from './base'
import firebase from 'firebase'


const PromocaoHome = ({id, promocao}) => {

function excluirPromocao(e){
    firebase.database().ref('promocao').child(id).remove();
}

    return(
      <tbody>
      <tr>
        <th scope="row"></th>
          <td><a to={`/anuncios/ver/`}>{promocao.nome}</a></td>
          <td>{promocao.categoria}</td>
          <td>{promocao.fornecedor}</td>
          <td>{promocao.datavalidade}</td>
          <td><Link to="#">Editar</Link></td>
          <td><button type='button' onClick={excluirPromocao}>Excluir</button></td>
      </tr>
      </tbody>   
    )
}
export default PromocaoHome