
import { ErrorHandler, Injectable } from '@angular/core';
import * as StackTrace from 'stacktrace-js';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

    handleError(error){
        console.log("I will handle error myself");
        const message = error.message ? error.message : error.toString();
        const url ="abc";
     
        StackTrace.fromError(error).then(s=>{
            const stackstring = s.splice(0,20).map(function(r){
                return r.toString();
            }).join('\n');
   
            console.log({message,url,stack:stackstring});
        })  
        


    }
}
