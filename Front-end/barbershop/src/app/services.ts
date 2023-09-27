export class Services {
     service_id:number;
	 service_description:string;
	 service_price:number;
	 service_duration:number;
	 category_id:number;
	 service_name:string;
     constructor() {
        this.category_id=0;
        this.service_id=0;
        this.service_description="";
        this.service_duration=0;
        this.service_name="";
        this.service_price=0;
     }
}
