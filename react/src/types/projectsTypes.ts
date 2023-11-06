import { User } from "./usersTypes";
import { Task } from "./taskTypes";

export type Project = {
	id?: number;
	name?: string;
	description?: string;
	status?: string;
	user?: User; 
	tasks?: Task[]; 
}