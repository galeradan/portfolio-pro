import HeaderSVG from 'assets/images/header.svg';
import FooterSvg from 'assets/images/footer.svg';
import React, { ReactNode, useState, useEffect } from 'react';

interface MasterProps {
  children: ReactNode;
}

const MasterLayout: React.FC<MasterProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsLoading(false), 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      <img src={HeaderSVG} alt="wave-header" className="header" />
      {isLoading ? (
        <p>Content loading...</p>
      ) : (
        <main className="main container-xl">{children}</main>
      )}
      <img src={FooterSvg} alt="wave-footer" className="footer" />
    </>
  );
};
export default MasterLayout;
