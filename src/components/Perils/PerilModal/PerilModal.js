import { Modal } from '@components/Modal';
import { IChevron, ICross, IMinus } from '@icons';
import {
  Content,
  Coverage,
  CoverageList,
  CoverageItem,
  Description,
  Header,
  NavigationButton,
  Title,
  Wrapper,
} from './styles';

export const PerilModal = ({
  perils,
  currentPerilIndex,
  setCurrentPerilIndex,
  isOpen,
  onClose,
}) => {
  const currentPeril = perils[currentPerilIndex];

  const setPerilIndex = (newPerilIndex) => {
    let newIndex = newPerilIndex;

    if (newIndex < 0) {
      newIndex = perils.length - 1;
    } else if (newPerilIndex >= perils.length) {
      newIndex = 0;
    }

    setCurrentPerilIndex(newIndex);
  };

  return (
    <Modal
      isOpen={isOpen}
      maxWidth="33rem"
      onClose={onClose}
    >
      <Wrapper>
        <Header>
          <NavigationButton
            onClick={() => setPerilIndex(currentPerilIndex - 1)}
            direction="prev"
          >
            <IChevron />
          </NavigationButton>
          <Title>{currentPeril.title}</Title>
          <NavigationButton
            onClick={() => setPerilIndex(currentPerilIndex + 1)}
            direction="next"
          >
            <IChevron />
          </NavigationButton>
        </Header>
        <Content>
          <Description>{currentPeril.description}</Description>
          <Coverage>
            <CoverageList>
              {currentPeril.covered.map((item) => (
                <CoverageItem key={item}>
                  <ICross />
                  {item}
                </CoverageItem>
              ))}
            </CoverageList>
            <CoverageList>
              {currentPeril.exceptions.map((item) => (
                <CoverageItem key={item}>
                  <IMinus />
                  {item}
                </CoverageItem>
              ))}
            </CoverageList>
          </Coverage>
        </Content>
      </Wrapper>
    </Modal>
  );
};
