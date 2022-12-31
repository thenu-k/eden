import * as S from './MenuBar.styled'

const MenuBar = () => {
    return (
        <S.MenuBarContainer className='center box-shadow-02' id='MenuBar'>
            <div className="menubar inner">
                <div className="search outer">
                    <input type="text" placeholder='Search Inventory' className='' />
                </div>
                <div className="controls outer">
                    <button type='button'>Create</button>
                </div>
            </div>
        </S.MenuBarContainer>
    );
}

export default MenuBar;