import React, { Component }  from "react";

import './search-panel.css'

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onTermChange = (e) => {
        const { onSearchChange = () => {}} = this.props;
        this.setState({
            term: e.target.value
        });

        onSearchChange(e.target.value);
    }

    render() {
        return (
            <div className="container-fluid mb-2">
                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="text"
                        placeholder="Поиск работ"
                        aria-label="Search"
                        value={this.state.term}
                        onChange={this.onTermChange}
                    />
                    {/*<button className="btn btn-outline-success text-nowrap" type="submit">Поиск работ</button>*/}
                </form>
            </div>
        );
    }
}