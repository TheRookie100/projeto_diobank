import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  loanamount: number = 0

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  

  getLoan = (loanamount: number): void => {
    if(this.validateStatus()){
      this.loanamount += loanamount
      console.log('Voce pegou um empréstimo aproveita!' , + loanamount)
    }
  }
}



// [ ] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
//  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
//  - Apenas contas com o status true podem fazer empréstimo