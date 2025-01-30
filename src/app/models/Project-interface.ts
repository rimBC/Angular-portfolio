import { Technologies } from "./technologies";

export interface Project {
            id: number;
            images:string[];
            ProjetTitle:string;
            Technologies:Technologies[];
            description:string;
            Link?:string;
          } 