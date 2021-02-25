

export class Cart {

  constructor(public productName: string,
              public buyDate: string,
              public description: string,
              public price: string,
              public payment: string,
              private token: string
  ) {}

  get _token(){
    return this.token;
  }


}
