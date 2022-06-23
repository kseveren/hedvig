import styled from 'styled-components';
import { mixins } from '@styles';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  color: ${({ theme }) => theme.colors.gray900};

  &:before {
    content: '';

    @media ${({ theme }) => theme.breakpoints.media.tablet} {
      padding-top: 75%;
    }

    @media ${({ theme }) => theme.breakpoints.media.laptop} {
      padding-top: 100%;
    }
  }
`;

const Inner = styled.div`
  ${mixins.transition('box-shadow background')}
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 3.75rem;
  padding: 0.5rem 1rem 0.5rem 0.375rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media ${({ theme }) => theme.breakpoints.media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 1.25rem;
    border-radius: 0.5rem;
    
    &:hover {
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.08);
      transform: translateY(-2px);
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.gray300};
    box-shadow: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  margin-right: 0.375rem;
  flex-shrink: 0;

  @media ${({ theme }) => theme.breakpoints.media.mobile_wide} {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.media.tablet} {
    width: 3rem;
    height: 3rem;
  }

  img {
    ${mixins.objectFit('contain')}
    display: block;
    width: 100%;
    height: 100%;
    user-select: none;
  }
`;

const Title = styled.h4`
  margin: 0;
  font-size: 0.875rem;

  @media ${({ theme }) => theme.breakpoints.media.tablet} {
    font-size: 1rem;
  }
`;

export {
  Wrapper,
  Inner,
  IconWrapper,
  Title,
};
