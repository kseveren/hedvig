import { Wrapper, Items } from './styles';
import { PerilItem } from '@components/Perils/PerilItem';

export const PerilList = ({ perils, onPerilClick }) => {
  return (
    <Wrapper>
      <Items>
        {perils.map((peril, perilIndex) => (
          <PerilItem
            key={peril.title}
            title={peril.title}
            icon={peril.icon}
            onClick={() => onPerilClick(perilIndex)}
          />
        ))}
      </Items>
    </Wrapper>
  );
};
