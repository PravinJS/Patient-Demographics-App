import React, { Component } from "react";
import ReactTable from "react-table";
import api from "../api";

import styled from "styled-components";

import "react-table/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

class UpdatePatient extends Component {
  updateUser = event => {
    event.preventDefault();

    window.location.href = `/patients/update/${this.props.id}`;
  };

  render() {
    return <Update onClick={this.updateUser}>Update</Update>;
  }
}

class DeletePatient extends Component {
  deleteUser = event => {
    event.preventDefault();

    if (
      window.confirm(
        `Do tou want to delete the patient ${this.props.id} permanently?`
      )
    ) {
      api.deletePatientById(this.props.id);
      window.location.reload();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>;
  }
}

class PatientsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      columns: [],
      isLoading: false
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllPatients().then(patients => {
      this.setState({
        patients: patients.data.data,
        isLoading: false
      });
    });
  };

  render() {
    const { patients, isLoading } = this.state;

    const columns = [
      {
        Header: "ID",
        accessor: "_id",
        filterable: true
      },
      {
        Header: "Mr",
        accessor: "mr",
        filterable: true
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: true
      },
      {
        Header: "DOB",
        accessor: "dob",
        filterable: true
      },
      {
        Header: "gender",
        accessor: "gender",
        filterable: true
      },
      {
        Header: "ApptDate",
        accessor: "apptdate",
        filterable: true
      },
      {
        Header: "Aadhar",
        accessor: "aadhar",
        filterable: true
      },
      {
        Header: "",
        accessor: "",
        Cell: function(props) {
          return (
            <span>
              <DeletePatient id={props.original._id} />
            </span>
          );
        }
      },
      {
        Header: "",
        accessor: "",
        Cell: function(props) {
          return (
            <span>
              <UpdatePatient id={props.original._id} />
            </span>
          );
        }
      }
    ];

    let showTable = true;
    if (!patients.length) {
      showTable = false;
    }

    return (
      <Wrapper>
        {showTable && (
          <ReactTable
            data={patients}
            columns={columns}
            loading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={0}
          />
        )}
      </Wrapper>
    );
  }
}

export default PatientsList;
