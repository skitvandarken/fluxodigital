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
      email: new FormControl('', [Validators.required]),
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
    const file = new FormData()
    file.append("nome", this.form.controls["nome"].value),
    file.append("email", this.form.controls["email"].value),
    file.append("assunto", this.form.controls["assunto"].value),
    file.append("messagem", this.form.controls["messagem"].value)
  
    return this.authdervice.EnviarEmail(file);
  }


}
