import { collection, doc, DocumentData, query, where } from "firebase/firestore";
import { useDocs } from "../utils";
import { db } from "..";

interface Workout {
    id: string;
    exerciseName: string;
    duration: number;
    datetime: Date;
}
export const useWorkoutOfDay = (date: Date) => useDocs<Workout>( 
    (user) => {
        if (!user || !user.email) return null;

        const start = new Date(date.setHours(0, 0, 0, 0));
        const end = new Date(date.setHours(23, 59, 59, 999));
        const q = query(
            collection(db, 'workouts'),
            where('user', '==', doc(db, 'users', user.uid)),
            where('datetime', '>=', start),
            where('datetime', '<', end),
        );

        return q;
    },
    (doc: DocumentData) => ({
        id: doc.uid,
        exerciseName: doc.data().exerciseName,
        duration: doc.data().duration,
        datetime: doc.data().datetime.toDate()
    })
);