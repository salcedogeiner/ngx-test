import { CrudAlgoModule } from './crud-algo.module';

describe('CrudAlgoModule', () => {
  let crudAlgoModule: CrudAlgoModule;

  beforeEach(() => {
    crudAlgoModule = new CrudAlgoModule();
  });

  it('should create an instance', () => {
    expect(crudAlgoModule).toBeTruthy();
  });
});
