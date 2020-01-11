import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as NewsActions from '../actions/NewsActions';

/**
 * Componente responsavel por cadastrar uma nova noticia.
 *
 * @author bortes
 */
class CreateNews extends Component {
    /**
     * Tratamento aplicado para cadastrar nova noticia.
     *
     * @author bortes
     */
    handleCreate = (e) => {
        e.preventDefault();

        const payload = {
            when: new Date(),
            title: this.input_title.value,
            message: this.input_message.value,
            editing: false
        };

        this.props.dispatch({
            type: NewsActions.CREATE_NEWS,
            payload
        });

        this.handleClean(e);
    }

    /**
     * Tratamento aplicado para limpar o cadastrado de nova noticia.
     *
     * @author bortes
     */
    handleClean = (e) => {
        e.preventDefault();

        this.input_title.value = '';
        this.input_message.value = '';
    }

    /**
     * Renderiza o componente.
     *
     * @author bortes
     */
    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleCreate}>
                <div className="form-group">
                    <label htmlFor="title" className="text-danger">TITULO</label>
                    <input type="text" className="form-control" id="title" placeholder="Título da nova notícia" maxLength="25" required ref={input => this.input_title = input} />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="text-danger">CONTEÚDO</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Conteúdo da nova notícia" required ref={input => this.input_message = input}></textarea>
                </div>
                <div className="text-right">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-outline-secondary" onClick={this.handleClean}>LIMPAR</button>
                        <button type="submit" className="btn btn-outline-success">INCLUIR</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default connect()(CreateNews);