import * as S from './Eden.styled'
import MenuBar from './MenuBar/MenuBar';
import NoteTemplate from './NoteTemplate/NoteTemplate';

const Eden = () => {
    const data = [
        {
            title: 'Test', description: 'Hello World', created: '2012-12-12'
        }
    ]
    return (
        <S.EdenContainer className='center' id='Eden'>
            <div className="eden inner">
                <MenuBar/>
                <div className="noteList">
                    {
                        data.map(element => {return(
                            <NoteTemplate details={element}/>
                        )})
                    }
                </div>
            </div>
        </S.EdenContainer>
    );
}

export default Eden;