import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Injector } from '@angular/core';


class Greeting {
  title = 'Hello';
}
 
class FormalGreeting extends Greeting {
  title = 'Greetings';
}

const injector = Injector.create([
  {provide: FormalGreeting,useClass:FormalGreeting,deps: []}, 
  {provide: Greeting, useClass: FormalGreeting}
]);


it('should use the existing object for Greeeting token', () => {
  // expect(injector.get(Greeting).title).toEqual('Greetings');
  // expect(injector.get(FormalGreeting).title).toEqual('Greetings');
  expect(injector.get(FormalGreeting)).toBe(injector.get(Greeting));
});



// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'live'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('live');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain('live app is running!');
//   });
// });
