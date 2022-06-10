import { Component, OnInit } from '@angular/core';
import { ReadmoreService } from '../readmore.service';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  Testimonydata=[{
    
    name:"",
    review:"",
    imageurl:""
  }]

  constructor(private readmoreservice:ReadmoreService) { }

  ngOnInit(): void {

    this.readmoreservice.getdetails()
    .subscribe((data)=>{
        this.Testimonydata=JSON.parse(JSON.stringify(data))

    })
  }

}