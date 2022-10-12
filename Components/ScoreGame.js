import React from 'react';
import {View, Text, Pressable} from 'react-native';
// import * as c from '../config/constants';
// import {initializeApp} from 'firebase/app';
// import {getFirestore} from 'firebase/firestore/lite';
// import {doc, getDoc} from 'firebase/firestore';
import * as actions from '../model/actions.js';

// import {initializeApp} from 'firebase/app';
// import {collection, addDoc, getDocs} from 'firebase/firestore';
// import {initializeFirestore} from 'firebase/firestore';
// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: c.FIREBASE_API_KEY,
//   authDomain: c.FIREBASE_AUTH_DOMAIN,

//   projectId: c.FIREBASE_PROJECT_ID,
//   storageBucket: c.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: c.FIREBASE_MESSAGING_SENDER_ID,
//   appId: c.APP_ID,
//   measurementId: c.MEASUREMENT_ID,
// };

// const app = initializeApp(firebaseConfig);

// // for some reason it doesnt work. v
// // const db = getFirestore(app);
// const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });

// async function testRetrieveData() {
//   console.log('test fun is executed');
//   const querySnapshot = await getDocs(collection(db, 'testCollection'));
//   querySnapshot.forEach(doc => {
//     console.log(`${doc.id} => ${doc.data().getDocs}`);
//   });
// }

// async function testAddData() {
//   try {
//     console.log('test func');
//     const docRef = await addDoc(collection(db, 'testCollection'), {
//       first: 'Ada',
//       last: 'Lovelace',
//       born: 1815,
//     });
//     console.log('Document written with ID: ', docRef.id);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }
// }

const ScoreGame = () => {
  return (
    <View>
      <Pressable onPress={() => actions.retrieveData()}>
        <View style={{backgroundColor: 'red'}}>
          <Text>retrieve retrieve Data</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => actions.addData()}>
        <View style={{backgroundColor: 'red'}}>
          <Text>test add Data</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ScoreGame;
