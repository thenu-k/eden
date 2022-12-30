import * as S from './Filters.styled'

const Filters = () => {
    return (
        <S.FiltersContainer id='Filters'>
            <div className="filters inner">
                <select name="Order By" id=""className='center' >
                    <option value="" disabled selected>Date Filter</option>
                    <option value="">Newest</option>
                    <option value="">Oldest</option>
                </select>
                <select name="Order By" id=""className='center' >
                    <option value="" disabled selected>Text Filter</option>
                    <option value="">Alphabetical Asc</option>
                    <option value="">Alphabetical Desc</option>
                </select>
                <select name="Order By" id=""className='center' >
                    <option value="" disabled selected>Rating Filter</option>
                    <option value="">Ascending</option>
                    <option value="">Descinding</option>
                </select>
            </div>
        </S.FiltersContainer>
    );
}

export default Filters;