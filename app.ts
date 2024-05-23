import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PromotionalAccount } from './class/PromotionalAccount';


console.log('Conta normal');
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Lucas', 10);
peopleAccount.deposit(12);
peopleAccount.withdraw(10)
console.log('Seu saldo atual é: R$ '+peopleAccount.getBalance())
console.log('')

console.log('Conta empresarial');
const companyAccount: CompanyAccount = new CompanyAccount('Santander', 20);
companyAccount.deposit(10);
companyAccount.withdraw(12)
companyAccount.withdraw(8)
console.log('Seu saldo atual é: R$ '+companyAccount.getBalance())
companyAccount.getLoan(1100)
console.log('Seu saldo atual é: R$ '+companyAccount.getBalance())
companyAccount.getLoan(900)
console.log('Seu saldo atual é: R$ '+companyAccount.getBalance())
companyAccount.getLoan(101)
console.log('Seu saldo atual é: R$ '+companyAccount.getBalance())
console.log('')

console.log('Conta promocional')
const promotionalAccount: PromotionalAccount = new PromotionalAccount('Feira', 20);
promotionalAccount.deposit(70);
console.log('Seu saldo atual é: R$ '+promotionalAccount.getBalance())
promotionalAccount.withdraw(20)
console.log('Seu saldo atual é: R$ '+promotionalAccount.getBalance())
