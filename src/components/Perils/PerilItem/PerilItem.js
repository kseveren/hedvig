import { Wrapper, Inner, IconWrapper, Title } from './styles';

export const PerilItem = ({ title, icon, onClick }) => {
  return (
    <Wrapper>
      <Inner onClick={onClick} >
        <IconWrapper>
          <img src={icon} alt={`${title} icon`} />
        </IconWrapper>
        <Title>{title}</Title>
      </Inner>
    </Wrapper>
  );
};
