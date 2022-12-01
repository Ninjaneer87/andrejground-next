import React, {forwardRef} from 'react';
import ClientOnlyPortal from '../portals/ClientOnlyPortal';

const PageTop = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ClientOnlyPortal>
      <span ref={ref} className='absolute top-0 left-0' />
    </ClientOnlyPortal>
  );
});

PageTop.displayName = 'PageTop';
export default PageTop;