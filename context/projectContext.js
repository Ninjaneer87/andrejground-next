import { createContext, useReducer } from 'react';
import projectReducer from './projectContextReducer';


const INITIAL_STATE = {
  projects: [],
  isLoading: false,
  error: false
}

export const ProjectContext = createContext(INITIAL_STATE);

const ProjectContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, INITIAL_STATE);

  return (
    <ProjectContext.Provider value={{
      fetchedProjects: state.projects,
      loading: state.isLoading,
      error: state.error,
      dispatch
    }}>
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContextProvider;