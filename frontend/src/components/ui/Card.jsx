import PropTypes from "prop-types";

export function Card({ children }) {
  return <div className="bg-zinc-800 p-14 rounded-md">{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
