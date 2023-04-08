export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  /*
  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }
  */
  
  //              ⬇ valor a ser depositado
  deposit_ = (amount:number): void => {
    if(this.validateStatus() && amount >0){ // verficar a codicao da conta se esta ativa e valor depositado e maior que zero
      console.log("Voce depositou um valor na sua conta!" , + amount)
      
      this.balance = amount
      console.log("Seu saldo atual:" , + this.balance);
      
    } 
  }
  //             ⬇ valor a ser sacado
  withdraw_ = (amount: number): void => {
    if(this.validateStatus() && this.balance >= amount) { // verficar a codicao da conta se esta ativa e valor do saldo e maior ou igual ao solicitado para saque
      console.log("Você sacou um valor na sua conta!", amount );
      this.balance -= amount;
      console.log("Seu saldo atual:");
    }
  }


  getBalance = (): void => {
    console.log(this.balance)
  }

  

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
