import React from 'react';
import Modal from 'react-modal';
import CartList from '../CartList';
import LeftSection from '../LeftSection';

export const customStyles = {
  content: {
    top: '0%',
    left: '60%',
    right: '0%',
    bottom: '0%',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    borderRadius: '10px'
  },
  overlay: {
    backgroundColor: "none"      
},
};
const ShowAllCartProduct = ({modalIsOpen, setIsOpen}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={setIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <CartList />
      </Modal>
    </div>
  );
}

export default ShowAllCartProduct;