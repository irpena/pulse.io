import { async, TestBed } from '@angular/core/testing';
import { PicUiModule } from './pic-ui.module';

describe('PicUiModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [PicUiModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(PicUiModule).toBeDefined();
  });
});
