import * as S from './Note.styled'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useState } from 'react'
import { collection, doc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../../firebase/firebase'
import { useRouter } from 'next/router'
import { FaBold, FaHeading, FaParagraph, FaListUl,FaArrowLeft, FaSave } from "react-icons/fa";

const MenuBar = ({ editor}) => {
    if (!editor) {
      return null
    }
    const toggleColor = (button) => {
      button.classList.toggle('active')
    }
    return (
      <>
        <button
          onClick={(e) => {e.preventDefault(); editor.chain().focus().toggleBold().run()}}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <FaBold />
        </button>
        <button
          onClick={(e) => {e.preventDefault(); editor.chain().focus().setParagraph().run()}}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          <FaParagraph/>
        </button>
        <button
          onClick={(e) => {e.preventDefault();editor.chain().focus().toggleHeading({ level: 3 }).run()}}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          <FaHeading/>
        </button>
      </>
    )
  }

const Note = ({noteData}) => {
    const router = useRouter()
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
    const back = () => {
        router.push('/notebook')
    }
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
                        <div className="controls">
                          <button className="back" onClick={back}><FaArrowLeft/></button>
                          <MenuBar editor={editor}/>
                          <button onClick={save} className='save'><FaSave/></button>
                        </div>
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