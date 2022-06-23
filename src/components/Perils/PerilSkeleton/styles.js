import styled from 'styled-components';
import { Wrapper, Items } from '../PerilList/styles';

const Item = styled.div`
  position: relative;
  display: flex;
  min-height: 3.75rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.gray200};
  overflow: hidden;

  @media ${({ theme }) => theme.breakpoints.media.tablet} {
    border-radius: 0.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.media.laptop} {
    &:nth-child(n+5) {
      display: none;
    }
  }

  &:before {
    content: '';

    @media ${({ theme }) => theme.breakpoints.media.tablet} {
      padding-top: 75%;
    }

    @media ${({ theme }) => theme.breakpoints.media.laptop} {
      padding-top: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.2) 20%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0)
    );
    animation: shimmer 1.75s infinite;
  }

  @keyframes shimmer {
    80%, 100% {
      transform: translateX(100%);
    }
  }
`;

export {
  Wrapper,
  Items,
  Item,
};
