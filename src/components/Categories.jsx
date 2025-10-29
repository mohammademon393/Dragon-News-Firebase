import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch("/categories.json").then((res)=>
    res.json());

const Categories = () => {
    const categories = use(categoriesPromise);
    
    return (
      <div>
        <h2 className="font-bold">All Cetegories ({categories.length})</h2>

        <div className="grid grid-cols-1 gap-3 mt-5">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={`/category/${category.id}`}
              className={"btn bg-base-100 border-0 text-accent font-semibold hover:bg-base-200"}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
};

export default Categories;