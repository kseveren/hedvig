import styled from 'styled-components';
import { mixins } from '@styles';

const Content = styled.div``;

const Coverage = styled.div`
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray900};
`;

const CoverageList = styled.ul`
  ${mixins.resetList()}
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CoverageItem = styled.li`
  position: relative;
  margin-bottom: 1rem;
  padding-left: 2rem;
  font-size: 0.875rem;
  line-height: 1.5;
  
  &:last-child {
    margin-bottom: 0;
  }

  svg {
    position: absolute;
    display: block;
    left: 0;
    top: 0.25rem;
    width: 0.75rem;
    height: 0.75rem;
  }
`;

const Description = styled.div`
  margin-bottom: 3.75rem;
  font-size: 1rem;
  line-height: 1.33;

  @media ${({ theme }) => theme.breakpoints.media.tablet_small} {
    font-size: 1.125rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  
  @media ${({ theme }) => theme.breakpoints.media.laptop} {
    margin-bottom: 4rem;
  }
`;

const NavigationButton = styled.button`
  ${mixins.resetButton()}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray900};
  border-radius: 0.5rem;
  outline-color: ${({ theme }) => theme.colors.gray300};
  outline-width: thin;
  outline-offset: 3px;

  svg {
    transition: all 0.15s ease-in-out;
    fill: ${({ theme }) => theme.colors.gray900};
    transform: rotate(${({ direction }) => direction === 'next' ? '-90deg' : '90deg'});
  }
`;

const Title = styled.div`
  margin: 0 0.5rem;
  font-size: 1.5rem;
  line-height: 1.2;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.media.mobile_large} {
    font-size: 2rem;
  }
`;

const Wrapper = styled.div`
  padding: 5rem 1rem 3rem;

  @media ${({ theme }) => theme.breakpoints.media.mobile_large} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media ${({ theme }) => theme.breakpoints.media.laptop} {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export {
  Content,
  Coverage,
  CoverageList,
  CoverageItem,
  Description,
  Header,
  NavigationButton,
  Title,
  Wrapper,
};
