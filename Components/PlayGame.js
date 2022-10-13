/* eslint-disable react/prop-types */
import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, TextInput, SafeAreaView} from 'react-native';
import {
  COLOR_BACKGROUND,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
} from '../config/constants';
import {CustomButton} from './CustomButton';
import Header from './Header.js';

const PlayGame = props => {
  const [namePlayer1, setNamePlayer1] = React.useState('');
  const [namePlayer2, setNamePlayer2] = React.useState('');
  const [buttonON, setButtonOn] = React.useState(false);
  useEffect(() => {
    if (namePlayer1 == '' || namePlayer2 == '' || namePlayer1 === namePlayer2) {
      console.log('empty');
      setButtonOn(false);
    } else {
      console.log('full');
      setButtonOn(true);
    }
  }, [namePlayer1, namePlayer2]);

  return (
    <>
      <Header />
      <SafeAreaView style={styles.sectionContainer}>
        <SafeAreaView
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            onChangeText={newText => setNamePlayer1(newText)}
            style={styles.sectionName}
            placeholder="enter first player name"></TextInput>

          <TextInput
            onChangeText={newText => setNamePlayer2(newText)}
            style={styles.sectionName}
            placeholder="enter second player name"></TextInput>
        </SafeAreaView>
        <SafeAreaView
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 40,
          }}>
          <CustomButton
            disabled={!buttonON}
            styles={buttonON ? styles.btnSubmitOn : styles.btnSubmitOff}
            title="New game"
            namePlayer1={namePlayer1}
            namePlayer2={namePlayer2}
            navigation={props.navigation}
            navigateTo="game-screen"
          />
        </SafeAreaView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    minHeight: '80%',
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    color: 0x00b3b3,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  sectionName: {
    fontSize: 20,
    minWidth: '70%',
    maxWidth: '70%',
    textAlign: 'center',
    borderWidth: 4,
    borderRadius: 25,
    color: COLOR_SECONDARY,
    borderColor: COLOR_PRIMARY,
  },
  btnSubmitOn: {
    backgroundColor: COLOR_PRIMARY,
    margin: 10,
    width: 180,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSubmitOff: {
    backgroundColor: 'grey',
    margin: 10,
    width: 180,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionBottom: {
    backgroundColor: 'red',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default PlayGame;
