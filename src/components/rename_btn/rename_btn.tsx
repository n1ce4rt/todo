import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';
import CreateIcon from '@mui/icons-material/Create';



export const RenameBtn = () => {

    return (
        <IconButton 
        size='large'
        color='error'>
            <Tooltip title="Rename" placement="right">
                <CreateIcon  fontSize='medium'/>
            </Tooltip>
        </IconButton>
    )
}