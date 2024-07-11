export default class CL_reporte {
   constructor(){
    this.conthom = 0;
    this.contmuj = 0;
    this.cantper = 0;
   } 
   procesarpersonas(per){
    if(per.sexo == "M")
        this.conthom++;
    else
    this.contmuj++;
this.cantper++;
   }
reppersonas(){
    return this.cantper;
}
repmujeres(){
    return this.contmuj;
}
rephombres(){
    return this.conthom;
}
}