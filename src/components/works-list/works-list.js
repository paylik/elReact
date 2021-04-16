import React, { Component } from "react";
import WorksListItem from "../works-list-item";
import { connect } from "react-redux";
import { withElectricianWorksService } from "../hoc";
import { worksLoaded } from "../../actions";
import { compose } from "../../utils";
import './works-list.css';

class WorksList  extends Component {

    componentDidMount() {
        const { electricianWorksService } = this.props;
        const data = electricianWorksService.getWorks();


        this.props.worksLoaded(data);
    }

    render() {
        const { works } = this.props;
        return (
            <ul>
                {
                    works.map((work) => {
                        return (
                            <li key={work.id}><WorksListItem work={work} /></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ works }) => {
    return { works }
};

const mapDispatchToProps = { worksLoaded };

export default compose(withElectricianWorksService(),
    connect(mapStateToProps, mapDispatchToProps)
)(WorksList);