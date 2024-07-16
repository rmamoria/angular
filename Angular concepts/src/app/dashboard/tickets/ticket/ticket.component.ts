import { Component, EventEmitter, Host, Input, Output, signal } from '@angular/core';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";
import { Ticket } from '../ticket.model';
import { every } from 'rxjs';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
  host:{

  }
})
export class TicketComponent {
@Input({required:true}) data!:Ticket
detailsVisible=signal(false);
@Output() close = new EventEmitter();

onToggleDetails(){
  this.detailsVisible.update((wasVisible)=>!wasVisible);
}

onMarkAsCompleted(){
  this.close.emit();
}

}
