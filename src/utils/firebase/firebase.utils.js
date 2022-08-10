import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc,getDocs,writeBatch,collection,query } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAszP1wzwP6O1z9tl6877Lf7c-r0K2MRiQ",
    authDomain: "my-aqua-shop.firebaseapp.com",
    projectId: "my-aqua-shop",
    storageBucket: "my-aqua-shop.appspot.com",
    messagingSenderId: "778876408767",
    appId: "1:778876408767:web:45d8f3358cb9002281470a"
  };
  
  // Initialize Firebase
  const FirebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  
  export const db = getFirestore(FirebaseApp);
  export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionKey);
    
    objectsToAdd.forEach((object) => {
       const docRef = doc(collectionRef, object.title.toLowerCase());
       batch.set(docRef, object);
    });
  
    await batch.commit();
    console.log('done');
  };
  
  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
  };
  
  //Getting the user details from credentials
  export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
  ) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
  };
  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };
  export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);