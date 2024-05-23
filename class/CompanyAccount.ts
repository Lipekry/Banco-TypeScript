import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  private loanLimit: number;

  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
    this.loanLimit=1000;
  }

  getLoan = (value: number): void => {
    if (this.loanLimit>=value && this.validateStatus()){
      this.setBalance(this.getBalance()+value);
      console.log('Você pegou um empréstimo de R$ '+value);
      this.loanLimit-=value;
    } else {
      console.log('Emprestimo de R$ '+value+' negado, seu limite atual é: R$ '+this.loanLimit);
    }
  }
}
