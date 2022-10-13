/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {COLOR_BACKGROUND, COLOR_PRIMARY} from '../config/constants';
import {CustomButton} from './CustomButton';
import Header from './Header.js';
const Home = ({navigation}) => {
  return (
    <>
      <Header />
      <SafeAreaView style={styles.sectionContainer}>
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
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_BACKGROUND,
  },
  button: {
    padding: 50,
  },
  buttonSubmit: {
    backgroundColor: COLOR_PRIMARY,
    margin: 10,
    width: 180,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
