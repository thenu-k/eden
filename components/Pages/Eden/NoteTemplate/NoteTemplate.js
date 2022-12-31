import * as S from './NoteTemplate.styled'
import { FaReceipt } from "react-icons/fa";

const NoteTemplate = ({details}) => {
    return (
        <S.NoteTemplateContainer className='noteTemplate center box-shadow-02'>
            <div className="inner noteTemplate">
                <div className="title com-1">
                    {/* <label>Title</label> */}
                    <div className="iconContainer">
                        <FaReceipt size={30}/>
                        <h5 className='center'>{details.title}</h5>
                    </div>
                </div>
                <div className="desc com-1">
                    {/* <label>Description</label> */}
                    <p className='center'>{details.description}</p>
                </div>
                <div className="created com-1">
                    {/* <label>Created</label> */}
                    <span className='center'>{details.created}</span>
                </div>
            </div>
        </S.NoteTemplateContainer>
    );
}

export default NoteTemplate;