import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 3.5rem 0;

  @media ${({ theme }) => theme.breakpoints.media.tablet} {
    padding: 7.5rem 0;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: calc(784px + 2rem);
  padding: 0 1rem;
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints.media.tablet} {
    padding: 0 2rem;
  }
`;

export {
  Wrapper,
  Container,
};

