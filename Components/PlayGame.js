/* eslint-disable react/prop-types */
import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {CustomButton} from './CustomButton';

const PlayGame = props => {
  const [name, setName] = React.useState('');
  const [buttonON, setButtonOn] = React.useState(false);

  const handleChange = e => {
    setName(e);
  };

  useEffect(() => {
    if (name == '') {
      console.log('empty');
      setButtonOn(false);
    } else {
      console.log('full');
      setButtonOn(true);
    }
  }, [name]);

  console.log(name);
  return (
    <>
      <Text style={styles.sectionHeader}>Tic-TacToe</Text>
      <View style={styles.sectionContainer}>
        <TextInput
          onChangeText={e => handleChange(e)}
          style={styles.sectionName}
          placeholder="enter your name"></TextInput>
      </View>
      {buttonON ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}>
          <CustomButton
            styles={styles.btnSubmit}
            title="New game"
            navigation={props.navigation}
            navigateTo="game-screen"
          />
        </View>
      ) : (
        /*{ <TouchableWithoutFeedback
          style={styles.sectionBottom}
          onPress={e => handleChange(e)}>
          <View style={styles.btnSubmit}>
            <Text style={styles.textBtn}>New game</Text>
          </View>
        </TouchableWithoutFeedback> }*/

        ''
      )}
    </>
    // </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    // flexDirection: 'row',

    minHeight: '80%',
    flex: 1,
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
    fontSize: 30,
  },
  btnSubmit: {
    backgroundColor: '#24a0ed',
    margin: 10,
    width: 180,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#ffffff',
  },
  sectionBottom: {
    backgroundColor: 'red',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default PlayGame;
