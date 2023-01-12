import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { DataOperatorService } from 'src/app/data-operator.service';
import { IItem } from 'src/app/item';

@Component({
  selector: 'hvtd-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.css']
})
export class MainBlockComponent {


  constructor(private dataOperatorService: DataOperatorService){
  }

  public chosenTaskId(): number{
    return this.dataOperatorService.chosenTaskId;
  }

  // public getChildrenItems(): IItem[]{
    // let all = this.getAllItems();
    // let re: IItem[] = all.filter(item => item.parentId == this.chosenTaskId())
    // return all;
  // }

  public getAllItems(): IItem[]{
    let re: IItem[] = [];
    this.dataOperatorService.getAllItems().subscribe({
      next: items => {
        re = items
      },
      error: err => throwError(() => new Error(err))
    })
    return re;
  }

}
