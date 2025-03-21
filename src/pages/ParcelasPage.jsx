import React, { useEffect, useState } from "react";
import { fetchParcels } from "frontend\src\services\api.js";

const ParcelsPage = () => {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    fetchParcels().then(setParcels);
  }, []);

  return (
    <div>
      <h2>Parcelas</h2>
      <ul>
        {parcels.map((parcel) => (
          <li key={parcel.id}>Parcela {parcel.numero_parcela} - R$ {parcel.valor_parcela}</li>
        ))}
      </ul>
    </div>
  );
};
export default ParcelsPage;