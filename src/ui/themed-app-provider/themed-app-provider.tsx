import { PaletteMode, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { ReactNode, useState } from 'react';

import ColorModeContext from 'src/ui/themed-app-provider/color-mode-context';

type Props = {
  children: ReactNode;
};

const ThemedAppProvider: React.FC<Props> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const initialThemeMode = prefersDarkMode ? 'dark' : 'light';
  const [themeMode, setThemeMode] = useState<PaletteMode>(initialThemeMode);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemedAppProvider;
