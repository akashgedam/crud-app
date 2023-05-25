export interface Root {
    Employees: Employee[]
  }
  
  export interface Employee {
    userId: string
    jobTitle: string
    firstName: string
    lastName: string
    employeeCode: string
    region: string
    phoneNumber: string
    emailAddress: string
  }
  