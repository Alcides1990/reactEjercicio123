export class ContactoModel{
   name=''; 
   lasname='';
   email='';
   connection=false;
   constructor(name, lasname,email,connection){
    this.name=name;
    this.lasname=lasname;
    this.email=email;
    this.connection=connection;
   }
}