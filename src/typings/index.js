import PropTypes from "prop-types";

const TCategory = PropTypes.string.isRequired;

const TProduct = PropTypes.shape({
  category: TCategory,
  price: PropTypes.string.isRequired,
  stocked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
});

const TSearchForm = PropTypes.shape({
  filterText: PropTypes.string.isRequired, // 검색어; required
  onFilterTextChange: PropTypes.func, // 검색어 변경 함수; optional
  inStockOnly: PropTypes.bool.isRequired, // 체크박스 값; required
  onInStockOnlyChange: PropTypes.func, // 체크박스 값 변경 함수; optional
});

export { TProduct, TCategory, TSearchForm };
