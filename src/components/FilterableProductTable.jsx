import PropTypes from "prop-types";
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";
import { TProduct } from "../typings";

export function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

FilterableProductTable.propTypes = {
  products: PropTypes.arrayOf(TProduct).isRequired,
};
