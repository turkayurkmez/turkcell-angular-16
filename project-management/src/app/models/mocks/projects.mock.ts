import { Project } from "../project.model";
import { Task } from "../task.model";

export const projects: Project[] = [
    new Project(1, 'PrOJect x', 'Task Açıklaması',new Date(2025,10,6),0.15,1,
[
    new Task(1, 'Task A', 'A Açıklama',new Date(2025,10,6),1,false),
    new Task(2, 'Task B', 'B Açıklama',new Date(2025,10,6),1,false),
    new Task(3, 'Task C', 'C Açıklama',new Date(2025,10,6),1,false),


]),

 new Project(2, 'pRojeCt Y', 'Açıklama...',new Date(2025,10,6),0.15,1,
[
    new Task(4, 'Task Y.A', 'A Açıklama',new Date(2025,10,6),2,false),
    new Task(5, 'Task Y.B', 'B Açıklama',new Date(2025,10,6),2,false),
    new Task(6, 'Task Y.C', 'C Açıklama',new Date(2025,10,6),2,false),


]),

 new Project(3, 'prOjEct Z', 'Açıklama...',new Date(2025,10,6),0.15,1,
[
    new Task(7, 'Task Z.A', 'A Açıklama',new Date(2025,10,6),3,false),
    new Task(8, 'Task Z.B', 'B Açıklama',new Date(2025,10,6),3,false),
    new Task(9, 'Task Z.C', 'C Açıklama',new Date(2025,10,6),3,false),


])


]