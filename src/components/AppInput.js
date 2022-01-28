import React, {Component} from 'react';
import {View as V, TextInput as Tip} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  primaryColor,
  secondaryColor,
  thirdColor,
  grey,
  black,
  blackTint,
  white,
  silver,
  red,
  h005,
  h01,
  h02,
  h03,
  h05,
  h1,
  h14,
  h15,
  h17,
  h19,
  h2,
  h23,
  h25,
  h3,
  h35,
  h4,
  h45,
  h5,
  h55,
  h6,
  h7,
  h8,
  h9,
  h10,
  h12,
  h13,
  h20,
  h100,
  w100,
  w18,
  w20,
  border,
  h18,
  lightWhite,
  h30,
  h07,
  h21,
} from '../screens/Dimen';

export class AppInput extends Component {
  render() {
    return (
      <V
        style={[
          {
            width: '80%',
            flexDirection: 'row',
            backgroundColor: white,
            borderRadius: h1,
            borderColor: primaryColor,
            borderWidth: h005,
          },
          this.props.st,
        ]}>
        <V
          style={{
            width: '10%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.ic} size={h25} color={primaryColor} />
        </V>
        <Tip
          style={{
            height: h6,
            width: '90%',
            fontSize: h17,
          }}
          {...this.props}
        />
      </V>
    );
  }
}
