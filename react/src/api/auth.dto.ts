export interface LoginFormDTO {
	email: string
	password: string
  }
  
  export interface LoginResponseDTO {
	token: string
  }
  
  export type RegisterFormDTO = LoginFormDTO & { name: string }
  export type RegisterResponseDTO = LoginResponseDTO
  
  export interface User {
	id: number
	email: string
	name: string
  }