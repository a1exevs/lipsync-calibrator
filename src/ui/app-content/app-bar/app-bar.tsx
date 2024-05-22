import MUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import useClasses from 'src/ui/app-content/app-bar/app-bar.styles';
import MUIBox from 'src/ui/common/components/mui-box/mui-box';

type Props = {
  title: string;
};

const AppBar: React.FC<Props> = ({ title }) => {
  const classes = useClasses();

  return (
    <MUIBox className={classes.appBar}>
      <MUIAppBar position="fixed">
        <Toolbar>
          <div className={classes.appBar__leftBlock}>
            <Typography variant="h6" color="inherit">
              {title}
            </Typography>
          </div>
        </Toolbar>
      </MUIAppBar>
    </MUIBox>
  );
};

export default AppBar;
