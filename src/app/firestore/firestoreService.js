import firebase from '../config/firebase';

const db = firebase.firestore();

export function getMeetingFromFireStore(observer) {
  return db.collection('pet').onSnapshot(observer);
}
