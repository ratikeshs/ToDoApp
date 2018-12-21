import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { ToDO } from 'src/app/models/ToDo';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
  
})
export class EdittodoComponent implements OnInit {
  id;

  constructor(
    public toDoService: ToDoService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params:Params) =>{
        this.id=params['id'];
      }
    );
  }

  onSubmitClicked(index) {
    
    this.toDoService.tasks.push()
    //   //'index':index 
    // });
  }
}

