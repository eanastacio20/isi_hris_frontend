import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestServiceService, TestDTO } from '../test-service.service';
import { ButtonModule } from 'primeng/button';
import { SubSink } from 'subsink';

@Component({
  selector: 'isi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private subSink = new SubSink();
  public testDTO = Array<TestDTO>();

  constructor(private testService: TestServiceService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  testMethodService(): void {
    console.log('BEFORE SERVER INVOKE');
    this.subSink.add(this.testService.testService().subscribe(data => {
      console.log('SERVER RESPONSE: ');
      console.log(data);
      this.testDTO = <Array<TestDTO>>data;
    }));
  }
}
