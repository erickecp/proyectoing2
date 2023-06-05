import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  title = 'sweetalert';

 showModal() {

  Swal.fire('Hey user!', 'You are the rockstar!', 'info');

Swal.update({
  icon: 'success'
})

 }

 showerror() {

  Swal.fire('Something went wrong!', 'info');

Swal.update({
  icon: 'error'
})

 }
}

