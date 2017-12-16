import React, {Component} from 'react'
import base from './base'

import HeaderHome from './HeaderHome'
import PromocaoHome from './PromocaoHome'
import AdsHome from './AdsHome'
import LinkCategoria from './LinkCategoria'


class Home extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          promocoes: []
        }
        base.bindToState('promocoes',{
          context: this,
          state: 'promocoes',
          queries:{
            limitToLast: 8
          }
        })
      }

    render() {
    let index = 0
    return (
        <div>
                <HeaderHome />
                <div className="container">
                <h3>Ultimos Anúncios</h3>


                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Fornecedor</th>
                        <th scope="col">Data de Validade</th>
                        </tr>
                    </thead>
                    { Object.keys(this.state.promocoes).map( key => {
                      const promocao = this.state.promocoes[key]
                    return <PromocaoHome key={key} id={key} promocao={promocao} />
                    })}
                </table>
                </div>
        </div>
    )
    }
}
export default Home