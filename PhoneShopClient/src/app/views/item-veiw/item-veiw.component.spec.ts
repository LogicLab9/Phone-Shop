import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemVeiwComponent } from './item-veiw.component';

describe('ItemVeiwComponent', () => {
  let component: ItemVeiwComponent;
  let fixture: ComponentFixture<ItemVeiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemVeiwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemVeiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
