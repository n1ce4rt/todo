import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import CreateIcon from '@mui/icons-material/Create';


type propsType = {
    setActive: (status: boolean) => void
}
export const RenameBtn = ({setActive}: propsType) => {

    return (
        <IconButton 
        size='large'
        color='success'
        onClick={()=> setActive(true)}>
            <Tooltip title="Rename" placement="left">
                <CreateIcon  fontSize='medium' />
            </Tooltip>
        </IconButton>
    )
}