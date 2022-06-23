import ReactModal from 'react-modal';
import { ICross } from '@icons';
import { CloseButton, Content, Wrapper } from './styles';

const customStyles = {
  content: {
    position: 'static',
    background: 'transparent',
    margin: 0,
    padding: 0,
    borderRadius: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(25, 25, 25, 0.4)',
  },
};

export const Modal = ({ children, isOpen = false, maxWidth, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={() => document.body.style.overflow = 'hidden'}
      onAfterClose={() => document.body.style.overflow = 'unset'}
      onRequestClose={onClose}
      style={customStyles}
    >
      <Wrapper maxWidth={maxWidth}>
        <Content>
          <CloseButton onClick={onClose} aria-label="Close modal">
            <ICross />
          </CloseButton>
          {children}
        </Content>
      </Wrapper>
    </ReactModal>
  );
};
