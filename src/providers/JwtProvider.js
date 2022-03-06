import PropTypes from "prop-types";
import { useEffect } from "react";
import useAuth from "hooks/useAuth";

// ----------------------------------------------------------------------

JwtProvider.propTypes = {
  children: PropTypes.node,
};

export default function JwtProvider({ children }) {
  const { getInitialize } = useAuth();
  useEffect(() => {
    getInitialize();
  }, []);

  return <>{children}</>;
}
