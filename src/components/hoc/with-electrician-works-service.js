import React from "react";
import { ElectricianWorksServiceConsumer } from '../electrician-works-service-context';

const withElectricianWorksService = () => (Wraped) => {

    return (props) => {
        return (
            <ElectricianWorksServiceConsumer>
                {
                    (electricianWorksService) => {
                        return (<Wraped {...props}
                                        electricianWorksService = { electricianWorksService }/>)
                    }
            }

            </ElectricianWorksServiceConsumer>
        );
    }
};

export { withElectricianWorksService };