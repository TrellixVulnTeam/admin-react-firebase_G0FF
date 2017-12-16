import React, { Component } from 'react'
import base, { storage } from './base'
import { Redirect } from 'react-router-dom'

import HeaderHome from './HeaderHome'

class NovaPromocao extends Component {
    constructor(props){
        super(props)
        this.state = {
            success: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
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
                base.push('promocoes', {
                    data: novaPromocao
                })
                .then(() => {
                        this.setState({ success: true })
                    })
            })
            e.preventDefault()
    }
    render(){

        return (
            <div>
                { this.state.success && <Redirect to='/' />}
                <HeaderHome />
                <div className='container' style={{paddingTop:'80px'}}>
                    <h1>Nova Promoção</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='foto'>Foto</label>
                            <input type='file' className='form-control' id='foto' placeholder='faça um upload de uma imagem' ref={(ref) => this.foto = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='nome'>Nome</label>
                            <input type='text' className='form-control' id='nome' placeholder='Insira o nome do anúncio' ref={(ref) => this.nome = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='nome'>Categorias</label>
                            <select ref={(ref) => this.categoria = ref}>
                                { this.props.categorias.map( cat => <option key={cat.url} value={cat.url}>{cat.categoria}</option>)}   
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='descricao'>Descrição</label>
                            <input type='text' className='form-control' id='descricao' placeholder='Insira o descrição do anúncio'  ref={(ref) => this.descricao = ref}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='descricao'>Data de Validade</label>
                            <input type='text' className='form-control' id='descricao' placeholder='Insira o descrição do anúncio'  ref={(ref) => this.datavalidade = ref}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='preco'>Código do Cupom</label>
                            <input type='text' className='form-control' id='cupom' placeholder='Insira o código da promoção'  ref={(ref) => this.cupom = ref}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='telefone'>Telefone</label>
                            <input type='text' className='form-control' id='telefone' placeholder='Insira o telefone para contato'  ref={(ref) => this.telefone = ref}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='vendedor'>Fornecedor</label>
                            <input type='text' className='form-control' id='vendedor' placeholder='Digite seu nome'  ref={(ref) => this.fornecedor = ref}/>
                        </div>
                        <button type='submit' className='btn btn-warning'>Publicar Promoção</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default NovaPromocao