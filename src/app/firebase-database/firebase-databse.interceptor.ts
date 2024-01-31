import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class firebaseInterceptior implements HttpInterceptor {

  intercept(req : HttpRequest<any> , next:HttpHandler){
    console.log('Request is on its way.')
    console.log(req.url)
    const modifyRequest = req.clone({
      headers : req.headers.append('Auth' , 'Diya')
  });
  return next.handle(modifyRequest).pipe(tap(
    event=>{
      if(event.type === HttpEventType.Response){
        console.log('Response arrived body data!!')
        console.log(event.body);
    }}
  ));
}
  // interceptor will run whenever request leave an application.
};
