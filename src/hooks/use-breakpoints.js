import { useState, useEffect } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const useBreakpoints = () => {
  const { sm, md, l } = useBreakpoint();
  const [breakpoint, setBreakpoint] = useState();

  useEffect(() => {
    if (sm) setBreakpoint('mobile');
    else if (md) setBreakpoint('tablet');
    else if (l) setBreakpoint('desktop');
  }, [sm, md, l]);

  return [breakpoint];
};

export default useBreakpoints;
