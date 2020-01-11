import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as NewsActions from '../actions/NewsActions';

/**
 * Componente responsavel por exibir uma noticia.
 *
 * @author bortes
 */
class ReadNews extends Component {
    /**
     * Tratamento aplicado para apagar uma noticia.
     *
     * @author bortes
     */
    handleDelete = (e) => {
        e.preventDefault();

        const payload = {
            when: this.props.data.when
        };

        this.props.dispatch({
            type: NewsActions.DELETE_NEWS,
            payload
        });
    }

    /**
     * Tratamento aplicado para aditar de uma noticia.
     *
     * @author bortes
     */
    handleEdit = (e) => {
        e.preventDefault();

        const payload = {
            when: this.props.data.when
        };

        this.props.dispatch({
            type: NewsActions.EDIT_NEWS,
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
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-warning">{this.props.data.title}</h2>
                    <p className="card-text">{this.props.data.message}</p>
                    <div className="text-right">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-outline-secondary" onClick={this.handleDelete}>APAGAR</button>
                            <button type="button" className="btn btn-outline-success"  onClick={this.handleEdit}>EDITAR</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(ReadNews);