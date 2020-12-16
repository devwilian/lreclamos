import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectosgeneralesComponent } from './aspectosgenerales.component';

describe('AspectosgeneralesComponent', () => {
  let component: AspectosgeneralesComponent;
  let fixture: ComponentFixture<AspectosgeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspectosgeneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectosgeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
