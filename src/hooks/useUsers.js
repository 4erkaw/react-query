import { getUsers } from 'services/userAPI';
import { useQuery } from 'react-query';

export function useUsers() {
  const { status, data, refetch } = useQuery('clients list', () => getUsers(), {
    onError(error) {
      alert(error.message);
    },
    select(data) {
      return data.map(user => ({ ...user, iq: 15 }));
    },
    enabled: false,
  });

  return [status, data, refetch];
}
