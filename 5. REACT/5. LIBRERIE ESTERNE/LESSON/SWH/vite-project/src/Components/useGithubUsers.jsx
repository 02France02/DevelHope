import useSWR from "swr";


// Hook personalizzato useGithubUsers per recuperare i dati degli utenti di GitHub utilizzando SWR

export const useGithubUsers = () => {
  // 1 Utilizzo di useSWR per effettuare la richiesta di fetch e gestire la cache dei dati
  const { data, error, mutate} = useSWR(`https://api.github.com/users`);

  const handleRefrashUsers = () => {
    mutate() //2
  }
  // Restituzione degli utenti, dell'errore e dello stato di caricamento
  return {
    users: data,
    error,
    isLoading: !data && !error, // Stato di caricamento: true se non ci sono ancora dati e non ci sono errori
    onRefresh: handleRefrashUsers() //3
  };
};
