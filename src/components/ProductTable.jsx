import PropTypes from "prop-types";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";
import { TProduct, TSearchForm } from "../typings";

export function ProductTable({
  products,
  search: { filterText, inStockOnly },
}) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    const { category, name, stocked } = product;

    if (name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return;

    if (inStockOnly && !stocked) return;

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
  search: TSearchForm.isRequired,
};
