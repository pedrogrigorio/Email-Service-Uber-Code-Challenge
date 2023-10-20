import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-email-sender-container',
  templateUrl: './email-sender-container.component.html',
  styleUrls: ['./email-sender-container.component.css']
})

export class EmailSenderContainerComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      from: '',
      to: '',
      subject: '',
      body: ''
    })
  }

  onSubmit() {
    let { from, to, subject, body } = this.formGroup.value

    const data = {
      from: from,
      to: to,
      subject: subject,
      body: body
    }

    this.http.post("http://localhost:8080/api/email/send", data)
      .subscribe(response => {
        console.log("Resposta:", response)
      }, error => {
        console.error("Erro na requisição: ", error)
      })

  }
}
