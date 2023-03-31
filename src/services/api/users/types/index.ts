export interface IUserInfo {
  firstname: {
    label: string;
    value: string;
  };
  lastname: {
    label: string;
    value: string;
  };
  age: {
    label: string;
    value: string;
  };
  gender?: {
    label: string;
    value: string;
  };
}

export interface IWorkInfo {
  id: string;
  start: string;
  end: string;
  company: string;
  metrics?: {
    front?: string;
    back?: string;
    count?: number;
  };
}

export interface IMappedUserData {
  user: IUserInfo;
  works: IWorkInfo[];
}
