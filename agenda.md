Tentitive Release Schedule
	Angular2	September 2016
	Angular4	March 2017
	Angular5	September/October 2017
	Angular6	March 2018
	Angular7	September/October 2018

Why not Angular3?
	Due to this misalignment of the router package's version, the team decided to go straight to Angular v4.

	Modules Version 2
		@angular/core 			v2.3.0
		@angular/compiler 		v2.3.0
		@angular/compiler-cli 	v2.3.0
		@angular/http 			v2.3.0

	Router Version 3
		@angular/Router 		v3.3.0

	So they have decided to go with Angular4

Tutorial Agenda
	1. Angular Releases
	2. Why not Angular3?
	3. It's just Angular!!
	4. What's new?
	5. Demo

Symentic Versioning
	X.Y.Z
	X => Major Change (Breaking Changes)
	Y => Minor Change (New Features not breaking)
	Z => Patch Update (Bugfixes not breaking)

Angular v4 Features
	* Small & Faster: (Purpose is to reduce the size of the generated code for app components by averagely 60%)

	* Animation: Angular community pulled out animation module from angular core module.

	* ngIf & ngFor:
		e.g. You can now use an if/else syntax
		<div *ngIf="userList | async as users; else loading">
		</div>
		<ng-template #loading>Loading...</ng-template>

	* Form Features:
		<form #emailForm="ngForm">
			<input type="email" ngModel required email name="email" />
			<button type="submit">Validate</button>
		</form>

	* TypeScript Compatibility:
		TypeScript 2.1 and 2.2 compatibility

	* Source Maps
		Whenever an error occurs in one of templates, source maps are generated with meaningful context in terms of the original template.

		e.g.
		Suppose if you have used a component without importing it, then it will create a source map for that error.

	* Packaging Changes

	* Upgrate to Angular4
		

