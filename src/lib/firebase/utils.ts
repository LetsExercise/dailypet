import { onAuthStateChanged, User } from "firebase/auth";
import { DocumentData, DocumentReference, getDoc, getDocs, Query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth } from ".";

export const useDoc = <T, K>(defaultValue: K, getDocRef: (user: User | null) => DocumentReference | null, doc2Data: (doc: DocumentData) => T) => {
    const [data, setData] = useState<T | K>(defaultValue);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            const docRef = getDocRef(user);
            if (!docRef) {
                setIsError(true);
                setIsLoading(false);
                return;
            }
            getDoc(docRef).then((docSnap) => {
                if (docSnap.exists()) {
                    setData(doc2Data(docSnap));
                } else {
                    setIsError(true);
                }
                setIsLoading(false);
            });
        })
    }, []);

    return { data, isLoading, isError };
}
export const useDocs = <T>(getQuery: (user: User | null) => Query | null, doc2Data: (doc: DocumentData) => T) => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            const q = getQuery(user);
            if (!q) {
                console.log('get query is null');
                setIsError(true);
                setIsLoading(false);
                return;
            }
            console.log('get query: ', q);
            getDocs(q).then((querySnapshot) => {
                const result: T[] = [];
                querySnapshot.forEach((doc) => result.push(doc2Data(doc)));
                setData(result);
                setIsLoading(false);
            });
        });
    }, []);

    return { data, isLoading, isError };
}
