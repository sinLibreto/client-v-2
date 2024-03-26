
export interface IResgisterForm {
  username: string;
  // lastname: string | undefined;
  password: string;
  email: string;
  avatarColor?: string;
  // term: boolean;
  avatarImage:string;
}

export interface AuthResponse {
  token: string;
  isUser: boolean;
  user: {
    createdAt: string | null; // Puedes cambiarlo por Date si quieres un objeto de fecha
    postsCount: number | undefined;
    blocked: any[] | undefined; // Cambiar any[] por un tipo más específico si es posible
    blockedBy: any[] | undefined; // Cambiar any[] por un tipo más específico si es posible
    notifications: any | undefined; // Especificar un tipo más detallado si es posible
    social: any | undefined; // Especificar un tipo más detallado si es posible
    followersCount: number | undefined;
    followingCount: number | undefined;
    // bgImageId: string | undefined;
    // bgImageVersion: string | undefined;
    // profilePicture: string | undefined;
    work: string | undefined;
    school: string | undefined;
    location: string | undefined;
    quote: string | undefined;
    username:string | undefined
    occupation:string | undefined

    bgImageId?: string;
     bgImageVersion?: string;
     profilePicture?: string;
  };
}

export interface LoginResponse {
  message: string;
  user: {
    authId: string;
    username: string;
    email: string;
    avatarColor: string;
    uId: string;
    createdAt: string;
  };
  token: string;
}
export interface SignupResponse {
  message: string;
  user: {
    _id: string;
    authId: string;
    uId: string;
    username: string;
    email: string;
    avatarColor: string;
    profilePicture: string;
    blocked: any[]; // Deberías reemplazar `any[]` con un tipo específico de tu aplicación si es posible.
    blockedBy: any[]; // Deberías reemplazar `any[]` con un tipo específico de tu aplicación si es posible.
    work: string;
    location: string;
    school: string;
    quote: string;
    bgImageVersion: string;
    bgImageId: string;
    followersCount: number;
    followingCount: number;
    postsCount: number;
    notifications: {
      messages: boolean;
      reactions: boolean;
      comments: boolean;
      follows: boolean;
    };
    social: {
      facebook: string;
      instagram: string;
      twitter: string;
      youtube: string;
    };
  };
  token: string;
}



export interface IUser {
  id: string;
  username: string;
  email: string;
  role: string;
  profile: {
    image: string;
    location: string;
    bio: string;
  };
  token: string;

  _id: string;
  authId: string;
  password?: string;
  avatarColor?: string;
  uId?: string;
  postsCount: number;
  work: string;
  school: string;
  quote: string;
  location: string;
  blocked: string[]; // Suponiendo que aquí solo necesitas los IDs
  blockedBy: string[]; // Suponiendo que aquí solo necesitas los IDs
  followersCount: number;
  followingCount: number;
  notifications: INotificationSettings;
  social: ISocialLinks;
  bgImageVersion: string;
  bgImageId: string;
  profilePicture: string;
  aboutMe?: string;
  occupation?: string;
  dateOfBirth?: Date;
  interests?: string[];
  languages?: string[];
  skillsAndExpertise?: string[];
  disciplines?: string[];
  createdAt?: Date;


}
export interface INotificationSettings {
  messages: boolean;
  reactions: boolean;
  comments: boolean;
  follows: boolean;
}
export interface ISocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
}


export interface ForgotPasswordResponse {
  message: string;
}
