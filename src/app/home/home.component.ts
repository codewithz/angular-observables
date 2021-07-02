import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  mySubscription:Subscription
  constructor() { }

  ngOnInit() {

    // this.mySubscription=interval(1000)
    // .subscribe(count=>{
    //  console.log(count)
    // });

    
    const customObservable=Observable.create(observer=>{
      let count=0;
      setInterval(()=>{
        observer.next(count);
        if(count>3){
          observer.complete()
        }
        if(count>5){
          observer.error(new Error('Count is greater than 5!!'))
        }
        count++
      },1000)
    })

    this.mySubscription=customObservable
    .subscribe(
    (data:number)=>{
      console.log(data)
    },
    (error)=>{
      alert(error.message)
    },
    ()=>{
      console.log('Observable completed')
    })

  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
