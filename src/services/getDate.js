import {db} from "../firebase-config";
import {collection, getDocs} from 'firebase/firestore'

export async function getTitle() {
  const userCollectionRef = collection(db, "date")
  let date = await getDocs(userCollectionRef);
  console.log(date.docs[0].data().title)
  return date.docs[0].data().title;
}