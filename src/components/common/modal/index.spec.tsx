import { render, fireEvent } from '@testing-library/react';
import { Modal } from './';
import { componentsTestId } from '../../../common/constants/testid';

describe('Modal Component', () => {
  it('should not render when isOpen is false', () => {
    const { queryByText } = render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('should render children when isOpen is true', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  it('should call onClose when clicking on the background', () => {
    const handleClose = jest.fn();
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(getByTestId(componentsTestId.modal.background));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
