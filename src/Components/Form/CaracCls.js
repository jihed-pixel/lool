import React from 'react';


import tailwind from 'tailwind-rn';
import { } from 'react-native';
import FormButton from "./FormButton1";
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import { Text,View, StyleSheet } from 'react-native';


const CaracCls = (props) => {
  return (
    
<div class="p-4">
<label class="form-label mx-4">Date de début </label>
<div class="p-1"><input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={(value) => props.setDateD(value)}/></div>
<label class="form-label mx-4">Date de fin</label>
<div class="p-1"><input class="border border-primary" type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={(value) => props.setDateF(value)}/></div>

        
        
 
<div class="p-1"><FormButton title="Enregistrer" onPress={props.onSubmit} /></div>
      
      </div>
  );
};
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
});



export default CaracCls;
