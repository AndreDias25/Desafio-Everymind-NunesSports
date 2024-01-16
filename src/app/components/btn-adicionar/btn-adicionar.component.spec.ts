import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAdicionarComponent } from './btn-adicionar.component';

describe('BtnAdicionarComponent', () => {
  let component: BtnAdicionarComponent;
  let fixture: ComponentFixture<BtnAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnAdicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
