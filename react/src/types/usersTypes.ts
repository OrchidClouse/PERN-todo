export type User = {
	id?: string;
	email: string;
	fullName: string;
	password: string
}


export type UserDetails = {
	department?: string;
	organization?: string;
	geo?: string;
	commands?: string[];
	publicName?: string;
}