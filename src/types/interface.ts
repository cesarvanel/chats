export interface Register {
  username: string;
  email:string
  number: string;
  avatar: string;
  password: string;
  job: string;
  confPassword:string

}


export interface Login{
  email: string ; 
  password : string
}