import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {getFirestore, getDoc, doc, setDoc} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDP5AcWZvwTAN3GOixx8HS9O7W436OJW7M",
    authDomain: "testing-firebase-bfd04.firebaseapp.com",
    projectId: "testing-firebase-bfd04",
    storageBucket: "testing-firebase-bfd04.appspot.com",
    messagingSenderId: "627803521368",
    appId: "1:627803521368:web:ad49bf12c42cd3a1cc652d"
  };

  initializeApp(firebaseConfig);

  export const auth = getAuth();
  export const db = getFirestore();

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => signInWithPopup(auth, provider)
  .then((res)=>{
     console.log('user signed in');
  })
  .catch((err)=>{
     console.log(err);
  })

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
      // if(!userAuth) return;
      
      const userDocRef = doc(db, 'users', userAuth.uid);
      // const userColRef = collection(db, 'users');
      const snapshot = await getDoc(userDocRef);
      console.log(snapshot.data(), snapshot.exists())

      if(!snapshot.exists()){
         const {displayName, email} = userAuth;
         const createdAt = new Date();
         try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalData})
            console.log('user created')
         } catch (err) {
            console.log('error creating user', err.message)
         }
      }

      // const user = await getDoc(doc(db, 'users', 'r45dnSlOlV3j0NcFiq8J'))
      // console.log({...user.data()})
      return userDocRef;

      
      // .then(doc=>{
      //    console.log(doc.data(),doc.exists(), doc.id)
      // }).catch(err => console.log(err.message))

  }
