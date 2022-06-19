import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComponent2 } from './listado.component';

describe('ListadoComponent', () => {
  let component: ListadoComponent2;
  let fixture: ComponentFixture<ListadoComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoComponent2 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
