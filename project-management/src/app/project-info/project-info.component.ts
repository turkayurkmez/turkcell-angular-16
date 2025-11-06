import { AfterContentChecked, Component, Input } from '@angular/core';
import { Project } from '../models/project.model';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements AfterContentChecked {

  constructor(private messageService: MessageService){

  }

  @Input('activeProject') project?: Project 

  inCompletedTasksCount?: number;

  ngAfterContentChecked(): void {
    this.inCompletedTasksCount = this.project?.tasks?.filter(t=>!t.isDone).length;
  }

  mesajGoster():void{
     this.messageService.showMessage("Bu mesaj, project-info bileşeninden gönderildi");
  }

}
