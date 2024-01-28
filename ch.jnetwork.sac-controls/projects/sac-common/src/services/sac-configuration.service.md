# Custom Configuration

The default settings for the entire project can be defined via the ConfigurationService. An abstract service is available to ensure that all configurations are always available. When the library is updated, additional settings may need to be configured.

## Change settings project wide

Example of an implementation of a project-specific configuration

```typescript
import { SacAbstractConfigurationService } from '@simpleangularcontrols/sac-common';

@Injectable({
  providedIn: 'root',
})
export class CustomConfigurationService extends SacAbstractConfigurationService {
  get LabelSizeLg(): number | null {
    return 3;
  }
  get LabelSizeMd(): number | null {
    return 4;
  }
  get LabelSizeSm(): number | null {
    return 4;
  }
  get LabelSizeXl(): number | null {
    return 2;
  }
  get LabelSizeXs(): number | null {
    return 12;
  }
  get LabelSizeXxl(): number | null {
    return 2;
  }
}
```

The service must be defined in the application via the injection token `SACCONFIGURATION_SERVICE` in the NgModule.

```typescript
@NgModule({
  ...
  providers: [
    { provide: SACCONFIGURATION_SERVICE, useClass: CustomConfigurationService },
  ],
  ...
})
```

## Label below inputs

To display labels above the control, you must create a ConfigurationService in which the value 12 is defined for all LabelSize properties.
