import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import { Button } from '@mui/material';
import { useConfirm } from 'material-ui-confirm';
import React from 'react';

import { currentLang } from 'src/common/land/lang.helper';
import useClasses from 'src/ui/app-content/app-footer/app-footer.styles';
import MUIBox from 'src/ui/shared/components/mui-box/mui-box';

type Props = {
  showBackButton: boolean;
  onBackButtonClick: () => void;
  wasMorphTargetDataChanged: boolean;
};

const AppFooter: React.FC<Props> = ({ showBackButton, onBackButtonClick, wasMorphTargetDataChanged }) => {
  const classes = useClasses();
  const confirm = useConfirm();

  const handleBackButtonClick = async () => {
    try {
      if (wasMorphTargetDataChanged) {
        await confirm({
          title: currentLang.labels.CONFIRMATION,
          description: currentLang.messages.UNSAVED_PLOT_CHANGES_BACK_BUTTON_CONFIRMATION,
          cancellationButtonProps: { color: 'secondary' },
        });
      }
      onBackButtonClick();
    } catch {
      // cancel confirmation
    }
  };

  return (
    <MUIBox className={classes.appFooter}>
      <footer>
        {showBackButton && (
          <Button
            onClick={handleBackButtonClick}
            color="secondary"
            variant="outlined"
            size="large"
            startIcon={<RestartAltOutlinedIcon />}
          >
            {currentLang.labels.RESET}
          </Button>
        )}
      </footer>
    </MUIBox>
  );
};

export default AppFooter;
