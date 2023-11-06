export type User = {
	id: number;
	email: string;
	name: string;
}


export type UserDetails = {
	department?: string;
	organization?: string;
	geo?: string;
	commands?: string[];
	publicName?: string;
}