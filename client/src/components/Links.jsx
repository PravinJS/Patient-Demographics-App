import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
  className: "collpase navbar-collapse"
})``;

const List = styled.div.attrs({
  className: "navbar-nav mr-auto"
})``;

const Item = styled.div.attrs({
  className: "collpase navbar-collapse"
})``;

class Links extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/" className="navbar-brand">
          Patient Details
        </Link>
        <Collapse>
          <List>
            <Item>
              <Link to="/patients/list" className="nav-link">
                View Patient
              </Link>
            </Item>
            <Item>
              <Link to="/patients/create" className="nav-link">
                Add Patient
              </Link>
            </Item>
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default Links;
