import { useGitHubUser } from "./useGitHubUser";
import { useParams } from "react-router-dom";

export function GithubUser() {
  const { username } = useParams();
  const { data, loading, error, onFetchUser } = useGitHubUser(username);

  function handleGetUserData() {
    onFetchUser();
  }

  return (
    <div>
      <button onClick={handleGetUserData}>Carica dati utente</button>
      {loading && <h1>Caricamento...</h1>}
      {error && <h1>Si è verificato un errore</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
