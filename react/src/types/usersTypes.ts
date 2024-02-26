export type User = {
	id: number;
	email: string;
	name: string;
}


export type UserDetails = {
	user?: User;
	department?: string;
	organization?: string;
	geo?: string;
	commands?: string[];
	publicName?: string;
}