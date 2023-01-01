import { collection, getDocs, query, where } from 'firebase/firestore';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../../components/auth/authContext';
import PermissionCheck from '../../components/common/SplashScreen/PermissionCheck';
import Note from '../../components/Pages/Note/Note';
import { db } from '../../firebase/firebase';

export default function Home() {
  const [noteData, setNoteData] = useState(null)
  const router = useRouter()
  const {user} = useAuth()
  const getNote = async() => {
    const noteID = router.query['noteID']
    const q = query(collection(db, "notes"), where('__name__', "==", noteID), where('uid','==',user.uid));
    try{
      const rawData = await getDocs(q);
      const result = rawData.docs.map(doc => ({
        noteID: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        content: doc.data().content,
        created: doc.data().created
      })) 
      if(result.length===0){
        setNoteData(0)
      }else{
      setNoteData(result[0])
      }
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    getNote()
  },[])
  return (
    <>
      <Head>
        <title>Eden | Note</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        (noteData===0) ? <>Does Not Exist</> : (
          (noteData!=null)
            ? <Note noteData={noteData}/>
            : <PermissionCheck/>
        )
      }
    </>
  )
}
