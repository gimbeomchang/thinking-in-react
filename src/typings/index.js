import PropTypes from "prop-types";

const TCategory = PropTypes.string.isRequired;

const TProduct = PropTypes.shape({
  category: TCategory,
  price: PropTypes.string.isRequired,
  stocked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
});

export { TProduct, TCategory };
