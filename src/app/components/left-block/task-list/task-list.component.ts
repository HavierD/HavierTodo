import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, throwError } from 'rxjs';
import { DataOperatorService } from 'src/app/data-operator.service';
import { IItem as IItem } from 'src/app/item';

@Component({
  selector: 'hvtd-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {

  sub: Subscription | undefined;
  allItems: IItem[] = [];

  constructor(private dataService: DataOperatorService) {

  }


  public getAllItems(): IItem[] {
    let allTasks = this.allItems.filter((item) => item.parentId == null)
    return allTasks;
  }

  public onTaskClicked(id: number) {
    this.dataService.chosenTaskId = id;
    console.log(this.dataService.chosenTaskId)
  }



  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // let allItems: IItem[] = [];
    this.sub = this.dataService.getAllItems().subscribe({
      next: items => {
        this.allItems = items
      },
      error: err => throwError(() => new Error(err))
    })
    // this.allTasks = this.allItems.filter((item)=>item.parentId != 123);
  }




}
