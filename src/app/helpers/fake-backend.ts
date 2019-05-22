import { Http,BaseRequestOptions, Response, ResponseOptions, RequestMethod } from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";

export function fakeBackendFactory(
    backend : MockBackend,
    options : BaseRequestOptions) {
    
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkZha2hyeWFuIn0._y7_u5t1iVDF4YmKuZFafoLclbCPiJb0Cb8FYLbzhwU';

    backend.connections.subscribe((connection: MockConnection) => {
        setTimeout(() =>{
        if (connection.request.url.endsWith('/api/authenticate')&&
        connection.request.method === RequestMethod.Post){
            let body = JSON.parse(connection.request.getBody());
        
        if (body.username === 'Fakhryan' && body.password === '123456'){
            connection.mockRespond(new Response(
                new ResponseOptions({
                    status :200,
                    body: {token: token}
                })));
        }else{
            connection.mockRespond(new Response(
                new ResponseOptions({ status: 200 })
            ));
        }
    }

    if (connection.request.url.endsWith('/api/orders') && 
           connection.request.method === RequestMethod.Get) {
         if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
            connection.mockRespond(new Response(
              new ResponseOptions({ status: 200, body: [1, 2, 3] })
         ));
       } else {
           connection.mockRespond(new Response(
             new ResponseOptions({ status: 401 })
           ));
       }
    }
    }, 1000);
    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    provide : Http,
    useFactory: fakeBackendFactory,
    deps : [MockBackend, BaseRequestOptions]
};