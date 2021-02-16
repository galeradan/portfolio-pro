import MasterLayout from 'components/layouts/MasterLayout';
import React from 'react';
import IntroductionSection from 'components/sections/IntroductionSection';
import FeaturedSection from 'components/sections/FeaturedSection';
import NotableSection from 'components/sections/NotableSection';

const MainPage = () => {
  return (
    <>
      <MasterLayout>
        <IntroductionSection />
        <FeaturedSection />
        <NotableSection />
      </MasterLayout>
    </>
  );
};
export default MainPage;
