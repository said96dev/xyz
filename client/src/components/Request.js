import React , {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Loading , Date } from './index';

import {Stack,
    Button ,
    Typography ,
    Avatar,
    ListItemAvatar ,
    ListItemText ,
    Divider , 
    ListItem , 
    List } from "@mui/material"
    import Wrapper from '../assets/wrappers/Requests'
    import {AppContext} from "../context/appContext"
    
    function Request() {
      const { request, updateRequest , isLoading} = useContext(AppContext)
        const useStyles = makeStyles((theme) => ({
            status: {
                fontWeight: 'bold',
                fontSize: '0.75rem',
                color: 'white',
                borderRadius: 8,
                padding: '3px 10px',
                display: 'inline-block'
            },
            bigAvatar: {
              backgroundColor: "#e3f2fd !important",
              color: "#1e88e5 !important ",
              },
          }));
        const classes = useStyles()
        const updateRequestHandler = (e , id) => {
          if(e.target.innerText === "ALLOW") {
            const currentRequest = {request : "allow"}
            updateRequest(id , currentRequest)
          }
          else if (e.target.innerText === "REJECT"){
            const currentRequest = {request : "reject"}
            updateRequest(id , currentRequest)
          }
        }
        if(isLoading) {
          return <Loading center />
        }
        if(request.length === 0){
          return(
            <Wrapper>
              <h2>No Requests to display...</h2>
            </Wrapper>
            )
        }
      return (
        <>
        {
          request?.length > 0 &&
          request?.map (item => {
            return <Wrapper key={item._id} className='form' >
            <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={item.createdBy.name} src=" " className={classes.bigAvatar} />
            </ListItemAvatar>
            <ListItemText
              primary={ <Typography component="h4"
                    variant="body1" style = {{"textTransform" : 'capitalize'}}>
                {item.createdBy.name}  {item.createdBy.lastName}
              </Typography>
            }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    vacation duration
                  </Typography>
                  <span className='spanDate'>
                    <Date date={item.startRecord}/>
                      <span>&nbsp;/&nbsp;</span>
                    <Date date={item.endRecord}/>
                  </span>
                </React.Fragment>
              }
              
            />
            <ListItemText
              primary={<Typography component="h4"
              variant="body1" style = {{"textTransform" : 'capitalize'}}>Substituted By : </Typography>}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    style = {{"textTransform" : 'capitalize'}}
                  >
                    {`${item.substitute.name}  ${item.substitute.lastName}`}
                  </Typography>
                  
                </React.Fragment>
              }
            />
            <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={(e) => updateRequestHandler(e , item._id)}>Allow</Button>
          <Button variant="outlined" color="error" onClick={(e) => updateRequestHandler(e , item._id)}>Reject</Button>
        </Stack>
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
        </Wrapper>
          })
        }
         
        </>
       
      )
    }
    
    export default Request