import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'isi-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  private subs = new SubSink();

  
  constructor(private testService: TestServiceService) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


  testMethodService(){
    console.log('BEFORE SERVER INVOKE');
    this.subs.add(this.testService.testService().subscribe( data => { 
      console.log('SERVER RESPONSE: ');
      // console.log(data);
    }));
  }

}


