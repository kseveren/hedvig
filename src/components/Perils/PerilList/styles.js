import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const Items = styled.div`
  width: calc(100% + 0.5rem);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-bottom: -0.5rem;

  @media ${({ theme }) => theme.breakpoints.media.tablet} {
    width: calc(100% + 1rem);
    margin-left: -1rem;
    margin-bottom: 1rem;
  }
  
  > * {
    width: calc(50% - 0.5rem);
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;

    @media ${({ theme }) => theme.breakpoints.media.tablet} {
      width: calc(100% / 3 - 1rem);
      margin-left: 1rem;
      margin-bottom: 1rem;
    }

    @media ${({ theme }) => theme.breakpoints.media.laptop} {
      width: calc(25% - 1rem);
    }
  }
`;

export {
  Wrapper,
  Items,
};
