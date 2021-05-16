import React, {Component} from "react";
import WorksListItem from "../works-list-item";
import {connect} from "react-redux";
import {withElectricianWorksService} from "../hoc";
import {fetchWorks, workAddedToCard} from "../../actions";
import {compose} from "../../utils";
import './works-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import SearchPanel from "../search-panel";

class WorksListContainer extends Component {

    componentDidMount() {
        this.props.fetchWorks();
    }

    state = {
        search: ''
    }

    onSearchChange = (search) => {
        this.setState({search});
    }

    searchItems(items, search) {
        if (search.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
    }

    render() {
        const {works, loading, error, onAddedToCard} = this.props;
        const visibleWorks = this.searchItems(works, this.state.search)

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator error={error}/>
        }

        return <WorksList works={visibleWorks}
                          onAddedToCard={onAddedToCard}
                          onSearchChange={this.onSearchChange}/>
    }
}

const WorksList = ({works, onAddedToCard, onSearchChange}) => {
    return (
        <div>
            <h3>Выберите из списка необходимые работы.</h3>
            <h3>Внизу страницы отобразятся выбранные вами пункты.</h3>
            <SearchPanel onSearchChange={onSearchChange}/>
            <ul className="ml-n5">
                {
                    works.map((work) => {
                        return (
                            <li key={work.id}><WorksListItem
                                work={work}
                                onAddedToCard={() => onAddedToCard(work.id)}
                            /></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (
    {
        worksList: {
            works, loading, error
        }
    }
    ) => {
        return {works, loading, error}
    }
;

const mapDispatchToProps = (dispatch,
                            {
                                electricianWorksService
                            }
    ) => {
        return {
            fetchWorks: fetchWorks(electricianWorksService, dispatch),
            onAddedToCard: (id) => dispatch(workAddedToCard(id))
        }
    }
;

export default compose(withElectricianWorksService(),
    connect(mapStateToProps, mapDispatchToProps)
)(WorksListContainer);