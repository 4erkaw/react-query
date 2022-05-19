import { useMutation } from 'react-query';
import { createUser } from 'services/userAPI';
import { useState } from 'react';
import s from '../Home/Home.module.css';

export default function User() {
  const [data, setData] = useState({
    id: '',
    name: '',
    age: '',
    email: '',
  });

  const { mutateAsync } = useMutation(
    'create user',
    data => {
      createUser(data);
    },
    {
      onError(error) {
        alert(error.message);
      },
    }
  );

  const handleSubmit = async e => {
    e.preventDefault();
    await mutateAsync(data);
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <input
        type="text"
        value={data.id}
        onChange={e =>
          setData({
            ...data,
            id: e.target.value,
          })
        }
      />
      <input
        type="text"
        value={data.name}
        onChange={e =>
          setData({
            ...data,
            name: e.target.value,
          })
        }
      />
      <input
        type="text"
        value={data.age}
        onChange={e =>
          setData({
            ...data,
            age: e.target.value,
          })
        }
      />
      <input
        type="text"
        value={data.email}
        onChange={e =>
          setData({
            ...data,
            email: e.target.value,
          })
        }
      />
      <button type="sumbit">Create</button>
    </form>
  );
}
