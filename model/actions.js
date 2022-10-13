import * as actions from '../config/firebase';
import {collection, addDoc, getDocs} from 'firebase/firestore';

export async function retrieveData() {
  const data = [];
  console.log('test fun is executed');
  const querySnapshot = await getDocs(collection(actions.DB, 'scores'));
  querySnapshot.forEach(doc => {
    data.push(doc.data());
  });

  console.log('in function', data[1]['players']);
  return data;
}

export async function addData(winner = 'no data', players = 'no data') {
  try {
    console.log('test func');
    const docRef = await addDoc(collection(actions.DB, 'scores'), {
      winner: winner,
      time: new Date(),
      players:
        players === 'no data' ? 'no data' : `${players[0]} vs ${players[1]}`,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
