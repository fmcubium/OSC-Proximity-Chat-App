import { messagesCollection } from '../utilities/firebaseInit'
import { query, getDocs, deleteDoc, where } from 'firebase/firestore'

//Delete all messages older than a passed in time, in ms
export const deleteMessages = async(expiryTime: number) => {
    const q = query(messagesCollection, where('timeSent', '<=', (Date.now() - expiryTime)))

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(async (doc) => {
        //Delete the doc here
        console.log(doc.id)
        await deleteDoc(doc.ref)
    })
}