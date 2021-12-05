import { SnackbarProvider as SBProvider } from 'notistack';

export const SnackbarProvider: React.FC = ({ children }) => <SBProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>{children}</SBProvider>;
