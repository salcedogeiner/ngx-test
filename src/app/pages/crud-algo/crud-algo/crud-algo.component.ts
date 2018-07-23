import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-crud-algo',
  templateUrl: './crud-algo.component.html',
  styleUrls: ['./crud-algo.component.scss']
})
export class CrudAlgoComponent implements OnInit {

  userList: any;

  modelo : {
    name: string;
    picture: string;
  }

  model : any = {};

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      name: {
        title: 'name',
        type: 'string',
      },
      picture: {
        title: 'picture',
        type: 'string',
      }
    },
  };

  constructor(private users: UserService) {
    this.userList = users.getUserArray();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userList.value.push(this.model);
    console.log("ads");
   }

}
