import * as c from '../config/constants';

import {initializeApp} from 'firebase/app';
import {initializeFirestore} from 'firebase/firestore';
// Initialize Firebase

const firebaseConfig = {
  apiKey: c.FIREBASE_API_KEY,
  authDomain: c.FIREBASE_AUTH_DOMAIN,

  projectId: c.FIREBASE_PROJECT_ID,
  storageBucket: c.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: c.FIREBASE_MESSAGING_SENDER_ID,
  appId: c.APP_ID,
  measurementId: c.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

// for some reason it doesnt work. v
// const db = getFirestore(app);
export const DB = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
