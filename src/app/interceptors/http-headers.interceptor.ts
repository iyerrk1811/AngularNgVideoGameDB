import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': '2b86610523mshc94b72c53697272p17d9b1jsn4b967632184e',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                },
            setParams: {
                key: '55bc835e8c774a2dbc00248465302b52'
            }
        });
        return next.handle(req);
    }
}