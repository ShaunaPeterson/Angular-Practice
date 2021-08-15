import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolMusicDetailsComponent } from './cool-music-details.component';

describe('CoolMusicDetailsComponent', () => {
  let component: CoolMusicDetailsComponent;
  let fixture: ComponentFixture<CoolMusicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolMusicDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolMusicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
