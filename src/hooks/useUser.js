import { getUserById } from 'services/userAPI';
import { useQuery } from 'react-query';

export function useUser(id) {
  const { status, data } = useQuery(
    ['clients list', id],
    () => getUserById(id),
    {
      onError(error) {
        alert(error.message);
      },
      enabled: !!id,
    }
  );

  return [status, data];
}
