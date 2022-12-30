import * as S from './Tags.styled'

const Tags = () => {
    return (
        <S.TagsContainer id='Tags'>
            <ul>
                <li><button>Resolved</button></li>
                <li><button>Unresolved</button></li>
                <li><button>Completed</button></li>
                <li><button>Random</button></li>
            </ul>
        </S.TagsContainer>
    );
}

export default Tags;