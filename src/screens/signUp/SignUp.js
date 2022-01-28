import React, {Component} from 'react';
import {View as V, TouchableOpacity as B, Image as Img} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppInput, PasswordInput, Txt as T, AppBtn} from '../../components';

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
} from '../Dimen';

let [signUp, set, navigation] = [];

export class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    hidePass: true,
  };

  render() {
    let {name, email, password, hidePass} = this.state;

    set = (value, cb) => this.setState(value, cb);
    navigation = this.props.navigation;

    signUp = () => {
      console.warn(name);
      console.warn(email.toLowerCase().trim());
      console.warn(password);
    };
    return (
      <V
        style={{
          flex: 1,
          backgroundColor: '#faf',
        }}>
        <V
          style={{
            height: h20,
            backgroundColor: '#aaf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Img
            source={require('../../assets/1.jpeg')}
            style={{
              height: h('15%'),
              width: h('15%'),
              borderRadius: h8,
            }}
            overflow={'hidden'}
          />
        </V>

        <V
          style={{
            flex: 1,
            backgroundColor: '#a3a4',
            alignItems: 'center',
          }}>
          <AppInput
            onChangeText={name => set({name})}
            ic={'person'}
            placeholder={'Name'}
            // editable={false}
            // value={'6789'}
          />

          <AppInput
            onChangeText={email => set({email})}
            ic={'mail'}
            placeholder={'Email'}
            st={{
              marginTop: h1,
            }}
            autoCapitalize={'none'}
          />

          <PasswordInput
            onChangeText={password => set({password})}
            ic={'lock-closed'}
            rightIc={hidePass ? 'ios-eye-outline' : 'ios-eye-off-outline'}
            icPress={() => set({hidePass: !hidePass})}
            placeholder={'Password'}
            secureTextEntry={hidePass}
            st={{
              marginTop: h1,
            }}
            autoCapitalize={'none'}
          />

          <B
            onPress={() => {
              console.warn('Ok');
            }}
            style={{
              width: '80%',
              paddingLeft: h1,
              height: h4,
              justifyContent: 'center',
            }}>
            <T txt={'Forget Password ?'} />
          </B>

          <AppBtn
            txt={'Sign Up'}
            st={{
              width: '50%',
            }}
            onPress={() => {
              signUp();
            }}
            // disabled
          />
        </V>
      </V>
    );
  }
}
