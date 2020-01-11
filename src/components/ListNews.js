import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReadNews from './ReadNews';
import UpdateNews from './UpdateNews';
import CreateNews from './CreateNews';

/**
 * Componente responsavel por listar as noticias cadastradas.
 *
 * @author bortes
 */
class ListNews extends Component {
    /**
     * Renderiza o componente.
     *
     * @author bortes
     */
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pb-4">
                        <h2 className="text-danger"># NOVA NOTÍCIA</h2>
                        <CreateNews />
                    </div> {
                        this.props.news.map(o => (
                            <div className="col-md-4 pb-4" key={o.when}> {
                                o.editing
                                    ? <UpdateNews key={o.when} data={o} />
                                    : <ReadNews key={o.when} data={o} />
                            } </div>
                        ))
                    } </div>
            </div>
        );
    }
}


/**
 * Mapeia o estado da aplicacao na propriedade ".props" disponibilizadas dentro dos componentes.
 *
 * @author bortes
 */
const mapStateToProps = (state) => {
    return {
        news: state
    }
}

export default connect(mapStateToProps)(ListNews);