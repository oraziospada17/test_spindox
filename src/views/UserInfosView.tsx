import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import UserInfos from '../components/UserInfos';
interface Props{}
const UserInfosView:React.FC<Props> = () => {
    const classes = useStyles();
    return <Container className={classes.main} component="main">
        <UserInfos />
    </Container>
}
const useStyles = makeStyles((theme)=>({
    main:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh'
    }
}))
export default UserInfosView