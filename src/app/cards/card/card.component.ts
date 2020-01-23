import { CardService } from './../../shared/card.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  constructor(private service: CardService, private toastr: ToastrService) {

  }
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
      this.toastr.success('Submitted successfully','Card saved');
    }
    this.service.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: '',
    };
  }
  onSubmit(form: NgForm) {
    this.service.postCardDetails(form.value).subscribe(
        res => {
          console.log(res);
          this.resetForm(form);
        },
        err => {
          console.log(err);
        }
    );
  }
}
