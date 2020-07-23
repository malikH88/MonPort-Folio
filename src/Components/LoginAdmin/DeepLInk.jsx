import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

let DeepLInkStyle = { display: "block" };

class DeepLInk extends React.Component {
  withBlock = (Component) => {
    const { token } = this.props;
    const RedirectToBlock = () => { DeepLInkStyle = { display: "none" }; };
    return (token != null ? Component : RedirectToBlock);
  };

  render() {
    const { token } = this.props;
    if (token != null) {
      return (
        <div style={DeepLInkStyle} >
          <Link to="/dashboard" className="DeepLink">
            Dashboard
          </Link>
        </div>
      );
    } else {
      return (
        <div />
      )
    }
  }
}

const mapStateToProps = (state) => ({
  token: state.reducer.token,
});

export default connect(mapStateToProps)(DeepLInk);