

The Deployed Link of this assignment : https://neon-kelpie-5039ec.netlify.app/


In this app we are going to explore the use of services and directives.
Q1.What are Angular Directives?
Ans: Directives are used to add behavior,manipulate the DOM or conditionally render elements in Angular Applications
Angular directives are instructions in the DOM that tell Angular how to trasform the DOM elements and attributes.
Angular provides built-in directives and allows you to create custom directives.
Structural Directives: Structural Directives are directives which change the DOM layout by adding and removing DOM elements.
Angular provides set of built in structural directives like NgIf,NfForOf,NgSwitch and others.
when structural directives are applied thay generally are prefixed by an asterisk * such as *ngIf.This convention is shorthand that Angular interprets and converts into longer form.
here is the example how we can use *ngIf

<!-- <div>
    <h2>Simple form</h2>
    <form #form="ngForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" [(ngModel)]="model.name" required/>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" [(ngModel)]="model.email" required/>
        </div>
        <button type="submit" [disabled]="!form.valid">Submit</button>
    </form>
  <div *ngIf="submitted">
    <h3>You submitted the form with the following data:</h3>
    <p>Name:{{model.name}}</p>
    <p>Email:{{model.email}}</p>
  </div>
</div> -->

<!-- Important  
1.what is ngForm
Ans: The ngForm directive in Angular is a built-in directive that facilitates the creation and management of forms in Angular applications,specifically for template driven forms .It is part of the @angular/forms module and provides a way to handle form controls,validation,and form submission.when you apply the ngForm directive to an HTML form element using #form="ngForm you are creating a reference to this directive and binding it to a local variable named form this variable gives you the access of the ngForm directive's properties and methods allowing you to manage the form and its controls within your component."
2.what is [(ngModel)]="model.name"?
Ans:[(ngModel)] is a two way data binding directive in Angular that enables a seamless synchronization of data between the model(component)and the view(template).It allows you to bind the value of an HTML form element to a property in your component and ensures that any changes to the form element'value update the component and vice versa.
what is *ngIf?
Ans: The *ngIf is a directive and powerful tool to conditionally show or hide the UI based on the state of your application.
-->

How *ngFor directive used in Angular?
*ngFor is used to iterate over a collection e.g. array and genetrate elements dynamically.

what are Angular Services?
Angular services are the way to organize and share code across components.
services are used for implimenting business logic ,data fetching and other functionalities that should be centralized and reusable
service is typically a class with a narrow,well-defined purpose. It should do something specific and do it well.
Here is the example of a service class that logs to the browser console.
src/app/logger.service.ts
export class Logger{
    log(msg:any) {console.log(msg);}
    error(msg:any) {console.error(msg)}
    warn(msg:any) {console.warn(msg)}
}
service can be depend on other services, for example here's a HeroService that depends upon Logger service and also uses BackendService to get all heroes.That service in turn might depend on the HttpClient service to fecth heroes asynchronously from a server

src/app/hero.service.ts
export class HeroService{
    private heroes:Hero[]=[];

  constructor with parameters and their assignments
    constructor(
        private backend:BackendService,
        private logger:Logger
    )

    {}  object literal
    using this at the end of constructor helps to avoid repetitive and boilerplate code,making the code more concise and easier to read,especially when a class has multiple dependencies injected in the constructor.

   

    getHeroes(){
        this.backend.getAll(Hero).then((heroes:Hero[])=>{
            this.logger.log(`Fetched ${heroes.length} heroes.`)
            this.heroes.push(...heroes)
        })
        return this.heroes;
    }
}


Dependency Injection : It is the part of the Angular framework that provides components with access to services and other resources . Angular provides the ability for you to inject a service into a component to give that component access to the service.

The @Injectable() decorator defines a class as a service in Angular and allows angular to inject it into a component as a dependency.
