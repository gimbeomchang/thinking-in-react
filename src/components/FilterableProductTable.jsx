import PropTypes from "prop-types";
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";
import { TProduct } from "../typings";
import { useState } from "react";

export function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState(""); // 검색어
  const [inStockOnly, setInStockOnly] = useState(false); // 체크박스 값

  return (
    <div>
      <SearchBar
        search={{
          filterText,
          onFilterTextChange: setFilterText,
          inStockOnly,
          onInStockOnlyChange: setInStockOnly,
        }}
      />
      <ProductTable products={products} search={{ filterText, inStockOnly }} />
    </div>
  );
}

FilterableProductTable.propTypes = {
  products: PropTypes.arrayOf(TProduct).isRequired,
};
