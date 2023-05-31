import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-prueba-angular-material',
  templateUrl: './prueba-angular-material.component.html',
  styleUrls: ['./prueba-angular-material.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatToolbarModule],
})

export class PruebaAngularMaterialComponent {
}
