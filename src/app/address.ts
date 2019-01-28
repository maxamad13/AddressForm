export class Address {
  id: number;
  street1: string;
  street2: string;
  state: string;
  zipcode: number;
  city: string;

  constructor(id?, street1?, street2?, state?, zipcode?, city?) {
    this.id = id;
    this.street1 = street1;
    this.street2 = street2;
    this.state = state;
    this.zipcode = zipcode;
    this.city = city;
  }
}
