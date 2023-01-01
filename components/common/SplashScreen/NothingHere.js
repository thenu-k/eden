import * as S from './NothingHere.styled'

const NothingHere = () => {
    return (
        <S.NothingHereContainer id='NothingHere' className='center'>
            <div className="nothinghere inner box-shadow-02">
                <div className="image"></div>
                <p className='center'>There's Nothing Here</p>
            </div>
        </S.NothingHereContainer>
    );
}

export default NothingHere;