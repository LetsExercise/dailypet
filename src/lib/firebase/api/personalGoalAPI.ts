import { PersonalGoals } from "@/app/_common/_util/storage";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "..";
import { doc, updateDoc } from "firebase/firestore";

export const postPersonalGoal = async (personalGoals: PersonalGoals) => {
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