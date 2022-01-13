import { Typography } from '@material-ui/core';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';
import { makeStyles } from '@material-ui/styles';
interface Props{
    attribute:string,
    handleIconClick:(s:string)=>void
}

const UserAttributeIcon:React.FC<Props> = ({attribute,handleIconClick}) => {
    const useStyles = makeStyles((theme)=>({
        icon:{
            margin:'5px',
            cursor:"pointer"
        }
    }))
    const classes = useStyles();
    const AttributeMapping:{[key:string]:any} = {
        name:<AccountCircleIcon onClick={()=>handleIconClick("name")} className={classes.icon}/>,
        email:<MailOutlineIcon onClick={()=>handleIconClick("email")} className={classes.icon}/>,
        phone:<LocalPhoneIcon onClick={()=>handleIconClick("phone")} className={classes.icon}/>,
        location:<MapIcon onClick={()=>handleIconClick("location")} className={classes.icon}/>,
        password:<LockIcon onClick={()=>handleIconClick("password")} className={classes.icon}/>,
        dob:<EventNoteIcon onClick={()=>handleIconClick("birthday")} className={classes.icon}/>,
    }
    return AttributeMapping[attribute] ? AttributeMapping[attribute] : null
}
export default UserAttributeIcon