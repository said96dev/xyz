import React , {useEffect , useContext} from 'react'
import { AppContext } from '../../context/appContext';
import {Request} from "../../components"
function Requests() {
  const {getRequests } = useContext(AppContext)
  useEffect (() => {
    getRequests()
    // eslint-disable-next-line 
  }, [])  

   return (
    <Request/>
   )
}

export default Requests