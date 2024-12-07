import { Task } from 'types/taskTypes'
import axios from '../axiosConfig'
import {
  CreateProjectDTO,
  UpdateProjectDTO,
  Project,
  CreateTaskDTO
} from './project.dto'

export const createProject = async (
  values: CreateProjectDTO
): Promise<Project> => {
  return (await axios.post('/projects', values)).data
}

export const getProjects = async (): Promise<Project[]> => {
  return (await axios.get('/projects')).data
}

export const getProjectsByUserId = async (userId: number): Promise<Project[]> => {
  return (await axios.get(`/projects/user/${userId}`)).data;
}

export const getProjectById = async (id: number): Promise<Project> => {
  return (await axios.get(`/projects/${id}`)).data
}

export const createTask = async (
  projectId: number,
  taskData: CreateTaskDTO
): Promise<any> => {
  return (await axios.post(`/projects/${projectId}/tasks`, taskData)).data;
}

export const getTasksByProjectId = async (
  projectId: number
): Promise<Task[]> => {
  return (await axios.get(`/projects/${projectId}/tasks`)).data;
}

export const updateProject = async (
  id: number,
  values: UpdateProjectDTO
): Promise<Project> => {
  return (await axios.put(`/projects/${id}`, values)).data
}
