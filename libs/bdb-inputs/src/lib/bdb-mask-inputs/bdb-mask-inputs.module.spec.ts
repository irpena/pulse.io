import { BdbMaskInputsModule } from './bdb-mask-inputs.module';

describe('BdbMaskInputsModule', () => {
  let bdbMaskInputsModule: BdbMaskInputsModule;

  beforeEach(() => {
    bdbMaskInputsModule = new BdbMaskInputsModule();
  });

  it('should create an instance', () => {
    expect(bdbMaskInputsModule).toBeTruthy();
  });
});
