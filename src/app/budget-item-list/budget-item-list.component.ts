import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';
import { BudgetItem } from 'src/shared/models/budget.item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from "@angular/material";

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onDeleteButtonClick(item: BudgetItem){
    this.delete.emit(item);
  }

  onCardClicked(item: BudgetItem){
    //show the edit model
    const dialogRef = this.dialog.open(EditItemModelComponent,{
      width: "580px",
      data: item
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        
        this.update.emit({
          old: item,
          new: result
        });
      }
    });
  }

}


export interface UpdateEvent{
  old: BudgetItem;
  new: BudgetItem;
}