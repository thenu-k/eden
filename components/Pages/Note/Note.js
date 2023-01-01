import * as S from './Note.styled'

const Note = ({noteData}) => {
    return (
        <S.NoteContainer id='Note' className='center'>
            <div className="note inner">
                {noteData.title}
            </div>
        </S.NoteContainer>
    );
}

export default Note;