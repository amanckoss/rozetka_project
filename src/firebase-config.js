import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEzFkmpCesENvz-jeciStpn-4mrJsh4fE",
  authDomain: "react-app-4ba05.firebaseapp.com",
  projectId: "react-app-4ba05",
  storageBucket: "react-app-4ba05.appspot.com",
  messagingSenderId: "140745073789",
  appId: "1:140745073789:web:bf7bc2a4b204a9e9bc7d14"
};

const app = initializeApp(firebaseConfig);

export const  db = getFirestore(app);