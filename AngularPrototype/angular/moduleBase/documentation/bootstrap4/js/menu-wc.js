'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Bootstrap 4 Angular Controls</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="todo.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>TODO
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4ButtonModule.html" data-type="entity-link">JNetworkBootstrap4ButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4ButtonModule-41b6fdf465f3c0b6eff878978e54e752"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4ButtonModule-41b6fdf465f3c0b6eff878978e54e752"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4ButtonModule-41b6fdf465f3c0b6eff878978e54e752"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4ButtonModule-41b6fdf465f3c0b6eff878978e54e752"' }>
                                            <li class="link">
                                                <a href="components/NgButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4CheckboxModule.html" data-type="entity-link">JNetworkBootstrap4CheckboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4CheckboxModule-cbd8925bf60db11228957058bc4671da"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4CheckboxModule-cbd8925bf60db11228957058bc4671da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4CheckboxModule-cbd8925bf60db11228957058bc4671da"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4CheckboxModule-cbd8925bf60db11228957058bc4671da"' }>
                                            <li class="link">
                                                <a href="components/NgCheckboxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgCheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgRadiobuttonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgRadiobuttonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgRadiobuttonsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgRadiobuttonsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4ConfirmModule.html" data-type="entity-link">JNetworkBootstrap4ConfirmModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4ConfirmModule-9062d8219f4cc52d25aca8971a6b3a97"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4ConfirmModule-9062d8219f4cc52d25aca8971a6b3a97"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4ConfirmModule-9062d8219f4cc52d25aca8971a6b3a97"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4ConfirmModule-9062d8219f4cc52d25aca8971a6b3a97"' }>
                                            <li class="link">
                                                <a href="components/NgConfirmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgConfirmComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4DateTimeModule.html" data-type="entity-link">JNetworkBootstrap4DateTimeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4DateTimeModule-8bf66f9110cbfa78575227b8621be9e9"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4DateTimeModule-8bf66f9110cbfa78575227b8621be9e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4DateTimeModule-8bf66f9110cbfa78575227b8621be9e9"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4DateTimeModule-8bf66f9110cbfa78575227b8621be9e9"' }>
                                            <li class="link">
                                                <a href="components/NgDateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgDateSelectorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDateSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgDateTimeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDateTimeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgTimeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTimeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4DialogModule.html" data-type="entity-link">JNetworkBootstrap4DialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4DialogModule-3309c576564147f23571f897be5c42e3"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4DialogModule-3309c576564147f23571f897be5c42e3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4DialogModule-3309c576564147f23571f897be5c42e3"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4DialogModule-3309c576564147f23571f897be5c42e3"' }>
                                            <li class="link">
                                                <a href="components/NgDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4FormModule.html" data-type="entity-link">JNetworkBootstrap4FormModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-JNetworkBootstrap4FormModule-aeeae16b1cde32f5854adb334626a327"' : 'data-target="#xs-directives-links-module-JNetworkBootstrap4FormModule-aeeae16b1cde32f5854adb334626a327"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-JNetworkBootstrap4FormModule-aeeae16b1cde32f5854adb334626a327"' :
                                        'id="xs-directives-links-module-JNetworkBootstrap4FormModule-aeeae16b1cde32f5854adb334626a327"' }>
                                        <li class="link">
                                            <a href="directives/NgFormularDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgFormularDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ProvideParentNgFormularDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProvideParentNgFormularDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4GridModule.html" data-type="entity-link">JNetworkBootstrap4GridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4GridModule-b838bb99461e3a6ba71fc70d6b0681b5"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4GridModule-b838bb99461e3a6ba71fc70d6b0681b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4GridModule-b838bb99461e3a6ba71fc70d6b0681b5"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4GridModule-b838bb99461e3a6ba71fc70d6b0681b5"' }>
                                            <li class="link">
                                                <a href="components/NgGridButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridColumnActionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridColumnActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridColumnComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridColumnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridImageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgGridImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgPagingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgPagingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4InputModule.html" data-type="entity-link">JNetworkBootstrap4InputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4InputModule-709c347ae14bb9b602076187511f4fe3"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4InputModule-709c347ae14bb9b602076187511f4fe3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4InputModule-709c347ae14bb9b602076187511f4fe3"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4InputModule-709c347ae14bb9b602076187511f4fe3"' }>
                                            <li class="link">
                                                <a href="components/NgInputAreaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputCurrencyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputCurrencyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputDecimalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputDecimalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputEmailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputEmailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputIntegerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputIntegerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputSearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgInputSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4ListModule.html" data-type="entity-link">JNetworkBootstrap4ListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4ListModule-ae1f7f40e907c64253fad77bc0c21d2b"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4ListModule-ae1f7f40e907c64253fad77bc0c21d2b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4ListModule-ae1f7f40e907c64253fad77bc0c21d2b"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4ListModule-ae1f7f40e907c64253fad77bc0c21d2b"' }>
                                            <li class="link">
                                                <a href="components/NgDropdownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgListboxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgListboxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-JNetworkBootstrap4ListModule-ae1f7f40e907c64253fad77bc0c21d2b"' : 'data-target="#xs-directives-links-module-JNetworkBootstrap4ListModule-ae1f7f40e907c64253fad77bc0c21d2b"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-JNetworkBootstrap4ListModule-ae1f7f40e907c64253fad77bc0c21d2b"' :
                                        'id="xs-directives-links-module-JNetworkBootstrap4ListModule-ae1f7f40e907c64253fad77bc0c21d2b"' }>
                                        <li class="link">
                                            <a href="directives/NgDropdownOptionDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgDropdownOptionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4MultilanguageModule.html" data-type="entity-link">JNetworkBootstrap4MultilanguageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4MultilanguageModule-61b548fd7967190e2b1d910d4cd26615"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4MultilanguageModule-61b548fd7967190e2b1d910d4cd26615"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4MultilanguageModule-61b548fd7967190e2b1d910d4cd26615"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4MultilanguageModule-61b548fd7967190e2b1d910d4cd26615"' }>
                                            <li class="link">
                                                <a href="components/NgMultilanguageInputAreaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgMultilanguageInputAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgMultilanguageInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgMultilanguageInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4StaticLabelModule.html" data-type="entity-link">JNetworkBootstrap4StaticLabelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4StaticLabelModule-7ddaa31d417b11e353440fc6ba56c20d"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4StaticLabelModule-7ddaa31d417b11e353440fc6ba56c20d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4StaticLabelModule-7ddaa31d417b11e353440fc6ba56c20d"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4StaticLabelModule-7ddaa31d417b11e353440fc6ba56c20d"' }>
                                            <li class="link">
                                                <a href="components/NgStaticFormContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgStaticFormContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgStaticLabelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgStaticLabelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4TabsModule.html" data-type="entity-link">JNetworkBootstrap4TabsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4TabsModule-62e6b8f62863f4d884fe01569011b94b"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4TabsModule-62e6b8f62863f4d884fe01569011b94b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4TabsModule-62e6b8f62863f4d884fe01569011b94b"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4TabsModule-62e6b8f62863f4d884fe01569011b94b"' }>
                                            <li class="link">
                                                <a href="components/NgTabComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgTabItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTabItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4TinyMceModule.html" data-type="entity-link">JNetworkBootstrap4TinyMceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4TinyMceModule-8a4a3cbda3241e128b35d55da13903b5"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4TinyMceModule-8a4a3cbda3241e128b35d55da13903b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4TinyMceModule-8a4a3cbda3241e128b35d55da13903b5"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4TinyMceModule-8a4a3cbda3241e128b35d55da13903b5"' }>
                                            <li class="link">
                                                <a href="components/NgTinyMceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTinyMceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4UploadModule.html" data-type="entity-link">JNetworkBootstrap4UploadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4UploadModule-3208635c60cf4bb2e60d5ad33d85b176"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4UploadModule-3208635c60cf4bb2e60d5ad33d85b176"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4UploadModule-3208635c60cf4bb2e60d5ad33d85b176"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4UploadModule-3208635c60cf4bb2e60d5ad33d85b176"' }>
                                            <li class="link">
                                                <a href="components/NgUploadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgUploadMultipleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgUploadMultipleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4ValidationSummaryModule.html" data-type="entity-link">JNetworkBootstrap4ValidationSummaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4ValidationSummaryModule-d8d17dc892327c7d2f640b4930472222"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4ValidationSummaryModule-d8d17dc892327c7d2f640b4930472222"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4ValidationSummaryModule-d8d17dc892327c7d2f640b4930472222"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4ValidationSummaryModule-d8d17dc892327c7d2f640b4930472222"' }>
                                            <li class="link">
                                                <a href="components/NgValidationSummaryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgValidationSummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4WizardModule.html" data-type="entity-link">JNetworkBootstrap4WizardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4WizardModule-2da33a006ced5b631ce7adc36e5848c7"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4WizardModule-2da33a006ced5b631ce7adc36e5848c7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4WizardModule-2da33a006ced5b631ce7adc36e5848c7"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4WizardModule-2da33a006ced5b631ce7adc36e5848c7"' }>
                                            <li class="link">
                                                <a href="components/NgWizardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgWizardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgWizardItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgWizardItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkCommonListboxOptionModule.html" data-type="entity-link">JNetworkCommonListboxOptionModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-JNetworkCommonListboxOptionModule-d664efe74a5300b9aba51d0691cce976"' : 'data-target="#xs-directives-links-module-JNetworkCommonListboxOptionModule-d664efe74a5300b9aba51d0691cce976"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-JNetworkCommonListboxOptionModule-d664efe74a5300b9aba51d0691cce976"' :
                                        'id="xs-directives-links-module-JNetworkCommonListboxOptionModule-d664efe74a5300b9aba51d0691cce976"' }>
                                        <li class="link">
                                            <a href="directives/NgListboxOptionDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgListboxOptionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/jNetworkTinyMceEditorModule.html" data-type="entity-link">jNetworkTinyMceEditorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-jNetworkTinyMceEditorModule-c236f364e39ef962a34f3516496c6f09"' : 'data-target="#xs-components-links-module-jNetworkTinyMceEditorModule-c236f364e39ef962a34f3516496c6f09"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-jNetworkTinyMceEditorModule-c236f364e39ef962a34f3516496c6f09"' :
                                            'id="xs-components-links-module-jNetworkTinyMceEditorModule-c236f364e39ef962a34f3516496c6f09"' }>
                                            <li class="link">
                                                <a href="components/NgTinyMceEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgTinyMceEditorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateSelectorItem.html" data-type="entity-link">DateSelectorItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/GridResponse.html" data-type="entity-link">GridResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/HTMLCollection.html" data-type="entity-link">HTMLCollection</a>
                            </li>
                            <li class="link">
                                <a href="classes/Interpolation.html" data-type="entity-link">Interpolation</a>
                            </li>
                            <li class="link">
                                <a href="classes/LanguageModel.html" data-type="entity-link">LanguageModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgConfirmButton.html" data-type="entity-link">NgConfirmButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgGridColumnActionCommon.html" data-type="entity-link">NgGridColumnActionCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgTinyMceCommon.html" data-type="entity-link">NgTinyMceCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgUploadFile.html" data-type="entity-link">NgUploadFile</a>
                            </li>
                            <li class="link">
                                <a href="classes/PagerData.html" data-type="entity-link">PagerData</a>
                            </li>
                            <li class="link">
                                <a href="classes/PagerRequest.html" data-type="entity-link">PagerRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceConfirmCommon.html" data-type="entity-link">ServiceConfirmCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/SortDescriptor.html" data-type="entity-link">SortDescriptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/Validation.html" data-type="entity-link">Validation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidationErrorItem.html" data-type="entity-link">ValidationErrorItem</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/InternalLanguageResourceService.html" data-type="entity-link">InternalLanguageResourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InternalLanguageService.html" data-type="entity-link">InternalLanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageResourceService.html" data-type="entity-link">LanguageResourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageService.html" data-type="entity-link">LanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceConfirm.html" data-type="entity-link">ServiceConfirm</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/EventObj.html" data-type="entity-link">EventObj</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HTMLOption.html" data-type="entity-link">HTMLOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfirmComponent.html" data-type="entity-link">IConfirmComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDateTimeControl.html" data-type="entity-link">IDateTimeControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILanguageResourceService.html" data-type="entity-link">ILanguageResourceService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILanguageService.html" data-type="entity-link">ILanguageService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStateObj.html" data-type="entity-link">IStateObj</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUploadControl.html" data-type="entity-link">IUploadControl</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});