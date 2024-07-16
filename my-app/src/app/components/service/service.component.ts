import { Component } from '@angular/core';
import serviceData from 'data/ServiceData';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  service=serviceData;

}
