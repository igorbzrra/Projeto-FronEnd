import React, { useEffect, useState } from "react";
import { fetchCategories } from "frontend\src\services\api.js";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  return (
    <div>
      <h2>Categorias</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.descricao}</li>
        ))}
      </ul>
    </div>
  );
};
export default CategoriesPage;