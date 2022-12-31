import { useRef } from 'react';
import * as S from './MenuBar.styled'

const MenuBar = () => {
    const modalRef = useRef()
    const turnModalOn = () => {
        if(modalRef.current.classList.contains('on')===false){
            modalRef.current.classList.add('on')
        }
    }
    const handleModalClick = (e) => {
        if(e.target.querySelector('.modal.inner')!=null){
            modalRef.current.classList.remove('on')
        }
    }
    return (
        <S.MenuBarContainer className='center box-shadow-02' id='MenuBar'>
            <div className="menubar inner">
                <div className="search outer">
                    <input type="text" placeholder='Search Inventory' className='' />
                </div>
                <div className="controls outer">
                    <button type='button' onClick={turnModalOn}>Create</button>
                </div>
            </div>
            <div id="createModal" className='center' ref={modalRef} onClick={handleModalClick}>
                <div className="inner box-shadow-02 modal">

                </div>
            </div>
        </S.MenuBarContainer>
    );
}

export default MenuBar;