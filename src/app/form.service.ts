import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  delete(addr) {
    localStorage.removeItem(`${addr.id}`);
  }
  save(addr) {
    localStorage.setItem(`${addr.id}`, addr);
  }
}
