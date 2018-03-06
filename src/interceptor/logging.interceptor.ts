import { NestInterceptor, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';

export class LoggingInterceptor implements NestInterceptor {
  intercept(dataOrRequest: any, context: ExecutionContext, stream$: Observable<any>): Observable<any> {
    console.log('before ...')
    const now = Date.now()

    return stream$.do(() => console.log(`after... ${Date.now() - now}ms`))
  }
}