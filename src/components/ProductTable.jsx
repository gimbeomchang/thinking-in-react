import PropTypes from "prop-types";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";
import { TProduct } from "../typings";

export function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    const { category, name } = product;

    if (category !== lastCategory) {
      rows.push(<ProductCategoryRow key={category} category={category} />);
    }
    rows.push(<ProductRow key={name} product={product} />);

    lastCategory = category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
}

ProductTable.propTypes = {
  products: PropTypes.arrayOf(TProduct).isRequired,
};
