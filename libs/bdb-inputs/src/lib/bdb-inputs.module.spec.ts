import { async, TestBed } from '@angular/core/testing';
import { BdbInputsModule } from './bdb-inputs.module';

describe('BdbInputsModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [BdbInputsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(BdbInputsModule).toBeDefined();
  });
});
