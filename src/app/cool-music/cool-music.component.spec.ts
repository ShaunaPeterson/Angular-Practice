import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolMusicComponent } from './cool-music.component';

describe('CoolMusicComponent', () => {
  let component: CoolMusicComponent;
  let fixture: ComponentFixture<CoolMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
