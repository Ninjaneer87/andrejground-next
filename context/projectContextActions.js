export const fetchingProjectsStart = () => ({
  type: 'FETCHING_PROJECTS_START',
});

export const fetchingProjectsSuccess = (projects) => ({
  type: 'FETCHING_PROJECTS_SUCCESS',
  projects,
});

export const fetchingProjectsFailed = (error) => ({
  type: 'FETCHING_PROJECTS_FAILED',
  error
});