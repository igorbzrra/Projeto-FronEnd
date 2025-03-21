import React, { useEffect, useState } from "react";
import { fetchAccounts } from "frontend\src\services\api.js";

const AccountsPage = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchAccounts().then(setAccounts);
  }, []);

  return (
    <div>
      <h2>Contas</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>{account.descricao} - R$ {account.valor}</li>
        ))}
      </ul>
    </div>
  );
};
export default AccountsPage;
