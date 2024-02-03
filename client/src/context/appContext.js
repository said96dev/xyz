import React, { useReducer } from 'react'
import {
  LOGOUT_USER,
  TOGGLE_SIDEBAR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_FILTERS,
  ADD_USER_BEGIN,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  CLEAR_VALUES,
  GET_ALL_USERS_BEGIN,
  GET_ALL_USERS_SUCCESS,
  CHANGE_PAGE,
  GET_ALL_TASKS_SUCCESS,
  GET_ALL_TASKS_BEGIN,
  ADD_TASK_BEGIN,
  ADD_TASK_ERROR,
  ADD_TASK_SUCCESS,
  EDIT_TASK_BEGIN,
  GET_ALL_RECORDS_BEGIN,
  GET_ALL_RECORDS_SUCCESS,
  DELETE_TASK_BEGIN,
  ADD_COMMENT_BEGIN,
  DELETE_COMMENT_BEGIN,
  ADD_CLIENT_BEGIN,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_ERROR,
  ADD_RECORD_BEGIN,
  ADD_RECORD_SUCCESS,
  ADD_RECORD_ERROR,
  GET_ALL_CLIENTS_BEGIN,
  GET_ALL_CLIENTS_SUCCESS,
  GET_TASK_BEGIN,
  GET_TASK_ERROR,
  GET_TASK_SUCCESS,
  DELETE_RECORD_BEGIN,
  GET_ALL_EMPLOYE_SUCCESS,
  GET_ALL_EMPLOYE_BEGIN,
  ADD_PROJECT_BEGIN,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_ERROR,
  DELETE_CLIENT_BEGIN,
  EDIT_CLIENT_BEGIN,
  EDIT_PROJECT_BEGIN,
  GET_CLIENT_BEGIN,
  GET_CLIENT_SUCCESS,
  DELETE_PROJECT_BEGIN,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_RECORDING_BEGIN,
  GET_USER_RECORDING_SUCCESS,
  GET_ALL_PROJECT_BEGIN,
  GET_ALL_PROJECT_SUCCESS,
  GET_REQUESTS_BEGIN,
  GET_REQUESTS_SUCCESS,
  UPDATE_REQUEST_BEGIN,
  ADD_APPOINTMENT_BEGIN,
  ADD_APPOINTMENT_SUCCESS,
  ADD_APPOINTMENT_ERROR,
  GET_APPOINTMENT_BEGIN,
  GET_APPOINTMENT_SUCCESS,
  GET_APPOINTMENT_ERROR,
} from './action'
import Reducer from './reducer'
import axios from 'axios'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const client = localStorage.getItem('client')
const employeeId = localStorage.getItem('employee')
export const initialState = {
  isLoading: false,
  showAlert: false,
  alertType: '',
  alertText: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  showSidebar: false,
  name: '',
  email: '',
  lastName: '',
  team: '',
  password: '',
  search: '',
  sort: 'oldest',
  position: '',
  role: '',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
  page: 1,
  totalUsers: 0,
  numOfPages: 1,
  gender: '',
  users: [],
  type: '',
  department: '',
  tasks: [],
  projects: [],
  title: '',
  taskPriority: 'high',
  description: '',
  taskStatus: 'fresh',
  deadline: Date.now(),
  assignedTo: '',
  employeeOptionen: [],
  oneTask: {},
  totalComments: 0,
  records: [],
  clients: [],
  client: client ? JSON.parse(client) : null,
  employeeId: employeeId ? JSON.parse(employeeId) : null,
  projectsOverview: [],
  userRecord: [],
  request: [],
  appointments: [],
  totalAppointments: 0,
}

