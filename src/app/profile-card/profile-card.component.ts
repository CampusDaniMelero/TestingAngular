import { Component, Input } from '@angular/core';
import { User } from '../services/api.service.service';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  bgColor = 'indigo';

  @Input() user: User | undefined;
  component: { _id: string; first_name: string; last_name: string; email: string; } | undefined;

  handleClick() {
    this.bgColor = 'tomato';
  }
  
  

}
