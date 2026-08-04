import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string; 
}
@Injectable({
  providedIn: 'root'
})
// export class ProductService {

//   constructor(private http:HttpClient) { }

//   getAllProducts(){
//     //const url='https://dummyjson.com/products'
//     this.http.get('https://dummyjson.com/products').subscribe((data)=>{
//       console.log(data)
//     })
//   }
// }
export class ProductService {  
  constructor(private http: HttpClient) {}  
  
  getProd(): Observable<Product[]> 
  {    
    return this.http.get<Product[]>('https://dummyjson.com/products'); 
  } 
} 