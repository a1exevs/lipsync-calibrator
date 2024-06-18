import React from 'react';

import NavBar from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/nav-bar';

const NavBarContainer: React.FC = () => {
  // TODO Push data to store logic
  // TODO GEt access-state from store
  const allowToExportToJSON = true;

  return <NavBar allowToExportToJSON={allowToExportToJSON} />;
};

export default NavBarContainer;
