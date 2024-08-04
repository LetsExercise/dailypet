import { collection, doc, DocumentData, query, where } from "firebase/firestore";
import { useDocs } from "../utils";
import { db } from "..";


const orderLabel = ['첫번째', '두번째', '세번째', '네번째', '다섯번째', '여섯번째', '일곱번째', '여덟번째', '아홉번째', '열번째'];
interface Sleep {
    id: string;
    label: string;
    sleepStart: Date;
    sleepEnd: Date;
}
export const useSleepOfDay = (day: Date) => useDocs<Sleep>(
    (user) => {
        if (!user || !user.email) return null;

        // TODO: 오늘의 수면 판정 수정 필요(새벽 1시에 자는 사람이 있을 수도...)        
        const start = new Date(day.setHours(0, 0, 0, 0));
        const end = new Date(day.setHours(23, 59, 59, 999));
        const q = query(
            collection(db, 'sleeps'),
            where('user', '==', doc(db, 'users', user.uid)),
            where('sleepStart', '>=', start),
            where('sleepStart', '<', end),
        );

        return q;
    },
    (doc: DocumentData, order) => ({
        id: doc.uid,
        label: orderLabel[order as number],
        sleepStart: doc.data().sleepStart.toDate(),
        sleepEnd: doc.data().sleepEnd.toDate(),
    })
);