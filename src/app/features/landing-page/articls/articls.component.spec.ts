import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlsComponent } from './articls.component';

describe('ArticlsComponent', () => {
  let component: ArticlsComponent;
  let fixture: ComponentFixture<ArticlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
