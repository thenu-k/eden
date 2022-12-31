import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import * as S from './NoteTemplate.styled'

const NoteTemplate = ({details}) => {
    const router = useRouter()
    const redirect = () => {
        router.push(`/note/${details.noteID}`)
    }
    return (
        <S.NoteTemplateContainer className='noteTemplate center box-shadow-01' id={details.noteID} onClick={redirect}>
            <div className="inner noteTemplate">
                <div className="title com-1 center">
                    {/* <label>Title</label> */}
                    <h5 className='center'>{details.title}</h5>
                    {/* <div className="iconContainer">
                        <FaReceipt size={30}/>
                    </div> */}
                </div>
                <div className="desc com-1  center">
                    {/* <label>Description</label> */}
                    <p className='center'>{details.description}</p>
                </div>
            </div>
        </S.NoteTemplateContainer>
    );
}

export default NoteTemplate;