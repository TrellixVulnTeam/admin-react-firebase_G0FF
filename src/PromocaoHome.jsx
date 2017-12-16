import React from 'react'
import { Link } from 'react-router-dom'
import css from './css/AnuncioHome.css'
import base, { storage } from './base'


const PromocaoHome = ({id, promocao}) => {

function excluirPromo(e){
    const file = this.foto.files[0]
    const { name } = file
    const ref = storage.ref(name)
    ref.put(file)
        .then( img => {
            const novaPromocao = {
                nome: this.nome.value,
                descricao: this.descricao.value,
                cupom: this.cupom.value,
                telefone: this.telefone.value,
                foto: img.metadata.downloadURLs[0],
                datavalidade: this.datavalidade.value,
                fornecedor: this.fornecedor.value,
                categoria: this.categoria.value
            }
            base.delete('promocoes', {
                data: novaPromocao
            })
            .then(() => {
                    this.setState({ success: true })
                })
        })
        e.preventDefault()
}

function removerDados(){
  console.log("ola")
  // Create a reference to the file to delete
var desertRef = storage.child('/promocao/{key}');

// Delete the file
desertRef.delete().then(function() {
  // File deleted successfully
}).catch(function(error) {
  // Uh-oh, an error occurred!
});
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
          <td><button type='button'>Excluir</button></td>
      </tr>
      </tbody>   
    )
}
export default PromocaoHome