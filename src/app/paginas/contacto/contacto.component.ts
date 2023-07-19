import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  form : FormGroup;

  constructor(private authdervice: AuthService){}
  
  
  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      assunto: new FormControl('', [Validators.required]),
      messagem: new FormControl('', [Validators.required]),
    })    
  }

  get nome(){
  
    return this.form.get('nome')!;
  }

  get email(){
    return this.form.get('email')!;
  }

  get assunto(){
    return this.form.get('assunto')!;
  }

    get messagem(){
    return this.form.get('messagem')!;
  }

  Submeter(){
    if(this.form.invalid) return;
    return this.authdervice.EnviarEmail(this.form.getRawValue()).subscribe(
      (res) => {
        alert("A sua messagem foi enviada com sucesso!")
      }
    );
  }


}
