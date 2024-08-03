import { DocumentData, DocumentReference, getDoc, getDocs, Query } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useDoc = <T, K>(defaultValue: K, getDocRef: () => DocumentReference | null, doc2Data: (doc: DocumentData) => T) => {
    const [data, setData] = useState<T | K>(defaultValue);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const docRef = getDocRef();
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
    }, []);

    return { data, isLoading, isError };
}
export const useDocs = <T>(getQuery: () => Query | null, doc2Data: (doc: DocumentData) => T) => {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const q = getQuery();
        if (!q) {
            console.log('get query is null');
            setIsError(true);
            setIsLoading(false);
            return;
        }
        console.log('get query: ', q);
        getDocs(q).then((querySnapshot) => {
            const result: T[] = [];
            querySnapshot.forEach((doc) => console.log(doc.id, " => ", doc.data()));
            setData(result);
            setIsLoading(false);
        });
    }, []);

    return { data, isLoading, isError };
}
