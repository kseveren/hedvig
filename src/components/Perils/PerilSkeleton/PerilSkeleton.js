import { Wrapper, Items, Item } from './styles';

const SKELETON_ITEMS_AMOUNT = 6;

export const PerilSkeleton = () => (
  <Wrapper>
    <Items>
      {Array.from({ length: SKELETON_ITEMS_AMOUNT }, (x, i) => i).map((index) => (
        <Item key={index} />
      ))}
    </Items>
  </Wrapper>
);
