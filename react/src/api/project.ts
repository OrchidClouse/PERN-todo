import axios from '../axiosConfig'
import {
  CreateProjectDTO,
  UpdateProjectDTO,
  Project,
} from './project.dto'

export const createProject = async (
  values: CreateProjectDTO
): Promise<Project> => {
  return (await axios.post('/projects', values)).data
}

export const getProjects = async (): Promise<Project[]> => {
  return (await axios.get('/projects')).data
}

export const getProjectById = async (id: number): Promise<Project> => {
  return (await axios.get(`/projects/${id}`)).data
}

export const updateProject = async (
  id: number,
  values: UpdateProjectDTO
): Promise<Project> => {
  return (await axios.put(`/projects/${id}`, values)).data
}
