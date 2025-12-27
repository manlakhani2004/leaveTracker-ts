export interface User {
    username: string,
    email: string,
    password: string,
    role: "admin" | "employee",
    leaveBalance: LeaveBalance[],
    confirmPassword:string
}
export interface LeaveBalance {
    leaveType: "sickLeave" | "casualLeave" | "earnedLeave";
    balance: number
}
