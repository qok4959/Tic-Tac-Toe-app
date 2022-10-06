/* eslint-disable react/prop-types */
import React from 'react';
import {Pressable, Text} from 'react-native';

export const CustomButton = props => {
  const {title = 'no-title', styles, navigation, navigateTo} = props;
  return (
    <>
      <Pressable
        style={styles}
        onPress={() =>
          navigation.navigate(navigateTo, {
            name: navigateTo,
          })
        }>
        <Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 20}}>
          {title}
        </Text>
      </Pressable>
    </>
  );
};
// export default CustomButton;
