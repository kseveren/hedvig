import { useApi, BASE_URL } from '@api';

const URL = `${BASE_URL}perils?contractType=SE_APARTMENT_RENT&locale=en_SE`;

function normalizePerils(perils) {
  if (!perils) return [];

  return perils.map(({ title, description, covered, exceptions, icon }) => ({
    title,
    description,
    covered,
    exceptions,
    icon: icon?.variants?.light?.svgUrl,
  }));
}

export const usePerils = () => {
  const { data, error, isLoading } = useApi(URL);
  const perils = normalizePerils(data);

  return { perils, error, isLoading };
};
