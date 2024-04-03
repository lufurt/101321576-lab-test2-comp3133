import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await setupTestBed();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the '101321576-lab-test2-comp3133' title`, () => {
    expect(component.title).toEqual('101321576-lab-test2-comp3133');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, 101321576-lab-test2-comp3133');
  });
});

async function setupTestBed() {
  await TestBed.configureTestingModule({
    declarations: [AppComponent],
  }).compileComponents();
}
