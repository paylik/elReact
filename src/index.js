import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import ElectricianWorksService from "./services/electrician-works-service";
import { ElectricianWorksServiceProvider } from "./components/electrician-works-service-context";

import store from "./store";

const electricianWorksService = new ElectricianWorksService();

ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundry>
        <ElectricianWorksServiceProvider value={electricianWorksService}>
          <Router>
            <App/>
          </Router>
        </ElectricianWorksServiceProvider>
      </ErrorBoundry>
    </Provider>,
  document.getElementById('root')
);

