import { Address } from './../address';
import { FormService } from './../form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  addrCount = 0;
  address: Address;
  addresses: Address[] = [];
  submitted = false;
  constructor(private service: FormService) { }
  ngOnInit() {
    this.address = new Address;
    console.log(this.addrCount);
  }
  onSubmit(val) {
    this.submitted = true;
    const tempAddress = new Address(
                          this.addrCount++,
                          this.address.street1,
                          this.address.street2,
                          this.address.state,
                          this.address.zipcode,
                          this.address.city
                          );
    this.addresses.push(tempAddress);
    this.service.save(tempAddress);
  }
  delete(addr) {
    this.addrCount--;
    console.log(addr);
    const addresses = this.addresses.filter(add => add.id != addr.id );
    this.addresses = addresses;
    console.log(this.addresses);
  }
}
