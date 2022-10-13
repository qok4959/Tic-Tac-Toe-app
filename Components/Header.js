import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {COLOR_PRIMARY, COLOR_BACKGROUND} from '../config/constants';
const Header = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionHeader}>Tic-Tac-Toe</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {color: COLOR_PRIMARY, fontSize: 60, fontWeight: 'bold'},
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginTop: 30,
    backgroundColor: COLOR_BACKGROUND,
  },
});

export default Header;
