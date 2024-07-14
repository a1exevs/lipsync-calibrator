import { AlertColor } from '@mui/material/Alert/Alert';

export type ErrorType = AlertColor;
export type Error = { type: ErrorType; message: string };
export type SetErrorFn = (message: string, type: ErrorType) => void;
export type ResetErrorFn = () => void;
