import { styled } from '@mui/system';

export const Row: React.FC = styled('div')({ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' });

export const RowSpaceEvenly: React.FC = styled(Row)({ justifyContent: 'space-evenly' });
export const RowSpaceBetween: React.FC = styled(Row)({ justifyContent: 'space-between' });
export const RowSpaceAround: React.FC = styled(Row)({ justifyContent: 'space-around' });
