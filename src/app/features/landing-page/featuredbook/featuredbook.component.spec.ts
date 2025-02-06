import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedbookComponent } from './featuredbook.component';

describe('FeaturedbookComponent', () => {
  let component: FeaturedbookComponent;
  let fixture: ComponentFixture<FeaturedbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
