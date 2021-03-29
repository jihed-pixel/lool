import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from "../../Form/FormInput";
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,  MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-50, 50],
      alpha: [0.6, 0],
      scale: [.1, 0.9],
      position: "all",
      color: [ "#ff0000"],
      cross: "dead",
      random: 10
    };
//import 'localstorage-polyfill';




const Retinopathie1 = (props) => {

  const [anciennete, setAnciennete] = useState(0.0);
  const [traitement, setTraitement] = useState(0);


  var handleAnciennteChange = (text) => {
    setAnciennete(text)
  }
  var handleTraitementChange = (text) => {
    setTraitement(text)
  }

  var handleSubmit = (e) => {
    var values = {
      antecedent: "Retinopathie",
      anciennete: anciennete,
      traitement: traitement,

    }
    e.preventDefault();
    //console.log(values)
    props.antecedentsMedicaux(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux1")
  }
  return (
    <section className="landing-background2">
    <div class=" d-flex align-items-center m-4 " style={{height: "550px"}}>
    <MDBContainer  style={{height: "350px"}}>
          <MDBRow>
            <MDBCol md="6">
              <MDBCard>
              <form>
              <h2 class="font-weight-bold text-center p-5 text-primary">Retinopathie</h2>
              <FormInput title="Ancienneté" placeholder="Ancienneté" onChangeText={handleAnciennteChange} type="decimal-pad"  type="number"  />
        <FormInput title="Traitement" placeholder="Traitement" onChangeText={handleTraitementChange} />

              <form class="row justify-content-center">
              <FormButton title="Retour" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux1") }} />
              <FormButton title="Enregister" onPress={handleSubmit} />
              </form>
               </form>

              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </div>
        </section>
  );
};

const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  antecedentsMedicaux: actions.antecedentsMedicaux
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
});
export default connect(mapStateToProps, mapActionToProps)(Retinopathie1);
