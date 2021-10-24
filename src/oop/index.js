class Customer{
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber=customerNumber
    }
}

let customer=new Customer(1,"12345");
//PROTOTYPING
customer.name="Rüveyha Rüzgar"
console.log(customer.name)

Customer.number="0000"
console.log(Customer.number)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(id,customerNumber,firstname){
        super(id,customerNumber)
        this.firstname=firstname
    }
}

class CorporateCustomer extends Customer{
    constructor(id,customerNumber,companyName){
        super(id,customerNumber)
        this.companyName=companyName
    }
}

