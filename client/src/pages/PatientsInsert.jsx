import React, { Component } from "react";
import DatePicker from "react-date-picker";
import api from "../api";

import styled from "styled-components";

const Title = styled.h1.attrs({
  className: "h1"
})``;

const Wrapper = styled.div.attrs({
  className: "form-group"
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control"
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`
})`
  margin: 15px 15px 15px 5px;
`;

class PatientsInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mr: "",
      name: "",
      dob: new Date(),
      gender: "",
      apptdate: new Date(),
      aadhar: ""
    };
  }

  handleChangeInputName = async event => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleChangeInputMr = async event => {
    const mr = event.target.value;
    this.setState({ mr });
  };

  handleChangeInputdob = async event => {
    const dob = event.target.value;
    this.setState({ dob });
  };

  handleChangeInputgender = async event => {
    const gender = event.target.value;
    this.setState({ gender });
  };

  handleChangeInputapptdate = async event => {
    const apptdate = event.target.value;
    this.setState({ apptdate });
  };

  handleChangeInputaadhar = async event => {
    const aadhar = event.target.value;
    this.setState({ aadhar });
  };

  handleIncludePatient = async () => {
    const { mr, name, dob, gender, apptdate, aadhar } = this.state;
    const payload = { mr, name, dob, gender, apptdate, aadhar };

    await api.insertPatient(payload).then(res => {
      window.alert(`Patient inserted successfully`);
      this.setState({
        mr: "",
        name: "",
        dob: new Date(),
        gender: "",
        apptdate: new Date(),
        aadhar: ""
      });
    });
  };

  render() {
    const { name, mr, dob, gender, apptdate, aadhar } = this.state;
    return (
      <Wrapper>
        <Title>Add Patient</Title>

        <Label>Mr/Mrs: </Label>

        <InputText type="text" value={mr} onChange={this.handleChangeInputMr} />

        <Label>Name: </Label>

        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>DOB: </Label>

        <DatePicker onChange={this.handleChangeInputdob} value={dob} />
        <br />

        <Label>Gender: </Label>

        <InputText
          type="text"
          value={gender}
          onChange={this.handleChangeInputgender}
        />

        <Label>Appointment Date: </Label>

        <DatePicker
          onChange={this.handleChangeInputapptdate}
          value={apptdate}
        />
        <br />

        <Label>Aadhar number: </Label>

        <InputText
          type="text"
          value={aadhar}
          onChange={this.handleChangeInputaadhar}
        />

        <Button onClick={this.handleIncludePatient}>Add Patient</Button>
        <CancelButton href={"/patients/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default PatientsInsert;
