import React, { useEffect } from 'react';
import { getMeetingFromFireStore } from './../../../app/firestore/firestoreService';

export default function MeetingDashboard() {
  // Ignite once component amount
  useEffect(() => {
    const unsubscribe = getMeetingFromFireStore({
      next: (snapshot) =>
        console.log(snapshot.docs.map((docSnapshot) => docSnapshot.data())),
      error: (error) => console.log(error),
    });
    return unsubscribe;
  });

  return <></>;
}
