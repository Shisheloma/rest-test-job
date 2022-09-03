import React from 'react';

const ModalContainer = ({ children }) => {
    return (
        <div className='modal'>
            <div className="modal_overlay"></div>
            <div className='modal_content'>
                { children }
            </div>  
        </div>
    )
}
  
export default ModalContainer