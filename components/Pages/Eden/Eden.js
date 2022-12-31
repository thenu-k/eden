import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase/firebase';
import { useAuth } from '../../auth/authContext';
import * as S from './Eden.styled'
import MenuBar from './MenuBar/MenuBar';
import NoteTemplate from './NoteTemplate/NoteTemplate';

const Eden = () => {
    const testData = [
        {
            title: 'Test', description: 'This is a test to see whether long text can be handled', created: '2012-12-12'
        },
        {
            title: 'Test', description: 'Hello World', created: '2012-12-12'
        },
        {
            title: 'Test', description: 'Hello World', created: '2012-12-12'
        },
        {
            title: 'Test', description: 'Hello World', created: '2012-12-12'
        }
    ]
    const [data, setData] = useState(null)
    const {user} = useAuth()
    const getData = async() => {
        const uid = user.uid
        const q = query(collection(db, "notes"), where('uid', "==", uid), orderBy('created', 'desc'));
        try{
            const rawData = await getDocs(q);
            const result = rawData.docs.map(doc => ({
                noteID: doc.id,
                title: doc.data().title,
                description: doc.data().description,
            })) 
            setData(result)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    
    return (
        <S.EdenContainer className='center' id='Eden'>
            <div className="eden inner">
                <MenuBar/>
                <div className="noteList">
                    {
                        (data)
                            ?   (data.map(element => {return(
                                    <NoteTemplate details={element}/>
                                )}))
                            :   null
                    }
                </div>
            </div>
        </S.EdenContainer>
    );
}

export default Eden;