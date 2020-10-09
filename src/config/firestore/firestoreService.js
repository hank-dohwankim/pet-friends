import firebase from './firebase';

const db = firebase.firestore();

export function getPetList() {
  const events = db.collection('pet');
  let result = [];
  events.get().then((querySnapshot) => {
    const tempDoc = querySnapshot.docs.map((doc) => {
      result.push(doc.data());
      console.log(result);
    });
  });
  console.log(result);
  return result;
}

export function getPetById(petId) {
  return db.collection('pet').doc(petId);
}
