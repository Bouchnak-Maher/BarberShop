export class Appointments {
    appointment_id:number;
    date_created:String;
    client_id:number;
    employee_id:number;
    start_time:Date|null;
    end_time_expected:Date|null;
    canceled:number;
    cancellation_reason:string;
    constructor() {
        this.appointment_id=0;
        this.date_created="";
        this.client_id=0;
        this.employee_id=0;
        this.start_time=null;
        this.end_time_expected=null;
        this.canceled=0;
        this.cancellation_reason="";

    }
}
