import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button } from '@mui/material';
import React from 'react';

import { currentLang } from 'src/common/land/lang.helper';
import useClasses from 'src/ui/app-content/app-footer/app-footer.styles';
import MUIBox from 'src/ui/shared/components/mui-box/mui-box';

type Props = {
  showBackButton: boolean;
  onBackButtonClick: () => void;
};

const AppFooter: React.FC<Props> = ({ showBackButton, onBackButtonClick }) => {
  const classes = useClasses();

  return (
    <MUIBox className={classes.appFooter}>
      <footer>
        {showBackButton && (
          <Button
            onClick={onBackButtonClick}
            color="inherit"
            variant="text"
            size="large"
            startIcon={<KeyboardReturnIcon />}
          >
            {currentLang.labels.BACK_BTN}
          </Button>
        )}
      </footer>
    </MUIBox>
  );
};

export default AppFooter;
