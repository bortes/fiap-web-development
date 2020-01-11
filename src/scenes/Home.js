import React, { Component } from 'react';

import ListNews from '../components/ListNews';

/**
 * Componente responsavel por exibir a pagina principal.
 *
 * @author bortes
 */
class Home extends Component {
    /**
     * Renderiza o componente.
     *
     * @author bortes
     */
    render() {
        return (
            <main role="main">
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3"><span className="text-danger">Olá</span>, seja bem vindo!!</h1>
                        <p>Esta é uma página exemplo construída em <a className="text-danger" href="https://reactjs.org/">React</a> e <a className="text-danger" href="https://getbootstrap.com/">Bootstrap</a>.</p>
                    </div>
                </div>
                <ListNews />
            </main>
        );
    }
}

export default Home;