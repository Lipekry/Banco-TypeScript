export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  deposit = (value:number): void => {
    if(this.validateStatus()){
      this.balance+=value;
      console.log('Você depositou: R$ '+value);
    } else {
      console.log('Sua conta está desativada')
    }
  }

  withdraw = (value:number): void => {
    if(this.validateStatus()){
      if (this.balance>=value){
        this.balance-=value;
        console.log('Você sacou: R$ '+value);
      } else {
        console.log('Saldo insuficiente.')
      }
    } else {
      console.log('Sua conta está desativada')
    }
  }

  getBalance = (): number => {
    return this.balance;
  }

  setBalance = (value: number): void =>{
    this.balance=value;
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida')
  }
}
