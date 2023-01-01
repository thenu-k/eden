import * as S from './Note.styled'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'
import { collection, doc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../../firebase/firebase'

const Note = ({noteData}) => {
    const [content, setContent] = useState(noteData.content)
    const editor = useEditor({
        editable: true,
        extensions: [
          StarterKit,
        ],
        content:content,
        onUpdate: (({editor}) => {
            const html = editor.getHTML()
            setContent(html)
        })
    })
    const save = async() => {
        const docRef = doc(db, 'notes', noteData.noteID)
        try{
            await updateDoc(docRef, {
                content: content
            })
        }catch(err){
            console.log(err)
        }
    }
    return (
        <S.NoteContainer id='Note' className='center'>
            <div className="note inner">
                <div className="editorBar box-shadow-01 center">
                    <div className="inner editorbar">
                        <button onClick={save}>Save</button>
                    </div>
                </div>
                <div className="textEditor box-shadow-01">

                    <EditorContent editor={editor} />
                </div>
            </div>
        </S.NoteContainer>
    );
}

export default Note;