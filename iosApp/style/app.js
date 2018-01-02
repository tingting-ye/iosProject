import React from 'react';
import {
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create(
{
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    width:40,
    height:40,
  },
  input: {
    width: 200,
    height: 40,
    color: '#fff',//输入框输入的文本为白色
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#5a8def',
    marginBottom: 8,
  },
  button: {
    height: 50,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#5a8def',    
    marginBottom: 8,
  },
  btText: {
    color: '#ffffff',
  },
  passwordView:{
    height: 50,
    width: 280,
  },
  forgetPassword:{
    textAlign:"right",
    backgroundColor: 'rgba(255,255,255,0)',
  }
});

module.exports = styles;