import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LogginInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Outgoing request!')
    console.log(req.url)
    console.log(req.headers)
    const modifiedRequest = req.clone({
      headers : req.headers.append('Auth' , 'Helloooo!!')
    })
    return next.handle(modifiedRequest).pipe(
      tap(event=>{
        if(event.type === HttpEventType.Response){
          console.log('Response Arrrived!!! , body data : ')
          console.log(event.body)
        }
      }
    ));
  }
}
