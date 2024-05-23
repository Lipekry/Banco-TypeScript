import { DioAccount } from "./DioAccount";

export class PromotionalAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }
    deposit = (value:number): void => {
        if(this.validateStatus()){
          this.setBalance(this.getBalance()+value+10);
          console.log('Você depositou: R$ '+value+' e ganhou um bônus de: R$ 10,00');
        } else {
            console.log('Sua conta está desativada')
        }
      }
}
  