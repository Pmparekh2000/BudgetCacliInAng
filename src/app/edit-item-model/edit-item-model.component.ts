import { BudgetItem } from 'src/shared/models/budget.item.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {

  
  constructor(
    public diaglogRef: MatDialogRef<EditItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) { }

  ngOnInit() {
  }

  onSubmitted(updatedItem: BudgetItem){
    this.diaglogRef.close(updatedItem);
  }

}
