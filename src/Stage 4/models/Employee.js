export default class Employee {
  constructor(id, name, phone, title){
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.title = title;
  }
  
  updateName (string) {
    this.name = name;
  }

  updatePhone (string) {
    this.phone = phone;
  }

   updateTitle (string) {
    this.title = title;
   }
}