import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServicesService    } from '../../../services/client/client-services.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent {

  clientForms = new FormGroup({
    name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    cellphone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    status: new FormControl(true)
  })

  constructor(private api: ClientServicesService, private route: Router,private toastr: ToastrService) { }

  createClient(form: any){

    console.log(form);

    this.api.onNewClient(form).subscribe(data=>{
      console.log(data);
      if (data.status == "200") {
        this.toastr.success(data.message);
        this.route.navigate(['client']);
      }
      if (data.status == "202") {
        this.toastr.error(data.message);
      }

      // if(response){
      //   this.alert.showSuccess('Creado con exito','Creacion de curso')
      //   this.route.navigate(['/']);
      // }else{
      // this.alert.showError('Error al crear los datos','Error');
      // }
    })
  }
}
