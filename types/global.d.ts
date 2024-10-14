declare module '*.png'

type Avatar = {
    public_id: string;
    url: string;
  };

  type User = {
    _id: string;
    name: string;
    email: string;
    avatar?: Avatar;
    password?: string;
    courses: any;
    createdAt: Date;
    updatedAt: Date;
  };

  type AuthTab = {
    name: string;
    value: string;
  }

  type IconType = "person-outline" | "mail-outline" | "lock-closed-outline";