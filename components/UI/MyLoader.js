import React, { useEffect, useState } from 'react';
import ClientOnlyPortal from '../helpers/ClientOnlyPortal';

const MyLoader = () => {
  const [content, setContent] = useState(<div className="loader">
    <div className="loader1"></div>
    <div className="loader2"></div>
    <div className="loader3"></div>
  </div>);

  useEffect(() => {
    setTimeout(() => setContent(null), 2000);
  }, [])

  return (
    <ClientOnlyPortal>
      {content}
    </ClientOnlyPortal>
  );
};

export default React.memo(MyLoader);