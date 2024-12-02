// ShowComment.js
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

// DomPurify
import DOMPurify from 'dompurify';

// Date fns format
import { format } from 'date-fns';

export const useComment = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const newComments = querySnapshot.docs.map((doc) => {
          const timestamp = doc.data().timestamp?.toDate();
          const formattedTimestamp = timestamp ? format(timestamp, 'dd/MM/yyyy HH:mm') : 'Unknown Date';

          return {
            id: doc.id,
            text: DOMPurify.sanitize(doc.data().text),
            name: doc.data().name,
            kehadiran: doc.data().kehadiran,
            timestamp: formattedTimestamp,
          };
        });
        setComments(newComments);
        setLoading(false); // Menghentikan status loading setelah data dimuat
      },
      (error) => {
        console.error('Error fetching comments: ', error);
        setError('Failed to load comments. Please try again later.');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { comments, loading, error }; // Pastikan hook mengembalikan data
};
