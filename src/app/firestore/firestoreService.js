import firebase from '../config/firebase';

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  return {
    ...data,
    id: snapshot.id,
  };
}

export function getMeetingFromFirestore(observer) {
  return db.collection('pet').onSnapshot(observer);
}
