import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatPercentageOfComponent } from './what-percentage-of.component';

describe('WhatPercentageOfComponent', () => {
  let component: WhatPercentageOfComponent;
  let fixture: ComponentFixture<WhatPercentageOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatPercentageOfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatPercentageOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
