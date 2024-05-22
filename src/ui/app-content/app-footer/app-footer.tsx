import React from 'react';

import useClasses from 'src/ui/app-content/app-footer/app-footer.styles';
import MUIBox from 'src/ui/common/components/mui-box/mui-box';

const AppFooter: React.FC = () => {
  // TODO Render back button here

  const classes = useClasses();

  return (
    <footer className={classes.appFooter}>
      <MUIBox>footer</MUIBox>
    </footer>
  );
};

export default AppFooter;
