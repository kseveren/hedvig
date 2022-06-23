import styled, { css } from 'styled-components';
import { mixins } from '@styles';

const CloseButton = styled.button`
  ${mixins.resetButton()}
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0.75rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  outline-color: ${({ theme }) => theme.colors.gray300};
  outline-width: thin;

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.gray700};
    }
  }

  svg {
    ${mixins.transition('fill')}
    transform: rotate(45deg);
    display: block;
    width: 1rem;
    height: 1rem;
    fill: ${({ theme }) => theme.colors.gray900};
  }
`;

const Content = styled.div`
  width: 100%;
  min-width: 320px;
  min-height: 100%;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray100};
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.06);
  transform: translateX(-50%) translateY(-50%) scale(1);
  overflow: auto;

  @media ${({ theme }) => theme.breakpoints.media.tablet_small} {
    width: calc(100% - 2rem);
    max-height: 48rem;
    border-radius: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.media.tablet} {
    ${({ maxWidth }) => maxWidth && css`max-width: ${maxWidth};`}
  }
`;

export {
  CloseButton,
  Content,
  Wrapper,
};
