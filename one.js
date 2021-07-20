function kalyan(name){
    this.name=name;
    this.age=0;
}
kalyan.prototype.get=function age(){
    return this.age;
}
kalyan.prototype.set=function age(v){
     this._age=v;
}
kalyan.prototype.println=function(){
    console.log(this.name+" is "+this._age+" years old ");
}

    function tarun(_name,age,id){
        kalyan.call(this,_name);
        kalyan.prototype.set.call(this,age);
        this.age=age;
        this.id=id;
    }
    tarun.prototype=Object.create(kalyan.prototype);
    tarun.prototype.print=function(){
        console.log(this.name+ " is " +this._age+ " years old and the jersey number is "+ this.id)
    }
    const tarun1=new tarun("lionel",34,10);
    tarun1.print();
    tarun1.println();

