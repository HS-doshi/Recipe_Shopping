import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidator{
  static invalidProjectName(control : FormControl):{[
    s:string]:boolean}{
      if(control.value === 'Test'){
        return {'invalidProjectName' : true};
      }
      return null;
    }
    static asyncInvalidProjectNmae(control: FormControl):
    Promise<any>| Observable<any>{
        const promise = new Promise((resolve, reject)=>{
          setTimeout(()=>{
            if(control.value === ' TestProject'){
              resolve({'invalidProjectName':true})
            }else{
              resolve(null)
            }
          },1000)
        })
        return promise;
    }
}
