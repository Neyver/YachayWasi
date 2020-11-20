import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import NoticeFrom from "../components/NoticeForm";
import { render } from 'react-dom';

const db = firebase.app();

const CreateNotice = ({ navigation }) => {

    return(
        <NoticeFrom/>
        
    );
  
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: "#888"
  },
  containerCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textWelcom: {
    fontSize: 40,
  }
});

export default CreateNotice;