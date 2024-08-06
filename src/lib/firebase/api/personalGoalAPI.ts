import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "..";
import { doc, DocumentData, updateDoc } from "firebase/firestore";
import { useDoc } from "../utils";

export interface PersonalGoals{
    diet?: {
        calories: number;
        dietTime: {
            label: string;
            time: number;
        }[];
    };
    sleep?: {
        sleepEnd: number;
        sleepStart: number;
    };
    workout?: {
        week: number;
        start: number;
        end: number;
    }[];
}

export const postPersonalGoals = async (personalGoals: PersonalGoals) => {
    if(!(personalGoals.workout || personalGoals.diet || personalGoals.sleep)){
        alert('목표를 입력해주세요.');
    }   

    onAuthStateChanged(auth, async (user) => {
        if (!user || !user.email) return;
        const docRef = doc(db, 'users', user.uid);
        updateDoc(docRef, {personalGoals})
            .then(() => alert('저장되었습니다.'))
            .catch((error) => {
                console.error('Error updating document: ', error);
                alert('저장에 실패했습니다.');
            });
    });
}
export const usePersonalGoals = () => useDoc<PersonalGoals, PersonalGoals>(
    { workout: [], diet: {calories: 0, dietTime: []}, sleep: {sleepEnd: 0, sleepStart: 0} },
    (user) => {
        if (!user || !user.email) return null;
        return doc(db, 'users', user.uid);
    },
    (doc: DocumentData) => {
        return doc.data().personalGoals;
    }
);
