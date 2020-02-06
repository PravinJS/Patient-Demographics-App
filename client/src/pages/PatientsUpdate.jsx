import React, { Component } from "react";
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

class PatientsUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      mr: "",
      name: "",
      dob: "",
      gender: "",
      apptdate: "",
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

  handleUpdatePatient = async () => {
    const { id, mr, name, dob, gender, apptdate, aadhar } = this.state;
    const payload = { mr, name, dob, gender, apptdate, aadhar };

    await api.updatePatientById(id, payload).then(res => {
      window.alert(`Patient updated successfully`);
      this.setState({
        mr: "",
        name: "",
        dob: "",
        gender: "",
        apptdate: "",
        aadhar: ""
      });
    });
  };

  componentDidMount = async () => {
    const { id } = this.state;
    const patient = await api.getPatientById(id);

    this.setState({
      mr: patient.data.data.mr,
      name: patient.data.data.name,
      dob: patient.data.data.dob,
      gender: patient.data.data.gender,
      apptdate: patient.data.data.apptdate,
      aadhar: patient.data.data.aadhar
    });
  };

  render() {
    const { name, mr, dob, gender, apptdate, aadhar } = this.state;
    return (
      <Wrapper>
        <Title>Edit Patient</Title>

        <Label>Mr/Mrs: </Label>
        <InputText type="text" value={mr} onChange={this.handleChangeInputMr} />

        <Label>Name: </Label>
        <InputText
          type="text"
          value={name}
          onChange={this.handleChangeInputName}
        />

        <Label>DOB: </Label>
        <InputText
          type="text"
          value={dob}
          onChange={this.handleChangeInputdob}
        />

        <Label>Gender: </Label>
        <InputText
          type="text"
          value={gender}
          onChange={this.handleChangeInputgender}
        />

        <Label>Appointment Date: </Label>
        <InputText
          type="text"
          value={apptdate}
          onChange={this.handleChangeInputapptdate}
        />

        <Label>Aadhar number: </Label>
        <InputText
          type="text"
          value={aadhar}
          onChange={this.handleChangeInputaadhar}
        />

        <Button onClick={this.handleUpdatePatient}>Update Patient</Button>
        <CancelButton href={"/patients/list"}>Cancel</CancelButton>
      </Wrapper>
    );
  }
}

export default PatientsUpdate;
