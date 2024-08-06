import { collection, doc, DocumentData, query, where } from "firebase/firestore";
import { auth, db } from "..";
import { useDocs } from "../utils";

interface Diet {
    id: string;
    name: string; // 아침, 점심, 저녁, 아점...
    calorie: number;
    imageURL: string;
    datetime: Date; 
}
// TODO: react query를 쓰는게 더 좋을 수도
export const useDietOfDay = (day: Date) => useDocs<Diet>(
    (user) => {
        if (!user || !user.email) return null;
        
        const start = new Date(day.setHours(0, 0, 0, 0));
        const end = new Date(day.setHours(23, 59, 59, 999));
        const q = query(
            collection(db, 'diets'),
            where('user', '==', doc(db, 'users', user.uid)),
            where('datetime', '>=', start),
            where('datetime', '<', end),
        );

        return q;
    },
    (doc: DocumentData) => ({
        id: doc.uid ,
        name: doc.data().name,
        calorie: doc.data().calorie,
        imageURL: doc.data().imageURL+'?alt=media',
        datetime: doc.data().datetime.toDate()
    })
); 