/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomButton} from './CustomButton';
const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <CustomButton
          navigateTo="play-game-screen"
          navigation={navigation}
          styles={styles.buttonSubmit}
          title="Play game"
        />
        <CustomButton
          navigateTo="scores-screen"
          navigation={navigation}
          styles={styles.buttonSubmit}
          title="Scores tab"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'yellow',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 50,
  },
  buttonSubmit: {
    backgroundColor: '#24a0ed',
    margin: 10,
    width: 180,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
