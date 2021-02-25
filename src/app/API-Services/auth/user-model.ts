

export class User {

  constructor(public name: string,
              public email: string,
              private token: string
  ) {}

  get _token(){
    return this.token;
  }


}
