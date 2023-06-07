import React from "react";
import { SessionContext } from "../context/session.context";
import WelcomePage from "../pages/WelcomePage/WelcomePage";


const WithAuthProtection = (WrapperComponent: any) => {
  class RenderComponen extends React.PureComponent {
    render() {
      return (
        <SessionContext.Consumer>
          {({ token }) => {
            return token ? <WrapperComponent {...this.props} /> : <WelcomePage /> ;
          }}
        </SessionContext.Consumer>
      );
    }
  }

  return RenderComponen;
};

export default WithAuthProtection;