export const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  // axios
  const authFetch = axios.create({
    baseURL: '/api/v1',
  })

  // request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common['Authorization'] = `Bearer ${state.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // response
  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      // console.log(error.response)
      if (error.response.status === 401) {
        //logoutUser()
      }
      return Promise.reject(error)
    }
  )

  // Add User Login Info to Local Storage
  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  //Remove User From Local Storage
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('client')
  }

  // Add Client Login Info to Local Storage
  const addClientToLocalStorage = (client) => {
    localStorage.setItem('client', JSON.stringify(client))
  }

  const addEmployeeToLocalStorage = (user) => {
    localStorage.setItem('employee', JSON.stringify(user))
  }

  /* //Remove User From Local Storage 
     const removeClientFromLocalStorage = () => {
      localStorage.removeItem("client")
    } */

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } })
  }
  //Dispaly Alert
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }

  //Clear Alert
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  // Sidebar Toggle
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  //Handle Chagne to Change the vlaues in State
  //used in addUser.js && SearchContainer
  const handleChange = ({ name, value }) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: { name, value },
    })
  }

  // clear Vlaues
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES })
  }

  // clear filters
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  //Login User
  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const response = await axios.post('/api/v1/auth/login', currentUser)
      const { user, token } = response.data
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          user,
          token,
        },
      })
      addUserToLocalStorage({
        user,
        token,
      })
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  //Logout user
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    removeUserFromLocalStorage()
  }

  //Update User
  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN })
    try {
      const { data } = await authFetch.patch('/users/updateUser', currentUser)
      const { user, token } = data
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: {
          token,
          user,
        },
      })
      addUserToLocalStorage({ user, token })
    } catch (error) {
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  //Get All employee
  const getEmployee = async () => {
    dispatch({ type: GET_ALL_EMPLOYE_BEGIN })
    try {
      const { data } = await authFetch('users/getEmployee')
      const { users } = data
      dispatch({
        type: GET_ALL_EMPLOYE_SUCCESS,
        payload: {
          users,
        },
      })
    } catch (error) {
      //logoutUser()
    }
  }

  // Add New User
  const addUser = async (currentUser) => {
    dispatch({ type: ADD_USER_BEGIN })
    try {
      await authFetch.post('users/adduser', currentUser)
      dispatch({
        type: ADD_USER_SUCCESS,
      })
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      dispatch({
        type: ADD_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  //get all users
  const getUsers = async () => {
    const { page, search, role, position, sort } = state
    let url = `/users?page=${page}&role=${role ? role : 'all'}&position=${
      position ? position : 'all'
    }&sort=${sort}`
    if (search) {
      url = url + `&search=${search}`
    }
    dispatch({ type: GET_ALL_USERS_BEGIN })
    try {
      const { data } = await authFetch(url)
      const { users, numOfPages, totalUsers } = data
      dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload: {
          users,
          totalUsers,
          numOfPages,
        },
      })
    } catch (error) {
      // logoutUser()
      // comment during the developing. this logoutUser if we got 401 or server down
    }
    clearAlert()
    // when I add a new User and if i am going quiclkly to get all user ther that alert still displayes...
  }

  //get all Tasks
  const getTasks = async () => {
    console.log('get')
    dispatch({ type: GET_ALL_TASKS_BEGIN })
    try {
      const { data } = await authFetch('tasks')
      const { totalTasks, task, users, projects } = data
      dispatch({
        type: GET_ALL_TASKS_SUCCESS,
        payload: {
          task,
          totalTasks,
          users,
          projects,
        },
      })
    } catch (error) {
      //logoutUser()
    }
    clearAlert()
  }
  // Add New Task
  const addTask = async (task) => {
    dispatch({ type: ADD_TASK_BEGIN })
    try {
      await authFetch.post('tasks/addtask', task)
      dispatch({
        type: ADD_TASK_SUCCESS,
      })
      getTasks()
      dispatch({ type: CLEAR_VALUES })
    } catch (error) {
      dispatch({
        type: ADD_TASK_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  //Single Task
  const singleTask = async (taskId) => {
    dispatch({ type: GET_TASK_BEGIN })
    try {
      const { data } = await authFetch(`tasks/${taskId}`)
      const { task, totalComments } = data
      dispatch({
        type: GET_TASK_SUCCESS,
        payload: {
          task,
          totalComments,
        },
      })
    } catch (error) {
      dispatch({
        type: GET_TASK_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
  }

  //delete Task
  const deleteTask = async (taskId) => {
    dispatch({ type: DELETE_TASK_BEGIN })
    try {
      await authFetch.delete(`tasks/${taskId}`)
      getTasks()
    } catch (error) {
      //logoutUser();
    }
  }

  //edit Task
  const editTask = async (taskId, currentTask) => {
    dispatch({ type: EDIT_TASK_BEGIN })
    try {
      await authFetch.patch(`tasks/${taskId}`, currentTask)
      getTasks()
    } catch (error) {
      //logoutUser()
    }
  }

  //add Commnet
  const createComment = async (newComment) => {
    dispatch({ type: ADD_COMMENT_BEGIN })
    try {
      await authFetch.post('comments', newComment)
      singleTask(newComment.taskId)
    } catch (error) {
      //logoutUser()
    }
  }

  //Delete Commnet
  const deleteComment = async (commentId, taskId) => {
    dispatch({ type: DELETE_COMMENT_BEGIN })
    try {
      await authFetch.delete(`comments/${commentId}`)
      singleTask(taskId)
    } catch (error) {
      //logoutUser()
    }
  }

  //Add record
  const addRecord = async (record) => {
    dispatch({ type: ADD_RECORD_BEGIN })
    try {
      await authFetch.post('records', record)
      dispatch({
        type: ADD_RECORD_SUCCESS,
      })
      getRecords()
    } catch (error) {
      dispatch({
        type: ADD_RECORD_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  //Get all record
  const getRecords = async () => {
    dispatch({ type: GET_ALL_RECORDS_BEGIN })
    try {
      const { data } = await authFetch('records')
      const { record, totalRecords, users } = data
      dispatch({
        type: GET_ALL_RECORDS_SUCCESS,
        payload: {
          record,
          totalRecords,
          users,
        },
      })
    } catch (error) {
      //logoutUser()
    }
    clearAlert()
  }
  //delete Record
  const deleteRecord = async (reocrdId) => {
    dispatch({ type: DELETE_RECORD_BEGIN })
    try {
      await authFetch.delete(`records/${reocrdId}`)
      getRecords()
    } catch (error) {
      //logoutUser();
    }
  }
  //get All Client
  const getClients = async () => {
    dispatch({ type: GET_ALL_CLIENTS_BEGIN })
    try {
      const { data } = await authFetch('clients')
      const { clients, totalClients, users } = data

      dispatch({
        type: GET_ALL_CLIENTS_SUCCESS,
        payload: {
          clients,
          totalClients,
          users,
        },
      })
    } catch (error) {
      //logoutUser()
    }
    clearAlert()
  }
  // add new Client
  const addClient = async (client) => {
    dispatch({ type: ADD_CLIENT_BEGIN })
    try {
      await authFetch.post('clients', client)
      dispatch({
        type: ADD_CLIENT_SUCCESS,
      })
      getClients()
    } catch (error) {
      dispatch({
        type: ADD_CLIENT_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  // add new Appointment
  const addAppointment = async (Appointment) => {
    dispatch({ type: ADD_APPOINTMENT_BEGIN })
    try {
      await authFetch.post('home/create-appointment', Appointment)
      dispatch({
        type: ADD_APPOINTMENT_SUCCESS,
      })
      //getClients()
    } catch (error) {
      dispatch({
        type: ADD_APPOINTMENT_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  // Create Project
  const addProject = async (project) => {
    dispatch({ type: ADD_PROJECT_BEGIN })
    try {
      await authFetch.post('projects', project)
      dispatch({
        type: ADD_PROJECT_SUCCESS,
      })
      getProjects()
    } catch (error) {
      dispatch({
        type: ADD_PROJECT_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  //get all Prjects
  const getProjects = async () => {
    dispatch({ type: GET_ALL_PROJECT_BEGIN })
    try {
      const { data } = await authFetch('projects')
      const { totalProject, project } = data
      dispatch({
        type: GET_ALL_PROJECT_SUCCESS,
        payload: {
          project,
          totalProject,
        },
      })
      getClients()
    } catch (error) {
      //logoutUser()
    }
    clearAlert()
  }

  //delete Client
  const deleteClient = async (clientId) => {
    dispatch({ type: DELETE_CLIENT_BEGIN })
    try {
      await authFetch.delete(`clients/${clientId}`)
      getClients()
    } catch (error) {
      //logoutUser();
    }
    clearAlert()
  }

  //edit Client
  const editClient = async (clientId, currentClient) => {
    dispatch({ type: EDIT_CLIENT_BEGIN })

    try {
      const { data } = await authFetch.patch(
        `clients/${clientId}`,
        currentClient
      )
      const { client } = data
      getClients()
      addClientToLocalStorage(client)
    } catch (error) {
      //logoutUser()
    }
    clearAlert()
  }

  //edit Project
  const editProject = async (projectId, currentProject) => {
    dispatch({ type: EDIT_PROJECT_BEGIN })
    try {
      await authFetch.patch(`projects/${projectId}`, currentProject)
      getProjects()
    } catch (error) {
      //logoutUser()
    }
    clearAlert()
  }

  //get single client
  const singleClient = async (clientId) => {
    dispatch({ type: GET_CLIENT_BEGIN })
    try {
      const { data } = await authFetch(`clients/${clientId}`)
      const { client, totalProjects } = data
      dispatch({
        type: GET_CLIENT_SUCCESS,
        payload: {
          client,
          totalProjects,
        },
      })
      addClientToLocalStorage(client)
    } catch (error) {
      //logoutUser()
    }
    clearAlert()
  }

  //Delete Project
  const deleteProject = async (projectId) => {
    dispatch({ type: DELETE_PROJECT_BEGIN })
    try {
      await authFetch.delete(`projects/${projectId}`)
      getProjects()
    } catch (error) {
      //logoutUser();
    }
    clearAlert()
  }

  const showStats = async () => {
    dispatch({ type: SHOW_STATS_BEGIN })
    try {
      const { data } = await authFetch('/stats')
      dispatch({
        type: SHOW_STATS_SUCCESS,
        payload: {
          totalUsers: data.totalUsers,
          totalClients: data.totalClients,
          totalProject: data.totalProject,
          totalTasks: data.totalTasks,
          tasksOverview: data.tasksOverview,
          projectsOverview: data.projectsOverview,
          clientsOverview: data.clientsOverview,
        },
      })
    } catch (error) {
      logoutUser()
    }
    clearAlert()
  }
  //get single user
  const singleUser = async (userId) => {
    dispatch({ type: GET_USER_BEGIN })
    try {
      const { data } = await authFetch(`users/${userId}`)
      const { user, userClient, userProject, userTask } = data
      dispatch({
        type: GET_USER_SUCCESS,
        payload: {
          user,
          userClient,
          userProject,
          userTask,
        },
      })
      addEmployeeToLocalStorage(userId)
    } catch (error) {
      //logoutUser()
    }
    clearAlert()
  }

  // Single User Records
  const getUserRecord = async (userId) => {
    dispatch({ type: GET_USER_RECORDING_BEGIN })
    try {
      const { data } = await authFetch(`records/${userId}`)
      const { userRecord } = data
      dispatch({
        type: GET_USER_RECORDING_SUCCESS,
        payload: {
          userRecord,
        },
      })
    } catch (error) {
      //logoutUser()
    }
    clearAlert()
  }

  const getRequests = async () => {
    dispatch({ type: GET_REQUESTS_BEGIN })
    try {
      const { data } = await authFetch('requests')
      const { request } = data
      dispatch({
        type: GET_REQUESTS_SUCCESS,
        payload: {
          request,
        },
      })
    } catch (error) {
      //logoutUser()
    }
    clearAlert()
  }
  const updateRequest = async (requestId, currentRequest) => {
    dispatch({ type: UPDATE_REQUEST_BEGIN })
    try {
      await authFetch.patch(`requests/${requestId}`, currentRequest)
      getRequests()
    } catch (error) {
      //loginUser()
    }
    clearAlert()
  }

  //get all Tasks
  const getAppointment = async () => {
    dispatch({ type: GET_APPOINTMENT_BEGIN })
    try {
      const { data } = await authFetch('home/create-appointment')
      const { appointments, totalAppointments } = data
      dispatch({
        type: GET_APPOINTMENT_SUCCESS,
        payload: {
          appointments,
          totalAppointments,
        },
      })
    } catch (error) {}
    clearAlert()
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        getAppointment,
        addAppointment,
        displayAlert,
        clearAlert,
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleChange,
        addUser,
        getUsers,
        clearFilters,
        clearValues,
        changePage,
        getTasks,
        addTask,
        deleteTask,
        editTask,
        singleTask,
        createComment,
        deleteComment,
        addRecord,
        getRecords,
        deleteRecord,
        getClients,
        addClient,
        getEmployee,
        addProject,
        getProjects,
        editClient,
        deleteClient,
        editProject,
        singleClient,
        deleteProject,
        showStats,
        singleUser,
        getUserRecord,
        getRequests,
        updateRequest,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
