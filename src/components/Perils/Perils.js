import { useState } from 'react';
import { usePerils } from './usePerils';
import { PerilList } from './PerilList';
import { PerilModal } from './PerilModal';
import { PerilSkeleton } from '@components/Perils/PerilSkeleton';

export const Perils = () => {
  const { perils, error, isLoading } = usePerils();

  const [currentPerilIndex, setCurrentPerilIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (error) {
    return (
      <p>{error.message}</p>
    );
  }

  if (isLoading) {
    return (
      <PerilSkeleton />
    );
  }

  if (!perils.length) return null;

  return (
    <>
      <PerilList
        perils={perils}
        onPerilClick={(index) => {
          setCurrentPerilIndex(index);
          setIsModalOpen(true);
        }}
      />
      <PerilModal
        perils={perils}
        currentPerilIndex={currentPerilIndex}
        setCurrentPerilIndex={setCurrentPerilIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
