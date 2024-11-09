import useFetch from './useFetch';

export default function usePlayerNames(player) {
  return useFetch('/players?filter=names', 'POST');
}