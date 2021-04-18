import React, { Component } from "react";
import WorksListItem from "../works-list-item";
import { connect } from "react-redux";
import { withElectricianWorksService } from "../hoc";
import { fetchWorks, workAddedToCard } from "../../actions";
import { compose } from "../../utils";
import './works-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class WorksListContainer  extends Component {

    componentDidMount() {
        this.props.fetchWorks();
    }

    render() {
        const { works, loading, error, onAddedToCard } = this.props;

        if(loading) {
            return <Spinner/>
        }

        if(error) {
            return <ErrorIndicator error={error}/>
        }

        return <WorksList works={ works } onAddedToCard={ onAddedToCard } />
    }
}

const WorksList = ({ works, onAddedToCard }) => {
    return (
        <ul>
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
    )
}

const mapStateToProps = ({ worksList: { works, loading, error }}) => {
    return { works, loading, error }
};

const mapDispatchToProps = (dispatch, { electricianWorksService }) => {
    return {
        fetchWorks: fetchWorks(electricianWorksService, dispatch),
        onAddedToCard: (id) => dispatch(workAddedToCard(id))
    }
};

export default compose(withElectricianWorksService(),
    connect(mapStateToProps, mapDispatchToProps)
)(WorksListContainer);