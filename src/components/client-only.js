import React from "react"

// See https://www.joshwcomeau.com/react/the-perils-of-rehydration/
function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <div {...delegated}>
      {children}
    </div>
  );
}

export default ClientOnly;