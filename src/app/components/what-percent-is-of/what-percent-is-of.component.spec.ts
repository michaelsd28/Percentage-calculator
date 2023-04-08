import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatPercentIsOfComponent } from './what-percent-is-of.component';

describe('WhatPercentIsOfComponent', () => {
  let component: WhatPercentIsOfComponent;
  let fixture: ComponentFixture<WhatPercentIsOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatPercentIsOfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatPercentIsOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
