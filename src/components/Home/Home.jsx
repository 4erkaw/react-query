import s from './Home.module.css';
import { useUsers } from 'hooks/useUsers';

export default function Home() {
  const [status, users, refetch] = useUsers();
  if (status === 'loading') {
    return (
      <div className={s.container}>
        <h2>Loading...</h2>;
      </div>
    );
  }
  if (status === 'success') {
    return (
      <div className={s.container}>
        <ul>
          {users?.map(({ name, age, email, id }) => (
            <li key={id} className={s.item}>
              <p>Name: {name}</p>
              <p>Age: {age}</p>
              <p>Email: {email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className={s.container}>
        <h2>Oops... Something went wrong</h2>;
      </div>
    );
  }
  return (
    <button onClick={() => refetch()} type="button">
      Fetch
    </button>
  );
}

// {isLoading ? (
//     <h2>Loading...</h2>
//   ) : (
//     <div>
//
//       <ul>
//         {users ? (
//           users.map(({ name, age, email, id }) => (
//             <li key={id} className={s.item}>
//               <p>Name: {name}</p>
//               <p>Age: {age}</p>
//               <p>Email: {email}</p>
//             </li>
//           ))
//         ) : (
//           <h3>{error.message}</h3>
//         )}
//       </ul>
//     </div>
//   )}
