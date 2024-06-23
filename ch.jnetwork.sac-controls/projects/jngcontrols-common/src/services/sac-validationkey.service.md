# Usage

Use the interface `ISacValidationKeyService` to define your own resource keys for the texts in the controls. This is particularly useful if the texts are managed in a resource management system.

# Example implementation

```ts
@Injectable({ providedIn: 'root' })
export class ControlsLocalisation extends ISacValidationKeyService {
  public get ConfirmDefaultButtonNo(): string {
    return 'CONFIRM_BUTTON_NO';
  }

  public get ConfirmDefaultButtonYes(): string {
    return 'CONFIRM_BUTTON_YES';
  }

  public get FilebrowserButtonDelete(): string {
    return 'FILEBROWSER_DELETE';
  }

  ...
}
```
