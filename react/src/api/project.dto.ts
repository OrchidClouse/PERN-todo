import { Task } from "types/taskTypes";
import { User } from "types/usersTypes";

export interface CreateProjectDTO {
	name: string;
	description?: string;
	status: string;
	user: User;
	// tasks?: Task | Task[]
	task?: Task | Task[]
}
  
export interface UpdateProjectDTO {
	name?: string;
	description?: string;
	status?: string;
	user?: User;
	tasks?: Task[];
}
  
export interface Project {
	id: number;
	name: string;
	description: string;
	status: string;
	user: User; 
	tasks: Task[]; 
}

export interface CreateTaskDTO {
	name: string;
	description?: string;
}