# Create Documentation

## Bootstrap 3
```
npm run-script compodoc-bs3
```
## Boostrap 4
```
npm run-script compodoc-bs4
```

## Full Documentation Build
```
build.compodoc.bat
```

# Debug

## Common Library
```
npm run run-common
```

## Bootstrap 3
```
npm run run-bs3
```

## Bootstrap 4
```
npm run run-bs4
```

# Build

## Common Library
```
npm run build-common
```

## Bootstrap 3
```
npm run build-bs3
```

## Bootstrap 4
```
npm run build-bs4
```

# Builds

## Requirements

Damit das Powershell Script ausgeführt werden kann muss folgendes Command ausgeführt werden:

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Sonst wird folgender Fehler ausgegeben:

```
./build.ps1 : File C:\Daten\jNetwork\ch.jnetwork.angularcontrols\build.ps1 cannot be loaded because running scripts is disabled    
on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ ./build.ps1
+ ~~~~~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

## Build erzeugen

Powershell Konsole im Solution Verzeichnis öffnen. Danach build.ps1 starten

```
build.ps1
```

## Test Run

Powershell Konsole im Solution Verzeichnis öffnen. Danach build.ps1 starten

```
build.ps1 --target=test
```

## Release erstellen

Powershell Konsole öffnen. Danach build.ps1 starten

### Patch

```
.\build.ps1 --target=release --patch
```

### Minor

```
.\build.ps1 --target=release --minor
```


### Major

```
.\build.ps1 --target=release --major
```


# ModuleBase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
