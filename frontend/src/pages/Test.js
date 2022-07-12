import ItemDetail2 from 'components/part/ItemDetail2';
import React, { useState } from 'react';


function Test() {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <React.Fragment>
            <button onClick={openModal}>모달팝업</button>

            <ItemDetail2 open={modalOpen} close={closeModal} header="Modal heading">

                팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
            </ItemDetail2>
        </React.Fragment>
    );
}

export default Test;