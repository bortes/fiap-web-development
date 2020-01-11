import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as NewsActions from '../actions/NewsActions';

/**
 * Componente responsavel por exibir a atualizacao da uma noticia.
 *
 * @author bortes
 */
class UpdateNews extends Component {
    /**
     * Tratamento aplicado para atualizar uma noticia.
     *
     * @author bortes
     */
    handleUpdate = (e) => {
        e.preventDefault();

        const payload = {
            when: this.props.data.when,
            title: this.input_title.value,
            message: this.input_message.value,
            editing: false
        };

        this.props.dispatch({
            type: NewsActions.UPDATE_NEWS,
            payload
        })
    }

    /**
     * Tratamento aplicado para cancelar a atualizacao de uma noticia.
     *
     * @author bortes
     */
    handleCancel = (e) => {
        e.preventDefault();

        const payload = {
            when: this.props.data.when
        };

        this.props.dispatch({
            type: NewsActions.READ_NEWS,
            payload
        });
    }

    /**
     * Renderiza o componente.
     *
     * @author bortes
     */
    render() {
        return (
            <form className="card" onSubmit={this.handleUpdate}>
                <div className="card-body">
                    <div className="form-group">
                        <input type="text" className="form-control" id="title" placeholder="Título da nova notícia" maxLength="25" required ref={input => this.input_title = input} defaultValue={this.props.data.title} />
                    </div>
                    <div className="form-group">
                        <textarea className="card-text form-control" id="exampleTextarea" rows="3" placeholder="Conteúdo da nova notícia" required ref={input => this.input_message = input} defaultValue={this.props.data.message} ></textarea>
                    </div>
                    <div className="text-right">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-outline-secondary" onClick={this.handleCancel}>CANCELAR</button>
                            <button type="submit" className="btn btn-outline-success">ATUALIZAR</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default connect()(UpdateNews);