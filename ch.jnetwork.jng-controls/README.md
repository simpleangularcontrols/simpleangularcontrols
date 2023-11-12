# Development

Zum Entwicklen von Komponenten wie folg vorgehen.

1. Common Library starten
2. Bootstrap 4 Library starten
3. Bootstrap 4 Demo Project starten

## Common Library
```
npm run run-common
```

## Bootstrap 3
> Project wird nicht mehr weiterentwickeln
```
npm run run-bs3
```

## Bootstrap 4
```
npm run run-bs4
```


## Bootstrap 4 Demo Projekt

```
npm run demo-bs
```


# Documentation

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

# Testing

## Create/Edit Tests

Um Tests zu erstellen oder zu bearbeiten folgendes Command ausführen

```
npm run test-edit
```

Das nötige NPM Packet für die die Angular Component tests ist hier https://www.npmjs.com/package/@jscutlery/cypress-angular


## Run Tests

Um die Tests zu starten

```
npm run test-run
```

## Problems

### Type DynamicModule does not have 'ɵmod' property.

Wenn diese Fehlermeldungen bei einem Test angezeigt wird muss der NGCC neu ausgeführt werden. Dazu folgendes Command ausführen.

```
npm run ngcc
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

### Release Preview
```
.\build.ps1 --target=release --prerelease
```

### Optionale Parameter

`--nopublish`

Veröffentlicht das Packet nicht in der NPM Registry

`--notest` 

Deaktiviert die Cypress Tests
