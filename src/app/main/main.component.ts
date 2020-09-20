import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  listUsers: any;
  DATA: any;

  constructor(private userService: UsersService) { }

  ngOnInit() {      
    this.userService.getAll()
    .subscribe(data => {
        this.listUsers = data;
        console.log(data)
    })
  }

  onSubmint(data){
    this.userService.create(data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(data);

    const stream$ = new Subject()
    stream$.subscribe( data => console.log(data + ' ЭТО Subject!!! '))
    stream$.next(data)
    stream$.next(data.id)
    stream$.next(data.FullName)  
    stream$.next(data.phone)  
    stream$.next(data.email)  
    stream$.next(data.address)  
    data = document.getElementById('DATA')
  }
}
