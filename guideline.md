1. Install node
2. Install Typescript
3. Install angular cli
4. Create a new project with # ng new <project_name>
5. Basic Building Blocks of Angular (This is something really very important)
	5.1 Module: Module is a class with @NgModule metadata. Every angular app has atleast  one root module. Encapsulation of different similar functionalities (like compenents + directives + pipes).
	e.g. What ng module basically declares:
	@NgModule({
		declarations: [
			AppComponent,
			TaskComponent
		],
		imports: [
			BrowserModule,
			FormsModule,
			HttpModule
		],
		providers: [], // any service that is required as a dependency that need to be injected into your classes so
		bootstrap: [AppComponent] // Single component which you will be bootstapping as a root component so that is your module lets
	})

	5.2 Component: Component will have the functionality. Functionality need to be associated with the DOM, thats the reason template is there. And the template & the functionality of the components is going to be joined with something called as metadata. So you will have a component annotation that will take a meta data and it will join your component clause as well as template which may be DOM or it which may be your custom elements.

	import {Component, OnInit} from '@angular/core';
	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html',
		styleUrls: ['./app.component.css']
	})

	export class AppComponent {
		title: 'app works!'
	}
	/*export class ExampleComponent implements OnInit {
		constructor () {

		}

		ngonInit() {

		}
	}*/

	e.g. Component is created as a class and a template the one which joins the template and the class is annotator. Annotation is also referred as a decorator and this particular annotation is the one that takes the metadata which has details of name of the tag which has details of the styles that your component will need which has details of template that you will be using etc. Here app-example is a custom tag that you have created.(Vedio Time 46:05)



	5.3 Metadata: template & the functionality of the components is going to be joined with something called as metadata
	e.g. {
		selector: 'app-root',
		templateUrl: './app.component.html',
		styleUrls: ['./app.component.css']
	}
	Your metadata tells how your component should behave/created/change or how to detect changes whether it's completely isolated. Minimum required metadata are selector, templateUrl & styleUrls.

	5.4 Template:

	5.5 Data Binding: This will bind javascript variables to the template.
	Data Binding plays an important role in communication between a template and its component.
	Types of Data Binding
		Interpolation: DOM <= {{value}} <= Component (From Component Class to template)
		Property Binding: DOM <= [property] = "value" <= component (From Component Class to template)
		Event Binding: DOM (event) = "event handler" => component (From template to Component Class)
		2 Way Data Biniding: DOM <= => [(ngModel)] <= => Component

	5.6 Services: Services are dependencies which can be injected when needed and they are mostly kept as singleton's there. Services can be provided either on module level or on component level.

	5.7 Directives: Which help you manage DOM manipulation
