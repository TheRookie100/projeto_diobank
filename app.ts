import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { EmployeeAccount } from './class/EmployeeAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit_(100)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit_(3600)
console.log(companyAccount)

//                                                id   nome   n▫ conta
const account1: PeopleAccount = new PeopleAccount(1 , "Joe", 1000)
console.log(account1) //  toda informacao da conta com seus atributos e metodos
account1.deposit_(9000) // valor depositado
account1.withdraw_(150) // valor sacado
// console.log(account1.balance) // saldo atual


const account2: PeopleAccount = new PeopleAccount(23 , "Luccas" , 639)
console.log(account2) //  toda informacao da conta com seus atributos e metodos
account2.deposit_(40000) // valor depositado
account2.withdraw_(2500) // valor sacado
// console.log(account2.balance) // saldo atual*/

const CompanyAccount100: CompanyAccount = new CompanyAccount("Alex" , 1)
console.log(CompanyAccount100)
CompanyAccount100.deposit_(70000)
CompanyAccount100.withdraw_(3600)
CompanyAccount100.getLoan(100000)

const EmployeeAccount22: EmployeeAccount = new EmployeeAccount(10 , 'alex' , 100)
EmployeeAccount22.deposit_(100)
console.log(EmployeeAccount22)
