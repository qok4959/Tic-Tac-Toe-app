/* eslint-disable react/prop-types */
import React from 'react';
import {Pressable, Text} from 'react-native';

export const CustomButton = props => {
  const {title = 'no-title', styles, navigation, navigateTo} = props;
  const navigationFun = () => {
    return navigation.navigate(navigateTo, {
      name: navigateTo,
      namePlayer1: props.namePlayer1,
      namePlayer2: props.namePlayer2,
    });
  };
  return (
    <>
      <Pressable
        style={styles}
        disabled={props.disabled}
        onPress={navigationFun}>
        <Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 20}}>
          {title}
        </Text>
      </Pressable>
    </>
  );
};
