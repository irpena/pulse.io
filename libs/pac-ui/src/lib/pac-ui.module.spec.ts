import { async, TestBed } from '@angular/core/testing';
import { PacUiModule } from './pac-ui.module';

describe('PacUiModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [PacUiModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(PacUiModule).toBeDefined();
  });
});
