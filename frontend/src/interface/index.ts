export interface User {
  id: number;
  photo:{
    url:string
  }
  place: string;
  genre: string;
  prefecture: string;
}

export interface UserApiJson {
  posts: User[]
}
