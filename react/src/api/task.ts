// import axios from "axios";
// import { CreateTaskDTO, UpdateTaskDTO} from "./task.dto";
// import { Task } from "types/taskTypes";

// export const createTask = async (projectId: number, values: CreateTaskDTO): Promise<Task> => {
// 	return (await axios.post(`/projects/${projectId}/tasks`, values)).data;
// }

// export const getTasks = async (projectId: number): Promise<Task[]> => {
// 	return (await axios.get(`/projects/${projectId}/tasks`)).data;
// }

// export const getTaskById = async (projectId: number, taskId: number): Promise<Task> => {
// 	return (await axios.get(`/projects/${projectId}/tasks/${taskId}`)).data;
// }	

//   export const updateTask = async (projectId: number, taskId: number, values: UpdateTaskDTO): Promise<Task> => {
// 	return (await axios.put(`/projects/${projectId}/tasks/${taskId}`, values)).data;
// }

// export const deleteTask = async (projectId: number, taskId: number): Promise<void> => {
// 	await axios.delete(`/projects/${projectId}/tasks/${taskId}`);
// }

