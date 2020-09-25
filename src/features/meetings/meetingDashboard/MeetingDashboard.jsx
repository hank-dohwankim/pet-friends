import React, { useEffect } from 'react';
import {
  getMeetingFromFirestore,
  dataFromSnapshot,
} from './../../../app/firestore/firestoreService';

export default function MeetingDashboard() {
  // Ignite once component amount
  useEffect(() => {
    const unsubscribe = getMeetingFromFirestore({
      next: (snapshot) =>
        console.log(
          snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
        ),
      error: (error) => console.log(error),
    });
    return unsubscribe;
  });

  return <></>;
}
