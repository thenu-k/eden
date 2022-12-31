import { useRef, useState } from 'react';
import * as S from './MenuBar.styled'
import { BsPlusSquareFill } from "react-icons/bs";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../firebase/firebase';
import { useAuth } from '../../../auth/authContext';
import { useRouter } from 'next/router';

const MenuBar = () => {
    const {user} = useAuth()
    const modalRef = useRef()
    const [error, setError] = useState(null)
    const router = useRouter()
    const turnModalOn = () => {
        setError('')
        if(modalRef.current.classList.contains('on')===false){
            modalRef.current.classList.add('on')
        }
    }
    const handleModalClick = (e) => {
        if(e.target.querySelector('.modal.inner')!=null){
            modalRef.current.classList.remove('on')
        }
    }
    const submitNote = async(e) => {
        e.preventDefault()
        const titleValue = e.target.querySelector('#titleInput').value
        const descValue = e.target.querySelector('#descInput').value
        e.target.querySelector('#titleInput').disabled= true
        e.target.querySelector('#descInput').disabled = true
        const dbRef = collection(db, 'notes')
        const transferPackage = {
            uid: user.uid, title: titleValue, description: descValue, content: '', created: new Date()
        }
        try{
            await addDoc(dbRef, transferPackage)
            setError('Submission Sent')
            setTimeout(() => {
                modalRef.current.classList.remove('on')
                // router.reload()
            }, 1000)
        }catch (err){
            setError(err)
        }
        e.target.querySelector('#titleInput').disabled= false
        e.target.querySelector('#titleInput').value = ''
        e.target.querySelector('#descInput').disabled = false
        e.target.querySelector('#descInput').value = ''
    }
    return (
        <S.MenuBarContainer className='center box-shadow-01' id='MenuBar'>
            <div className="menubar inner">
                <div className="search outer">
                    <input type="text" placeholder='Search Inventory' className='' />
                </div>
                <div className="controls outer">
                    <button type='button' onClick={turnModalOn}>Create</button>
                </div>
            </div>
            <div id="createModal" className='center' ref={modalRef} onClick={handleModalClick}>
                <div className="inner box-shadow-02 modal">
                    <div className="title">
                        <div className="icon">
                            <BsPlusSquareFill size={30} color={'black'}/>
                        </div>
                        <h3>New Note</h3>
                    </div>
                    <form onSubmit={submitNote}>
                        <input type="text" placeholder='Title' id='titleInput' autoComplete='off'/>
                        <input type="text" placeholder='Description' id='descInput' autoComplete='off'/>
                        <button className='center'>Submit</button>
                        {
                            (error)
                                ? <div className='error'>{error}</div>
                                : null
                        }
                    </form>
                </div>
            </div>
        </S.MenuBarContainer>
    );
}

export default MenuBar;

/*
    For some reason the modal is a lower z index than the header. This is good as then the user can click the 
    nav bar without the modal closing
*/