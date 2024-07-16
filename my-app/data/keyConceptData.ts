const keyConcepts = [
        { 
            id: 'modules', 
            title: 'Modules', 
            details: `Angular modules are used to group related code into cohesive units. 
                      They can include components, services, directives, and other features 
                      needed for specific functionality in an Angular application. A module 
                      can be thought of as a container for a cohesive block of code dedicated 
                      to an application domain, a workflow, or a closely related set of capabilities.`,
            codeSnippet: `
                // Example of defining an Angular module
                import { NgModule } from '@angular/core';
                import { CommonModule } from '@angular/common';
                import { MyComponent } from './my-component';
    
                @NgModule({
                    declarations: [MyComponent],
                    imports: [CommonModule],
                    providers: [],
                    exports: [MyComponent]
                })
                export class MyModule { }
            `,
            codeExplanation: `
                This code defines an Angular module named 'MyModule'. The @NgModule decorator configures the module:
                - declarations: lists components, directives, and pipes that belong to this module
                - imports: other modules whose exported classes are needed by component templates in this module
                - providers: services that this module contributes to the global collection of services
                - exports: subset of declarations that should be visible and usable in other modules
            `,
            useCases: [
                "Organizing application features into distinct functional modules",
                "Creating reusable library modules for shared functionality",
                "Implementing lazy-loading for better performance in large applications",
                "Separating concerns in the application architecture"
            ],
            summary: "Angular modules provide a way to organize and encapsulate related functionality, improving code organization, maintainability, and enabling features like lazy-loading for better application performance."
        },
        { 
            id: 'routing', 
            title: 'Routing', 
            details: `Angular routing enables navigation from one view to another as users 
                      perform tasks within an application. It uses a URL-like syntax to 
                      define navigation paths and load different components based on the 
                      current URL. This allows for the development of single-page applications 
                      (SPAs) where different views or pages are dynamically loaded without 
                      requiring a full page reload.`,
            codeSnippet: `
                // Example of configuring Angular routing
                import { NgModule } from '@angular/core';
                import { RouterModule, Routes } from '@angular/router';
                import { HomeComponent } from './home.component';
                import { AboutComponent } from './about.component';
    
                const routes: Routes = [
                    { path: '', component: HomeComponent },
                    { path: 'about', component: AboutComponent }
                ];
    
                @NgModule({
                    imports: [RouterModule.forRoot(routes)],
                    exports: [RouterModule]
                })
                export class AppRoutingModule { }
            `,
            codeExplanation: `
                This code sets up basic routing for an Angular application:
                - We define a Routes array that maps URL paths to components
                - The empty path '' is typically used for the home page
                - Other paths like 'about' load their respective components
                - RouterModule.forRoot(routes) registers the routes at the application's root level
                - The AppRoutingModule can be imported in the main AppModule to enable routing
            `,
            useCases: [
                "Creating multi-page Single Page Applications (SPAs)",
                "Implementing navigation between different views or components",
                "Building complex user flows and wizards",
                "Enabling deep linking to specific application states"
            ],
            summary: "Angular routing provides a powerful way to create navigable single-page applications, allowing developers to define URL-based navigation paths and dynamically load components based on the current route."
        },
        { 
            id: 'services', 
            title: 'Services', 
            details: `Angular services are singleton objects that provide logic and data 
                      to multiple components throughout an application. They are typically 
                      used for tasks such as data fetching, logging, or interacting with 
                      external services. Services promote the reuse of code and make it 
                      easier to maintain and test applications.`,
            codeSnippet: `
                // Example of creating an Angular service
                import { Injectable } from '@angular/core';
                import { HttpClient } from '@angular/common/http';
                import { Observable } from 'rxjs';
    
                @Injectable({
                    providedIn: 'root'
                })
                export class DataService {
                    constructor(private http: HttpClient) { }
    
                    fetchData(): Observable<any> {
                        return this.http.get('https://api.example.com/data');
                    }
    
                    processData(data: any): any {
                        // Some data processing logic
                        return processedData;
                    }
                }
            `,
            codeExplanation: `
                This code defines a DataService:
                - @Injectable decorator marks it as a service that can be injected
                - providedIn: 'root' makes it available throughout the application
                - It uses HttpClient to make HTTP requests
                - fetchData method returns an Observable for asynchronous data fetching
                - processData method demonstrates how services can encapsulate business logic
            `,
            useCases: [
                "Sharing data between components",
                "Encapsulating business logic and computations",
                "Managing API calls and external service interactions",
                "Implementing cross-cutting concerns like logging or authentication"
            ],
            summary: "Angular services are essential for organizing and sharing business logic, data, and functionality across components in an application. They promote code reuse, maintainability, and separation of concerns."
        },
        { 
            id: 'directives', 
            title: 'Directives', 
            details: `Angular directives are markers on a DOM element that tell Angular's 
                      HTML compiler to attach a specified behavior to that DOM element or 
                      transform the DOM element and its children. They are a powerful way 
                      to extend HTML with new attributes and tags. There are three kinds of 
                      directives in Angular: Component, Structural, and Attribute directives.`,
            codeSnippet: `
                <!-- Example of using Angular directives -->
                <div *ngIf="isDataLoaded">
                    <p *ngFor="let item of items">{{ item.name }}</p>
                </div>
    
                // Example of defining a custom Angular directive
                import { Directive, ElementRef, Input, OnInit } from '@angular/core';
    
                @Directive({
                    selector: '[appHighlight]'
                })
                export class HighlightDirective implements OnInit {
                    @Input() highlightColor: string = 'yellow';
    
                    constructor(private el: ElementRef) {}
    
                    ngOnInit() {
                        this.el.nativeElement.style.backgroundColor = this.highlightColor;
                    }
                }
            `,
            codeExplanation: `
                This example shows both built-in and custom directives:
                - *ngIf and *ngFor are structural directives that modify the DOM structure
                - The custom HighlightDirective is an attribute directive that changes an element's appearance
                - @Directive decorator defines the selector for the custom directive
                - @Input() allows the directive to accept a parameter
                - ElementRef is used to directly access and modify the DOM element
            `,
            useCases: [
                "Conditionally rendering elements (*ngIf)",
                "Repeating elements based on a collection (*ngFor)",
                "Modifying the appearance or behavior of elements",
                "Creating reusable UI behaviors"
            ],
            summary: "Directives in Angular provide a powerful way to extend HTML's capabilities, allowing developers to create dynamic and interactive user interfaces with declarative syntax and custom behaviors."
        },
        { 
            id: 'pipes', 
            title: 'Pipes', 
            details: `Angular pipes allow you to transform data in your templates before displaying it. 
                      They can be used to format dates, numbers, currency amounts, and more. Pipes are 
                      a simple way to transform values in an Angular template. You can use built-in pipes 
                      or create custom pipes to suit your needs.`,
            codeSnippet: `
                <!-- Example of using built-in Angular pipes -->
                <p>{{ currentDate | date:'fullDate' }}</p>
                <p>{{ price | currency:'USD' }}</p>
    
                // Example of creating a custom Angular pipe
                import { Pipe, PipeTransform } from '@angular/core';
    
                @Pipe({
                    name: 'truncate'
                })
                export class TruncatePipe implements PipeTransform {
                    transform(value: string, limit: number = 20): string {
                        if (value.length > limit) {
                            return value.substring(0, limit) + '...';
                        }
                        return value;
                    }
                }
            `,
            codeExplanation: `
                This example demonstrates both built-in and custom pipes:
                - The date pipe formats a date object into a readable string
                - The currency pipe formats a number as a currency amount
                - The custom TruncatePipe shortens a string to a specified length
                - @Pipe decorator defines the name used to apply the pipe in templates
                - transform method contains the pipe's logic, accepting value and optional arguments
            `,
            useCases: [
                "Formatting dates and times",
                "Displaying numbers as currency or percentages",
                "Filtering and sorting lists",
                "Text transformations like capitalization or truncation"
            ],
            summary: "Pipes in Angular provide a clean and reusable way to transform and format data directly in templates, enhancing the presentation of information without modifying the underlying data."
        },
        { 
            id: 'dom-apis', 
            title: 'DOM APIs', 
            details: `Angular provides access to DOM APIs for manipulating the DOM directly when needed, 
                      although it encourages using Angular's data binding and directives for most cases. 
                      Direct DOM manipulation should be used sparingly as it can lead to code that is 
                      harder to maintain and test.`,
            codeSnippet: `
                // Example of using ElementRef to access native DOM element
                import { Component, ElementRef, AfterViewInit } from '@angular/core';
    
                @Component({
                    selector: 'app-dom-manipulation',
                    template: '<div #myElement>Example</div>'
                })
                export class DomManipulationComponent implements AfterViewInit {
                    constructor(private elementRef: ElementRef) {}
    
                    ngAfterViewInit() {
                        const nativeElement = this.elementRef.nativeElement;
                        nativeElement.style.backgroundColor = 'blue';
                    }
                }
            `,
            codeExplanation: `
                This example demonstrates direct DOM manipulation:
                - ElementRef is injected to get access to the native element
                - ngAfterViewInit lifecycle hook ensures the view is initialized before manipulation
                - nativeElement provides direct access to the DOM element
                - DOM properties like style can be directly modified
            `,
            useCases: [
                "Integrating with third-party libraries that require direct DOM access",
                "Performing complex animations or visualizations",
                "Optimizing performance for specific scenarios",
                "Accessing properties not easily accessible through Angular's abstractions"
            ],
            summary: "While Angular generally discourages direct DOM manipulation, it provides APIs for cases where it's necessary. These should be used judiciously, as overuse can lead to maintenance issues and potential conflicts with Angular's change detection."
        },
        { 
            id: 'lifecycle-hooks', 
            title: 'Lifecycle Hooks', 
            details: `Angular lifecycle hooks allow you to tap into specific moments in the lifecycle 
                      of a component or directive, from creation to destruction. They enable you to 
                      perform actions such as initialization, change detection, and cleanup.`,
            codeSnippet: `
                // Example of using Angular lifecycle hooks
                import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
        
                @Component({
                    selector: 'app-lifecycle-hooks',
                    template: '<p>{{ message }}</p>'
                })
                export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
                    message: string = '';
        
                    ngOnInit() {
                        this.message = 'Component initialized';
                    }
        
                    ngOnChanges() {
                        console.log('Input properties changed');
                    }
        
                    ngDoCheck() {
                        console.log('Change detection run');
                    }
        
                    ngAfterContentInit() {
                        console.log('Content initialized');
                    }
        
                    ngAfterContentChecked() {
                        console.log('Content checked');
                    }
        
                    ngAfterViewInit() {
                        console.log('View initialized');
                    }
        
                    ngAfterViewChecked() {
                        console.log('View checked');
                    }
        
                    ngOnDestroy() {
                        console.log('Component destroyed');
                    }
                }
            `,
            codeExplanation: `
                This example shows the implementation of all major lifecycle hooks:
                - ngOnInit: Called once the component is initialized
                - ngOnChanges: Called when an input property changes
                - ngDoCheck: Called during every change detection run
                - ngAfterContentInit: Called after content (ng-content) has been projected into view
                - ngAfterContentChecked: Called after every projection of content
                - ngAfterViewInit: Called after the component's view (and child views) has been initialized
                - ngAfterViewChecked: Called after every check of the component's view (and child views)
                - ngOnDestroy: Called just before the component is destroyed
            `,
            useCases: [
                "Performing initialization tasks when a component is created",
                "Responding to changes in input properties",
                "Cleaning up resources (e.g., unsubscribing from observables) when a component is destroyed",
                "Interacting with the DOM after the component's view has been fully initialized"
            ],
            summary: "Lifecycle hooks provide a way to tap into different stages of a component's lifecycle, allowing developers to execute custom logic at specific points such as initialization, change detection, and destruction."
        },
        { 
            id: 'data-binding', 
            title: 'Data Binding', 
            details: `Data binding is a powerful feature in Angular that allows you to synchronize 
                      the model and the view. It can be one-way (from the model to the view or vice versa) 
                      or two-way. Angular offers several types of data binding such as interpolation, 
                      property binding, event binding, and two-way data binding using ngModel.`,
            codeSnippet: `
                // Component class
                export class DataBindingComponent {
                    message: string = 'Hello, Angular!';
                    inputValue: string = '';
    
                    handleClick() {
                        console.log('Button clicked!');
                    }
                }
    
                <!-- Template -->
                <!-- Interpolation -->
                <p>{{ message }}</p>
    
                <!-- Property binding -->
                <input [value]="message">
    
                <!-- Event binding -->
                <button (click)="handleClick()">Click me</button>
    
                <!-- Two-way data binding -->
                <input [(ngModel)]="inputValue">
            `,
            codeExplanation: `
                This example demonstrates different types of data binding:
                - Interpolation: {{ message }} displays the value of the message property in the view
                - Property binding: [value]="message" binds the message property to the input's value attribute
                - Event binding: (click)="handleClick()" calls the handleClick method when the button is clicked
                - Two-way data binding: [(ngModel)]="inputValue" synchronizes the input value with the inputValue property
            `,
            useCases: [
                "Displaying dynamic data in templates",
                "Updating component properties based on user input",
                "Responding to user events like clicks or form submissions",
                "Creating interactive forms with real-time updates"
            ],
            summary: "Data binding in Angular provides a powerful way to create dynamic and interactive user interfaces by synchronizing data between the component class and the template, reducing the need for manual DOM manipulation."
        },
    
            { 
                id: 'dependency-injection', 
                title: 'Dependency Injection', 
                details: `Dependency Injection (DI) is a design pattern used to implement IoC (Inversion of Control) 
                          for resolving dependencies. Angular uses DI to provide components with the services they need. 
                          This makes it easy to manage the dependencies and allows for better testability and maintainability 
                          of the code.`,
                codeSnippet: `
                    // Example of Dependency Injection in Angular
                    import { Injectable } from '@angular/core';
        
                    @Injectable({
                        providedIn: 'root'
                    })
                    export class LoggerService {
                        log(message: string) {
                            console.log(message);
                        }
                    }
        
                    import { Component } from '@angular/core';
                    import { LoggerService } from './logger.service';
        
                    @Component({
                        selector: 'app-logger',
                        template: '<button (click)="logMessage()">Log Message</button>'
                    })
                    export class LoggerComponent {
                        constructor(private loggerService: LoggerService) {}
        
                        logMessage() {
                            this.loggerService.log('This is a log message');
                        }
                    }
                `,
                codeExplanation: `
                    This example demonstrates Dependency Injection in Angular:
                    - LoggerService is defined with @Injectable decorator, making it injectable
                    - providedIn: 'root' makes the service available application-wide
                    - In LoggerComponent, LoggerService is injected via the constructor
                    - Angular's DI system automatically provides an instance of LoggerService
                `,
                useCases: [
                    "Injecting services into components for shared functionality",
                    "Managing global state across an application",
                    "Implementing cross-cutting concerns like logging or authentication",
                    "Improving testability by allowing easy mocking of dependencies"
                ],
                summary: "Dependency Injection in Angular provides a way to supply dependencies to classes, promoting loose coupling, easier testing, and better maintainability of code."
            },
            { 
                id: 'forms', 
                title: 'Forms', 
                details: `Forms are a fundamental part of any web application, and Angular provides two 
                          distinct approaches for handling user input through forms: template-driven forms 
                          and reactive forms. Template-driven forms rely on directives in the template to 
                          create and manage the form. Reactive forms are more powerful and scalable, using 
                          a model-driven approach to handle form inputs and validation.`,
                codeSnippet: `
                    <!-- Example of template-driven form -->
                    <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
                        <input name="username" ngModel required>
                        <button type="submit">Submit</button>
                    </form>
        
                    // Example of reactive form
                    import { Component, OnInit } from '@angular/core';
                    import { FormGroup, FormControl, Validators } from '@angular/forms';
        
                    @Component({
                        selector: 'app-reactive-form',
                        template: \`
                            <form [formGroup]="form" (ngSubmit)="onSubmit()">
                                <input formControlName="username">
                                <button type="submit">Submit</button>
                            </form>
                        \`
                    })
                    export class ReactiveFormComponent implements OnInit {
                        form: FormGroup;
        
                        ngOnInit() {
                            this.form = new FormGroup({
                                username: new FormControl('', Validators.required)
                            });
                        }
        
                        onSubmit() {
                            console.log(this.form.value);
                        }
                    }
                `,
                codeExplanation: `
                    This example shows both template-driven and reactive forms:
                    - Template-driven form uses ngForm directive and two-way binding with ngModel
                    - Reactive form uses FormGroup and FormControl from @angular/forms
                    - Reactive form defines the form structure in the component class
                    - Both approaches handle form submission and can incorporate validation
                `,
                useCases: [
                    "Creating user registration and login forms",
                    "Building complex data entry forms with validation",
                    "Implementing dynamic forms that change based on user input",
                    "Handling form submission and processing in Angular applications"
                ],
                summary: "Angular provides two powerful approaches to handling forms: template-driven for simpler scenarios and reactive for more complex, dynamic forms. Both offer robust features for form management and validation."
            },
            { 
                id: 'http-client', 
                title: 'HTTP Client', 
                details: `The HttpClient module in Angular provides a simplified client HTTP API for 
                          Angular applications. It allows you to perform HTTP requests and handle 
                          responses asynchronously. It supports JSONP, interceptors, request and 
                          response types, error handling, and more.`,
                codeSnippet: `
                    // Example of using HttpClient in Angular
                    import { Component } from '@angular/core';
                    import { HttpClient } from '@angular/common/http';
        
                    @Component({
                        selector: 'app-http-client',
                        template: '<button (click)="fetchData()">Fetch Data</button>'
                    })
                    export class HttpClientComponent {
                        constructor(private http: HttpClient) {}
        
                        fetchData() {
                            this.http.get('https://api.example.com/data')
                                .subscribe(data => {
                                    console.log(data);
                                });
                        }
                    }
                `,
                codeExplanation: `
                    This example demonstrates using HttpClient:
                    - HttpClient is injected into the component via constructor
                    - get method is used to make a GET request to an API endpoint
                    - The response is handled asynchronously using subscribe
                    - Data from the response is logged to the console
                `,
                useCases: [
                    "Fetching data from backend APIs",
                    "Sending data to servers (POST, PUT requests)",
                    "Implementing CRUD operations in Angular applications",
                    "Handling file uploads and downloads"
                ],
                summary: "Angular's HttpClient provides a powerful and easy-to-use way to make HTTP requests, enabling communication with backend services and APIs in a clean, Observable-based approach."
            },
            { 
                id: 'authentication', 
                title: 'Authentication', 
                details: `Authentication is a crucial aspect of most web applications. Angular provides 
                          support for implementing authentication mechanisms such as JWT (JSON Web Tokens), 
                          OAuth, and other authentication protocols. It allows you to secure routes, 
                          manage user sessions, and interact with authentication APIs.`,
                codeSnippet: `
                    // Example of implementing JWT authentication in Angular
                    import { Injectable } from '@angular/core';
                    import { HttpClient } from '@angular/common/http';
        
                    @Injectable({
                        providedIn: 'root'
                    })
                    export class AuthService {
                        constructor(private http: HttpClient) {}
        
                        login(credentials: any) {
                            return this.http.post('https://api.example.com/login', credentials);
                        }
        
                        logout() {
                            // Implement logout logic
                        }
                    }
                `,
                codeExplanation: `
                    This example shows a basic authentication service:
                    - AuthService is created to handle authentication-related operations
                    - login method sends credentials to a login API endpoint
                    - The service can be extended to store tokens, check authentication status, etc.
                    - logout method can be implemented to clear tokens and end the user session
                `,
                useCases: [
                    "Implementing user login and registration",
                    "Securing routes in Angular applications",
                    "Managing user sessions and tokens",
                    "Integrating with various authentication providers (e.g., OAuth, JWT)"
                ],
                summary: "Authentication in Angular applications involves creating services to manage user authentication, integrating with backend auth APIs, and securing routes to protect sensitive parts of the application."
            },
            {
                id: 'components',
                title: 'Components',
                details: `Components are the basic building blocks of Angular applications. 
                          They are responsible for rendering the UI and handling user interactions. 
                          A component consists of an HTML template, CSS styles, and a TypeScript class.`,
                codeSnippet: `
                    // Example of defining an Angular component
                    import { Component } from '@angular/core';
        
                    @Component({
                        selector: 'app-my-component',
                        template: '<p>{{ message }}</p>',
                        styles: ['p { font-weight: bold; }']
                    })
                    export class MyComponent {
                        message = 'Hello, Angular!';
                    }
                `,
                codeExplanation: `
                    This example demonstrates a basic Angular component:
                    - @Component decorator defines component metadata
                    - selector specifies how to use the component in HTML
                    - template defines the component's HTML structure
                    - styles array contains CSS styles for the component
                    - The class holds the component's logic and data
                `,
                useCases: [
                    "Creating reusable UI elements",
                    "Organizing application into modular pieces",
                    "Implementing complex user interfaces",
                    "Separating concerns in the application architecture"
                ],
                summary: "Components are the fundamental building blocks in Angular, encapsulating HTML, CSS, and TypeScript to create reusable and modular pieces of user interface and functionality."
            },

    
            {
                id: 'selectors',
                title: 'Selectors',
                details: `Selectors are used in Angular to identify components within the HTML 
                          and apply the corresponding component logic and styles. They are defined 
                          using CSS selectors and are used in component metadata to specify how a 
                          component should be displayed.`,
                codeSnippet: `
                    // Example of using a selector to render a component
                    @Component({
                        selector: 'app-my-component',
                        template: '<p>Hello, Angular!</p>'
                    })
                    export class MyComponent { }
                `,
                codeExplanation: `
                    This example demonstrates how selectors are used to define and render an Angular component:
                    - @Component decorator configures the component with metadata
                    - selector defines the custom HTML element where the component will render
                    - template provides the HTML structure for the component
                `,
                useCases: [
                    "Defining reusable components",
                    "Applying styles and behavior to specific parts of the application",
                    "Integrating with third-party libraries using custom selectors"
                ],
                summary: "Selectors in Angular enable the identification and rendering of components based on CSS selectors, facilitating component reuse and styling flexibility."
            },
            {
                id: 'styling',
                title: 'Styling',
                details: `Styling in Angular can be done using CSS, SCSS, or other preprocessor 
                          stylesheets. Styles can be scoped to a specific component or globally 
                          applied to the entire application.`,
                codeSnippet: `
                    /* Example of component-specific styling */
                    p {
                        font-weight: bold;
                    }
                `,
                codeExplanation: `
                    Styling in Angular allows you to apply CSS styles to components:
                    - Styles can be defined inline within component metadata or in separate style files
                    - CSS classes and pseudo-selectors can be used for styling
                    - Encapsulation ensures styles only apply to the component's template
                `,
                useCases: [
                    "Customizing component appearance",
                    "Ensuring style encapsulation to prevent global style conflicts",
                    "Supporting responsive design and theming"
                ],
                summary: "Styling in Angular provides flexible options for applying CSS to components, supporting scoped styles for enhanced modularity and maintainability."
            },
            {
                id: 'input-properties',
                title: 'Accepting Data with Input Properties',
                details: `Input properties allow you to pass data from a parent component to a child component 
                          in Angular. They enable communication between components by binding data.`,
                codeSnippet: `
                    // Example of using input properties in Angular
                    import { Component, Input } from '@angular/core';
        
                    @Component({
                        selector: 'app-child-component',
                        template: '<p>{{ message }}</p>'
                    })
                    export class ChildComponent {
                        @Input() message: string;
                    }
        
                    @Component({
                        selector: 'app-parent-component',
                        template: '<app-child-component [message]="parentMessage"></app-child-component>'
                    })
                    export class ParentComponent {
                        parentMessage = 'Message from parent component';
                    }
                `,
                codeExplanation: `
                    Input properties facilitate data flow from parent to child components:
                    - @Input decorator marks a property as an input binding
                    - Parent components can bind data to child component properties using property binding []
                    - Changes in parent data automatically reflect in the child component
                `,
                useCases: [
                    "Passing dynamic data to child components",
                    "Enabling communication and coordination between components",
                    "Supporting reusability by making components more configurable"
                ],
                summary: "Input properties in Angular enable parent components to pass data dynamically to child components, fostering component interaction and reusability."
            },
            {
                id: 'outputs',
                title: 'Custom Events with Outputs',
                details: `Outputs in Angular allow a child component to emit events to its parent component. 
                          They enable communication from child to parent.`,
                codeSnippet: `
                    // Example of using outputs in Angular
                    import { Component, Output, EventEmitter } from '@angular/core';
        
                    @Component({
                        selector: 'app-child-component',
                        template: '<button (click)="sendMessage()">Send Message</button>'
                    })
                    export class ChildComponent {
                        @Output() messageEvent = new EventEmitter<string>();
        
                        sendMessage() {
                            this.messageEvent.emit('Message from child component');
                        }
                    }
        
                    @Component({
                        selector: 'app-parent-component',
                        template: '<app-child-component (messageEvent)="receiveMessage($event)"></app-child-component>'
                    })
                    export class ParentComponent {
                        receiveMessage(message: string) {
                            console.log(message);
                        }
                    }
                `,
                codeExplanation: `
                    Outputs in Angular enable child components to communicate with parent components:
                    - @Output decorator marks a property as an output binding
                    - Child components can emit events using EventEmitter
                    - Parent components can listen to child events using event binding ()
                `,
                useCases: [
                    "Notifying parent components of child component actions",
                    "Handling user interactions and triggering parent component responses",
                    "Implementing complex component interactions and state management"
                ],
                summary: "Outputs in Angular facilitate communication from child to parent components by emitting events, enabling responsive and interactive application behavior."
            },
            {
                id: 'content-projection',
                title: 'Content Projection with ng-content',
                details: `Content projection allows you to include HTML content and components dynamically 
                          inside another component's template. It provides a way to create reusable components 
                          with flexible layouts.`,
                codeSnippet: `
                    <!-- Example of using content projection in Angular -->
                    <div>
                        <ng-content></ng-content>
                    </div>
        
                    <app-my-component>
                        <p>Projected content</p>
                    </app-my-component>
                `,
                codeExplanation: `
                    Content projection in Angular enables the insertion of external content into a component:
                    - <ng-content> tag serves as a placeholder for projected content
                    - Allows the parent component to define how content is projected into child components
                    - Facilitates building flexible and reusable components with dynamic content
                `,
                useCases: [
                    "Creating reusable component templates with dynamic content",
                    "Building layout components that can adapt to varying content requirements",
                    "Supporting content customization without modifying component internals"
                ],
                summary: "Content projection in Angular provides a mechanism to project HTML content and components dynamically into other components, enhancing flexibility and reusability."
            },
            {
                id: 'host-elements',
                title: 'Host Elements',
                details: `Host elements in Angular allow you to access and modify the DOM elements 
                          that host a component.`,
                codeSnippet: `
                    // Example of accessing host elements in Angular
                    import { Directive, ElementRef } from '@angular/core';
        
                    @Directive({
                        selector: '[appCustomDirective]'
                    })
                    export class CustomDirective {
                        constructor(private el: ElementRef) {
                            el.nativeElement.style.backgroundColor = 'yellow';
                        }
                    }
                `,
                codeExplanation: `
                    Host elements in Angular provide access to the DOM elements hosting a component:
                    - ElementRef allows direct access to the host element's properties and methods
                    - Useful for manipulating host element behavior and appearance dynamically
                    - Encourages direct interaction with the DOM for specific component requirements
                `,
                useCases: [
                    "Modifying host element styles or attributes dynamically",
                    "Integrating third-party libraries requiring direct DOM access",
                    "Implementing custom behavior tied to the host element lifecycle"
                ],
                summary: "Host elements in Angular facilitate direct manipulation and interaction with the DOM elements hosting a component, enabling dynamic styling and behavior customization."
            },
            {
                id: 'queries',
                title: 'Referencing Component Children with Queries',
                details: `Queries in Angular allow you to obtain references to child components, 
                          elements, or directives from within a parent component.`,
                codeSnippet: `
                    // Example of using ViewChild to reference a child component
                    import { Component, ViewChild, ElementRef } from '@angular/core';
        
                    @Component({
                        selector: 'app-parent-component',
                        template: '<app-child-component></app-child-component>'
                    })
                    export class ParentComponent {
                        @ViewChild(ChildComponent, { static: true }) childComponent: ChildComponent;
        
                        ngAfterViewInit() {
                            console.log(this.childComponent);
                        }
                    }
                `,
                codeExplanation: `
                    Queries in Angular facilitate accessing child components, elements, or directives:
                    - @ViewChild decorator allows a parent component to query and access a child component
                    - Useful for parent components needing to interact with or manipulate child component properties
                    - Supports both static and dynamic querying based on component lifecycle
                `,
                useCases: [
                    "Interacting with child components from within parent components",
                    "Accessing DOM elements or directives hosted within child components",
                    "Implementing complex component communication and coordination"
                ],
                summary: "Queries in Angular provide mechanisms for parent components to query and interact with child components, facilitating hierarchical communication and component integration."
            },
            {
                id: 'inheritance',
                title: 'Inheritance',
                details: `Inheritance in Angular allows you to extend the functionality of a 
                          component or directive by inheriting from another component or directive.`,
                codeSnippet: `
                    // Example of component inheritance in Angular
                    import { Component } from '@angular/core';
        
                    export class BaseComponent {
                        message = 'Hello from base component';
                    }
        
                    @Component({
                        selector: 'app-child-component',
                        template: '<p>{{ message }}</p>'
                    })
                    export class ChildComponent extends BaseComponent { }
                `,
                codeExplanation: `
                    Inheritance in Angular supports extending component or directive functionality:
                    - Allows child components to inherit properties and methods from a base component
                    - Promotes code reuse and facilitates extending component behavior
                    - Encourages hierarchical organization of components based on shared functionality
                `,
                useCases: [
                    "Sharing common functionality across multiple components",
                    "Implementing variations of a base component with specialized behavior",
                    "Promoting code reuse and maintaining consistency across components"
                ],
                summary: "Inheritance in Angular enables components to extend and inherit functionality from a base component or directive, promoting code reuse and hierarchical organization."
            },
            {
                id: 'programmatic-rendering',
                title: 'Programmatically Rendering Components',
                details: `Programmatically rendering components in Angular allows you to create 
                          and insert components dynamically at runtime.`,
                codeSnippet: `
                    // Example of programmatically rendering components in Angular
                    import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
        
                    @Component({
                        selector: 'app-dynamic-component',
                        template: '<div #container></div>'
                    })
                    export class DynamicComponent {
                        @ViewChild('container', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
        
                        constructor(private resolver: ComponentFactoryResolver) {}
        
                        ngOnInit() {
                            const factory = this.resolver.resolveComponentFactory(MyDynamicComponent);
                            const componentRef = this.container.createComponent(factory);
                        }
                    }
                `,
                codeExplanation: `
                    Programmatic component rendering in Angular allows dynamic creation and insertion of components:
                    - ViewChild decorator provides access to a ViewContainerRef to insert components dynamically
                    - ComponentFactoryResolver resolves the component factory to create new component instances
                    - Enables dynamic UI composition and flexible component instantiation at runtime
                `,
                useCases: [
                    "Creating dynamic user interfaces based on runtime conditions or user interactions",
                    "Implementing modal dialogs, tooltips, or dynamic content loading",
                    "Supporting complex UI layouts and component-based architectures"
                ],
                summary: "Programmatic rendering in Angular empowers applications to dynamically create and insert components at runtime, enhancing flexibility and supporting dynamic user experiences."
            },
            {
                id: 'advanced-configuration',
                title: 'Advanced Configuration',
                details: `Advanced configuration in Angular involves optimizing performance, 
                          configuring providers, handling lazy loading, and managing application settings.`,
                codeSnippet: `
                    // Example of lazy loading a module in Angular
                    import { NgModule } from '@angular/core';
                    import { Routes, RouterModule } from '@angular/router';
        
                    const routes: Routes = [
                        { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
                    ];
        
                    @NgModule({
                        imports: [RouterModule.forRoot(routes)],
                        exports: [RouterModule]
                    })
                    export class AppRoutingModule { }
                `,
                codeExplanation: `
                    Advanced configuration in Angular involves optimizing application performance and managing application settings:
                    - Lazy loading optimizes application startup time by loading modules on demand
                    - RouterModule.forRoot configures application-level routes and navigation
                    - Manages application-wide settings and configurations for scalability and maintainability
                `,
                useCases: [
                    "Optimizing application startup time and performance",
                    "Managing large-scale applications with modular architecture",
                    "Implementing efficient routing and navigation strategies"
                ],
                summary: "Advanced configuration in Angular encompasses strategies for optimizing performance, configuring routing, and managing application settings, ensuring scalable and efficient Angular applications."
            },
            {
                id: 'custom-elements',
                title: 'Custom Elements',
                details: `Custom elements in Angular allow you to create reusable components 
                          that can be used in non-Angular applications or frameworks.`,
                codeSnippet: `
                    // Example of creating a custom element in Angular
                    import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
                    import { BrowserModule } from '@angular/platform-browser';
        
                    @Component({
                        selector: 'app-root',
                        template: '<h1>Hello, Angular!</h1>'
                    })
                    export class AppComponent { }
        
                    @NgModule({
                        declarations: [AppComponent],
                        imports: [BrowserModule],
                        schemas: [CUSTOM_ELEMENTS_SCHEMA],
                        bootstrap: [AppComponent]
                    })
                    export class AppModule { }
                `,
                codeExplanation: `
                    Custom elements in Angular enable the creation of reusable components for use in non-Angular environments:
                    - CUSTOM_ELEMENTS_SCHEMA allows the use of custom elements in Angular templates
                    - Facilitates interoperability with web components and integration into other frameworks
                    - Supports encapsulating Angular functionality into standalone custom elements
                `,
                useCases: [
                    "Creating reusable UI components for non-Angular applications or frameworks",
                    "Integrating Angular components into existing web projects or third-party systems",
                    "Promoting component reuse and modular design across different environments"
                ],
                summary: "Custom elements in Angular extend component reuse by enabling the creation of encapsulated UI components compatible with non-Angular environments and frameworks."
            }
]

export default keyConcepts;
