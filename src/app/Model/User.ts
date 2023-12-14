export class User {
  public id: number;
  public username: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public contact: string;
  public isAdmin: boolean;

  constructor(
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    contact: string,
    isAdmin: boolean
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.contact = contact;
    this.isAdmin = isAdmin;
  }

  // get isAdmin(): boolean {
  //   return this.isAdmin;
  // }

  // set isAdmin(value: boolean) {
  //   this._isAdmin = value;
  // }
}
