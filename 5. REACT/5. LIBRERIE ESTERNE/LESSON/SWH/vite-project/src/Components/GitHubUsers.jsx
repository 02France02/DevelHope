import { Link, Outlet } from "react-router-dom";
import { useGithubUsers } from "./useGithubUsers";

const GitHubUsers = () => {
  // Utilizzo del hook useGithubUsers per recuperare i dati degli utenti di GitHub
  const { users, error, isLoading, onRefresh } = useGithubUsers();

  return (
    <>
      <button onClick={onRefresh}>REFRESH</button>
      {/* Mostra un messaggio di caricamento se isLoading è true */}
      {isLoading && <h3>loading...</h3>}

      {/* Mostra un messaggio di errore se error è true */}
      {error && <h3>Error Fetch...</h3>}

      <Link to="/">Home</Link>

      {/* Mostra la lista degli utenti se i dati sono stati recuperati con successo */}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </>
  );
};

export default GitHubUsers;
