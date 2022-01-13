import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions/user';
import { User } from '../interfaces/user';
import UserAttributeIcon from './UserAttributeIcon';

interface Props {

}
interface TState {
    selected_attribute: string
    user: { [key: string]: any }
    user_attributes: string[]
}
const UserInfos: React.FC<Props> = () => {
    const user: User | null = useSelector((state: RootStateOrAny) => state.user.user);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [state, setState] = React.useState<TState>({
        selected_attribute: "name",
        user: {},
        user_attributes: []
    })
    console.log(user)
    React.useEffect(() => {
        dispatch(fetchUser());
    }, [])
    React.useEffect(() => {
        if (!user) return;
        let result: { [key: string]: any } = {}
        let user_attributes = Object.keys(user);
        Object.entries(user).forEach(([key, value]: [string, any]) => {
            result[key] = value;
        })
        const selected_attribute = "name"
        setState({
            selected_attribute,
            user_attributes,
            user: result
        })
    }, [user])
    if (!user) return null;
    const displayAttributeLabel = () => {
        if (!user || state.selected_attribute === "") return;
        switch(state.selected_attribute){
            case "name":
                return `Hi, my name is`
            case "phone":
                return "My phone number is"
            case "location":
                return "i live in"
            case "password":
                return "My password is"
            case "birthday":
                return "My birthday is"
            case "email":
                return "My email is"
            
            default:
                return ""
        }
    }
    const displayAttribute = () => {
        if (!user || state.selected_attribute === "") return;
        switch(state.selected_attribute){
            case "name":
                return `${user.name.first} ${user.name.last}`
            case "location":
                return user.location.city
            case "password":
                return user.login.password
            case "birthday":
                return moment(user.dob.date).format("DD-MM-YYYY")
            default:
                return state.user[state.selected_attribute];}
    }
    const handleAttributeClick= (s:string)=>{
        setState({...state,selected_attribute:s})
    }
    return <Paper elevation={3} className={classes.paper}>
        <img src={user.picture.medium} className={classes.picture} />
        <Typography variant="body2" className={classes.attribute_label}>{displayAttributeLabel()}</Typography>
        <Typography variant="body1" className={classes.attribute}>{displayAttribute()}</Typography>
        <div className={classes.attributes}>
            {state.user_attributes.map((attribute) => (<UserAttributeIcon handleIconClick={handleAttributeClick} attribute={attribute} />))}
            <UserAttributeIcon handleIconClick={handleAttributeClick} attribute="password" />
        </div>
    </Paper>
}

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        border: '1px solid lightgrey',
        height: 200,
        width: 600,
        paddingTop: "40px",
    },
    picture: {
        objectFit: 'cover',
        borderRadius: '50%',
        border: '1px solid lightgrey',
        padding: '3px',
        position: 'absolute',
        height: '100px',
        width: '100px',
        top: '-75px',
        left: 'calc(50% - 50px)'
    },
    attribute:{
        margin:'0 0 0 10px',
        fontWeight:'bold',
        fontSize:20
    },
    attribute_label:{
        margin:'5px'
    },
    attributes: {
        display: 'flex',
        marginTop:'30px'
    }
}))
export default UserInfos