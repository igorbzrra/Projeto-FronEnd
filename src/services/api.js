const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (login, senha) => {
  const response = await fetch(`${API_URL}/api/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login, senha }),
  });
  return response.json();
};

export const fetchAccounts = async () => {
  const response = await fetch(`${API_URL}/api/accounts/list`);
  return response.json();
};
