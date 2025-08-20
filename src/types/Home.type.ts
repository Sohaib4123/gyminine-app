// types.ts
export type ClassType = {
  id: string;
  title: string;
  time?: string;
  instructor?: string;
  category: 'reformer' | 'fundamental' | 'restorative' | 'dynamic';
};

export type InstructorType = {
  id: string;
  name: string;
  specialty: string;
  image?: string;
};

export type CarouselItem = {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
};