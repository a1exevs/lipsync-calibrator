import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

import { Nillable } from 'src/common/types/common';
import { Option } from 'src/ui/shared/components/mui-select/mui-select.types';

type Props = {
  label: string;
  handleChange: (event: SelectChangeEvent) => void;
  currentOptionId: Nillable<string>;
  options: Option[];
};

const MUISelect: React.FC<Props> = ({ label, handleChange, currentOptionId, options }) => {
  const currentOption = options.find(option => option.id === currentOptionId);

  return (
    <FormControl fullWidth size="small">
      <InputLabel>{label}</InputLabel>
      <Select title={currentOption?.value ?? ''} value={currentOption?.id ?? ''} label={label} onChange={handleChange}>
        {options.map(({ id, value }) => (
          <MenuItem title={value} key={id} value={id}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MUISelect;
