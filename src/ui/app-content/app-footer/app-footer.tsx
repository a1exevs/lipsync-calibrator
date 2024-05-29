import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button } from '@mui/material';
import React from 'react';

import { currentLang } from 'src/common/land/lang.helper';
import useClasses from 'src/ui/app-content/app-footer/app-footer.styles';
import MUIBox from 'src/ui/common/components/mui-box/mui-box';

type Props = {
  showBackButton: boolean;
};

const AppFooter: React.FC<Props> = ({ showBackButton }) => {
  const classes = useClasses();

  return (
    <footer className={classes.appFooter}>
      <MUIBox>
        {showBackButton && (
          <Button color="inherit" variant="text" size="large" startIcon={<KeyboardReturnIcon />}>
            {currentLang.labels.BACK_BTN}
          </Button>
        )}
      </MUIBox>
    </footer>
  );
};

export default AppFooter;
