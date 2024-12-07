import { User } from "types/usersTypes";
import { Project } from "types/projectsTypes";

export interface CreateTaskDTO {
  name: string;
  description?: string;
  status: string;
  priority: string;
  user?: User;
  project?: Project;
}

export interface UpdateTaskDTO {
	name?: string;
	description?: string;
	status?: string;
	priority?: string;
	user?: User;
	project?: Project;
}

export interface Task {
	id: number;
	name: string;
	description: string;
	status: string;
	priority: string;
}
