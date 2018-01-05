import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInteractionsComponent } from './panel-interactions.component';

describe('PanelInteractionsComponent', () => {
  let component: PanelInteractionsComponent;
  let fixture: ComponentFixture<PanelInteractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelInteractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
