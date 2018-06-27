import { async, TestBed } from '@angular/core/testing';
import { PscUiModule } from './psc-ui.module';

describe('PscUiModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [PscUiModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(PscUiModule).toBeDefined();
  });
});
