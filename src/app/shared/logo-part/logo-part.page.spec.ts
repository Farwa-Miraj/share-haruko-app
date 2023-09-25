import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoPartPage } from './logo-part.page';

describe('LogoPartPage', () => {
  let component: LogoPartPage;
  let fixture: ComponentFixture<LogoPartPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogoPartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
