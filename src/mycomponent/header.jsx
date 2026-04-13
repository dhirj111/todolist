import React from "react";
import PropTypes from "prop-types"
function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.name}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active">Home</a>
              <a className="nav-link">Features</a>
              <a className="nav-link">Pricing</a>
              <a className="nav-link disabled">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
Header.defaultProps = {
  name: "Default Name",
};
Header.propTypes = {
  name: PropTypes.string,
};

export default Header;