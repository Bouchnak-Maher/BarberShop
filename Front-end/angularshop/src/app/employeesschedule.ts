import { Time } from "@angular/common";

export class EmployeesSchedule {
    
    id:number;
    employee_id:number;
    day_id:number;
    from_hour:Time;
    to_hour:Time;
    constructor(){
        this.day_id=0;
        this.id=0;
        this.employee_id=0;
        this.from_hour = { hours: 0, minutes: 0}; // Initialize with default time
        this.to_hour = { hours: 0, minutes: 0 }; // Initialize with default time
    }
}
