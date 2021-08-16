const projectReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_PROJECTS_START":
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case "FETCHING_PROJECTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        projects: action.projects,
        error: null
      }
      
    case "FETCHING_PROJECTS_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default: return state;
  }
}

export default projectReducer;