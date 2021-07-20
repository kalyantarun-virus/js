function kalyan(name){
    this.name=name;
    this._age=0;
}
Object.defineProperty(kalyan.prototype,'age',{
    get(){
       // console.log("get age:",this.name,this.age)
        return this._age},
        set(v){
            this._age=v.toUpperCase();
           // console.log("set age:",this.name,this._age)
        }
    })

  const tarun1=new kalyan("lionel",34,10);
  console.log(tarun1._age);
  tarun1.age='34'
  console.log(tarun1.age);


