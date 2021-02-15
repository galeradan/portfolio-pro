import MasterLayout from 'components/layouts/MasterLayout';
import IntroductionSection from 'components/sections/IntroductionSection';
import ProjectSection from 'components/sections/ProjectSection';
import React from 'react';

const MainPage = () => {
  return (
    <>
      <MasterLayout>
        <IntroductionSection />
        <ProjectSection />
      </MasterLayout>
    </>
  );
};
export default MainPage;
