import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from ".";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export const login = (email: string, password: string, onSuccess: () => void) => {
    signInWithEmailAndPassword(auth, String(email), String(password))
    .then((_) => {
        onSuccess();
    })
    .catch((error) => {
        // TODO: 사용자에게 명확한 에러 메시지 표시
        console.log(error);
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
    });
};
export const signup = (email: string, password: string, onSuccess: () => void) => {
    createUserWithEmailAndPassword(
      auth,
      String(email),
      String(password)
    )
      .then((userCredential) => {
        setDoc(doc(db, "users", userCredential.user.uid), {
          userId: String(name),
        });
        onSuccess();
      })
      .catch((error) => {
        // TODO: 이메일 형식이 잘못되거나 중복될 경우 사용자 관점에서 명확한 에러 처리
        console.log(error);
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      });
};

export interface UserInfo {
    email: string;
    name: string;
}
/*
유저 정보 get
ex) 
  const SomeComponent = () => {
    const { userInfo, isLoading, isError } = useUserInfo();
    console.log(auth.currentUser);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error occured</div>;

    return <div>{userInfo.name}</div>;
  }
*/
export const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState<UserInfo>({
        email: "",
        name: "",
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchUserInfo = async () => {
      const user = auth.currentUser;
      if(!user || !user.email) return null;
      const docRef = doc(db, "users", user.uid)    

      const docSnap = await getDoc(docRef)
      if(docSnap.exists()) {
        const result: UserInfo = { email: user.email, name: docSnap.data().userId };
        return result; 
      } else {
          // TODO: 사용자 정보가 없으나 회원가입이 완료된 경우
          return { email: user.email, name: "anonymous" };
      }
    }

    useEffect(() => {
      fetchUserInfo().then((info) => {
          if(info) {
              setUserInfo(info);
          }
          setIsLoading(false);
      }).catch((e) => {
        setIsError(true)
      });
    }, [])

    return { userInfo, isLoading, isError };
}