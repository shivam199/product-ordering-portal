import React from 'react';
import Modal from 'react-modal';
import LeftSection from '../LeftSection';

export const customStyles = {
  content: {
    top: '70px',
    left: '0%',
    right: '70%',
    bottom: '0%',
    // marginRight: '-50%',
    // transform: 'translate(-50%, -50%)',
    borderRadius: '10px'
  },
  overlay: {
    backgroundColor: "none"      
},
};
const FloatedLeftSection = ({modalIsOpen, setIsOpen}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={setIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <LeftSection />
      </Modal>
    </div>
  );
}

export default FloatedLeftSection;