import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  constructor(private userService: UsersService) { }
  listUsers: any;
  id = null;
  ngOnInit() {      
    this.userService.getAll()
    .subscribe(data => {
        this.listUsers = data;
        console.log(data)
    })
  }

//edit
onSubmint(data){
  this.userService.update(data.id, data)
  .subscribe((result)=>{
    console.warn("result",result)
  })
  console.warn(data);
  location.reload();
}
//delete
onDelete(data){
  this.userService.delete(data.id)
  .subscribe((result)=>{
    console.warn("result",result)
  })
  console.warn(data);
  location.reload();
}
}