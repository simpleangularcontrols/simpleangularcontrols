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
                    <a href="index.html" data-type="index-link">Bootstrap 5 Angular Controls</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/SACBootstrap5BrowserModule.html" data-type="entity-link" >SACBootstrap5BrowserModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5ButtonModule.html" data-type="entity-link" >SACBootstrap5ButtonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5CheckboxModule.html" data-type="entity-link" >SACBootstrap5CheckboxModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5ConfirmModule.html" data-type="entity-link" >SACBootstrap5ConfirmModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5ContextmenuModule.html" data-type="entity-link" >SACBootstrap5ContextmenuModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap5ContextmenuModule-f975f706f7adeaae61d674b412aebecb00b3d634e1a89a5dc00e633b1bd83af59a156ba9bac12faaaf5ef1ca97d13f6626df7cf35b7fbabd6ce3dec56d892207"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap5ContextmenuModule-f975f706f7adeaae61d674b412aebecb00b3d634e1a89a5dc00e633b1bd83af59a156ba9bac12faaaf5ef1ca97d13f6626df7cf35b7fbabd6ce3dec56d892207"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap5ContextmenuModule-f975f706f7adeaae61d674b412aebecb00b3d634e1a89a5dc00e633b1bd83af59a156ba9bac12faaaf5ef1ca97d13f6626df7cf35b7fbabd6ce3dec56d892207"' :
                                        'id="xs-directives-links-module-SACBootstrap5ContextmenuModule-f975f706f7adeaae61d674b412aebecb00b3d634e1a89a5dc00e633b1bd83af59a156ba9bac12faaaf5ef1ca97d13f6626df7cf35b7fbabd6ce3dec56d892207"' }>
                                        <li class="link">
                                            <a href="directives/SacContextmenuAnchorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacContextmenuAnchorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SacContextmenuContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacContextmenuContainerDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5DateTimeModule.html" data-type="entity-link" >SACBootstrap5DateTimeModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5DialogModule.html" data-type="entity-link" >SACBootstrap5DialogModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5DropdownModule.html" data-type="entity-link" >SACBootstrap5DropdownModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap5DropdownModule-6bc2504f92876456145c1aa8c128cf0d5e3578d8c9e79036aebe73bf8b5da9f97b7117a6305e227c4c8bf2f1762e5dde3fe1454d5d40108fd93cb219e7d9ee6b"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap5DropdownModule-6bc2504f92876456145c1aa8c128cf0d5e3578d8c9e79036aebe73bf8b5da9f97b7117a6305e227c4c8bf2f1762e5dde3fe1454d5d40108fd93cb219e7d9ee6b"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap5DropdownModule-6bc2504f92876456145c1aa8c128cf0d5e3578d8c9e79036aebe73bf8b5da9f97b7117a6305e227c4c8bf2f1762e5dde3fe1454d5d40108fd93cb219e7d9ee6b"' :
                                        'id="xs-directives-links-module-SACBootstrap5DropdownModule-6bc2504f92876456145c1aa8c128cf0d5e3578d8c9e79036aebe73bf8b5da9f97b7117a6305e227c4c8bf2f1762e5dde3fe1454d5d40108fd93cb219e7d9ee6b"' }>
                                        <li class="link">
                                            <a href="directives/SacDropdownOptionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacDropdownOptionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5FormModule.html" data-type="entity-link" >SACBootstrap5FormModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap5FormModule-bce46f422caa46fbb94523c125b2b8b7aa7fc5097d1fff3ed3e612c3d330edddb19b6d99876eb7ae20ea17ea59cb8cd9ca2c26242e53dc32dbf93ebdad45b528"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap5FormModule-bce46f422caa46fbb94523c125b2b8b7aa7fc5097d1fff3ed3e612c3d330edddb19b6d99876eb7ae20ea17ea59cb8cd9ca2c26242e53dc32dbf93ebdad45b528"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap5FormModule-bce46f422caa46fbb94523c125b2b8b7aa7fc5097d1fff3ed3e612c3d330edddb19b6d99876eb7ae20ea17ea59cb8cd9ca2c26242e53dc32dbf93ebdad45b528"' :
                                        'id="xs-directives-links-module-SACBootstrap5FormModule-bce46f422caa46fbb94523c125b2b8b7aa7fc5097d1fff3ed3e612c3d330edddb19b6d99876eb7ae20ea17ea59cb8cd9ca2c26242e53dc32dbf93ebdad45b528"' }>
                                        <li class="link">
                                            <a href="directives/SacFormDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacFormDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SacInheritFormDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacInheritFormDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5GridModule.html" data-type="entity-link" >SACBootstrap5GridModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5InputModule.html" data-type="entity-link" >SACBootstrap5InputModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5LayoutModule.html" data-type="entity-link" >SACBootstrap5LayoutModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap5LayoutModule-f172d9bb9f6fdb1e1d862a7e491861bd8680711bc0ff8b9992df4d9960e0cec01ea13dad7ebab9184ff76ddc71b083c69b7d750e539c6eede84453d82c480304"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap5LayoutModule-f172d9bb9f6fdb1e1d862a7e491861bd8680711bc0ff8b9992df4d9960e0cec01ea13dad7ebab9184ff76ddc71b083c69b7d750e539c6eede84453d82c480304"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap5LayoutModule-f172d9bb9f6fdb1e1d862a7e491861bd8680711bc0ff8b9992df4d9960e0cec01ea13dad7ebab9184ff76ddc71b083c69b7d750e539c6eede84453d82c480304"' :
                                        'id="xs-directives-links-module-SACBootstrap5LayoutModule-f172d9bb9f6fdb1e1d862a7e491861bd8680711bc0ff8b9992df4d9960e0cec01ea13dad7ebab9184ff76ddc71b083c69b7d750e539c6eede84453d82c480304"' }>
                                        <li class="link">
                                            <a href="directives/SacFormLayoutDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacFormLayoutDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SACBootstrap5LayoutModule-f172d9bb9f6fdb1e1d862a7e491861bd8680711bc0ff8b9992df4d9960e0cec01ea13dad7ebab9184ff76ddc71b083c69b7d750e539c6eede84453d82c480304"' : 'data-bs-target="#xs-pipes-links-module-SACBootstrap5LayoutModule-f172d9bb9f6fdb1e1d862a7e491861bd8680711bc0ff8b9992df4d9960e0cec01ea13dad7ebab9184ff76ddc71b083c69b7d750e539c6eede84453d82c480304"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SACBootstrap5LayoutModule-f172d9bb9f6fdb1e1d862a7e491861bd8680711bc0ff8b9992df4d9960e0cec01ea13dad7ebab9184ff76ddc71b083c69b7d750e539c6eede84453d82c480304"' :
                                            'id="xs-pipes-links-module-SACBootstrap5LayoutModule-f172d9bb9f6fdb1e1d862a7e491861bd8680711bc0ff8b9992df4d9960e0cec01ea13dad7ebab9184ff76ddc71b083c69b7d750e539c6eede84453d82c480304"' }>
                                            <li class="link">
                                                <a href="pipes/SacToControlWidthCssPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacToControlWidthCssPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SacToLabelWidthCssPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacToLabelWidthCssPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5ListModule.html" data-type="entity-link" >SACBootstrap5ListModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap5ListModule-91ffec7da285e0635ffbf9fbebae0f5423703ad91ab6f5f348ccb91c667d630b7deb42da7243dc43e946708932ed66e28689101ababc6097b023d88043c0fd2b"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap5ListModule-91ffec7da285e0635ffbf9fbebae0f5423703ad91ab6f5f348ccb91c667d630b7deb42da7243dc43e946708932ed66e28689101ababc6097b023d88043c0fd2b"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap5ListModule-91ffec7da285e0635ffbf9fbebae0f5423703ad91ab6f5f348ccb91c667d630b7deb42da7243dc43e946708932ed66e28689101ababc6097b023d88043c0fd2b"' :
                                        'id="xs-directives-links-module-SACBootstrap5ListModule-91ffec7da285e0635ffbf9fbebae0f5423703ad91ab6f5f348ccb91c667d630b7deb42da7243dc43e946708932ed66e28689101ababc6097b023d88043c0fd2b"' }>
                                        <li class="link">
                                            <a href="directives/SacListboxOptionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacListboxOptionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5MultilanguageModule.html" data-type="entity-link" >SACBootstrap5MultilanguageModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap5MultilanguageModule-49645c67d6d8cbac3295e762b2cf77d850e7f4cee2819c5cab0475f5d01b3d84e017773812390d3ee03d62cbdca6886d2d401511952fa26a9a9532ce6ed4dde1"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap5MultilanguageModule-49645c67d6d8cbac3295e762b2cf77d850e7f4cee2819c5cab0475f5d01b3d84e017773812390d3ee03d62cbdca6886d2d401511952fa26a9a9532ce6ed4dde1"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap5MultilanguageModule-49645c67d6d8cbac3295e762b2cf77d850e7f4cee2819c5cab0475f5d01b3d84e017773812390d3ee03d62cbdca6886d2d401511952fa26a9a9532ce6ed4dde1"' :
                                        'id="xs-directives-links-module-SACBootstrap5MultilanguageModule-49645c67d6d8cbac3295e762b2cf77d850e7f4cee2819c5cab0475f5d01b3d84e017773812390d3ee03d62cbdca6886d2d401511952fa26a9a9532ce6ed4dde1"' }>
                                        <li class="link">
                                            <a href="directives/SacMultilanguagemenuAnchorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacMultilanguagemenuAnchorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SacMultilanguagemenuContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacMultilanguagemenuContainerDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5StaticLabelModule.html" data-type="entity-link" >SACBootstrap5StaticLabelModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5TabsModule.html" data-type="entity-link" >SACBootstrap5TabsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5TinyMceModule.html" data-type="entity-link" >SACBootstrap5TinyMceModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5UploadModule.html" data-type="entity-link" >SACBootstrap5UploadModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5ValidationSummaryModule.html" data-type="entity-link" >SACBootstrap5ValidationSummaryModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5WizardModule.html" data-type="entity-link" >SACBootstrap5WizardModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/SacBrowserComponent.html" data-type="entity-link" >SacBrowserComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacButtonComponent.html" data-type="entity-link" >SacButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacCheckboxComponent.html" data-type="entity-link" >SacCheckboxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacConfirmComponent.html" data-type="entity-link" >SacConfirmComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacContextmenuComponent.html" data-type="entity-link" >SacContextmenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacContextmenuItemButtonComponent.html" data-type="entity-link" >SacContextmenuItemButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacContextmenuItemSplitterComponent.html" data-type="entity-link" >SacContextmenuItemSplitterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacDateComponent.html" data-type="entity-link" >SacDateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacDateSelectorComponent.html" data-type="entity-link" >SacDateSelectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacDateTimeComponent.html" data-type="entity-link" >SacDateTimeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacDialogComponent.html" data-type="entity-link" >SacDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacDropdownComponent.html" data-type="entity-link" >SacDropdownComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacDropzoneMultipleComponent.html" data-type="entity-link" >SacDropzoneMultipleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacDropzoneSingleComponent.html" data-type="entity-link" >SacDropzoneSingleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacGridButtonComponent.html" data-type="entity-link" >SacGridButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacGridColumnActionComponent.html" data-type="entity-link" >SacGridColumnActionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacGridColumnComponent.html" data-type="entity-link" >SacGridColumnComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacGridComponent.html" data-type="entity-link" >SacGridComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacGridImageComponent.html" data-type="entity-link" >SacGridImageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputAreaComponent.html" data-type="entity-link" >SacInputAreaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputComponent.html" data-type="entity-link" >SacInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputCurrencyComponent.html" data-type="entity-link" >SacInputCurrencyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputDecimalComponent.html" data-type="entity-link" >SacInputDecimalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputEmailComponent.html" data-type="entity-link" >SacInputEmailComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputIntegerComponent.html" data-type="entity-link" >SacInputIntegerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputPasswordComponent.html" data-type="entity-link" >SacInputPasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacInputSearchComponent.html" data-type="entity-link" >SacInputSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacListboxComponent.html" data-type="entity-link" >SacListboxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacMultilanguageInputAreaComponent.html" data-type="entity-link" >SacMultilanguageInputAreaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacMultilanguageInputComponent.html" data-type="entity-link" >SacMultilanguageInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacMultilanguagemenuComponent.html" data-type="entity-link" >SacMultilanguagemenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacMultilanguagemenuItemButtonComponent.html" data-type="entity-link" >SacMultilanguagemenuItemButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacPagingComponent.html" data-type="entity-link" >SacPagingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacRadiobuttonComponent.html" data-type="entity-link" >SacRadiobuttonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacRadiobuttonsComponent.html" data-type="entity-link" >SacRadiobuttonsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacStaticFormContainerComponent.html" data-type="entity-link" >SacStaticFormContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacStaticLabelComponent.html" data-type="entity-link" >SacStaticLabelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacTabComponent.html" data-type="entity-link" >SacTabComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacTabItemComponent.html" data-type="entity-link" >SacTabItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacTimeComponent.html" data-type="entity-link" >SacTimeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacTinyMceComponent.html" data-type="entity-link" >SacTinyMceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacUploadComponent.html" data-type="entity-link" >SacUploadComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacUploadMultipleComponent.html" data-type="entity-link" >SacUploadMultipleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacValidationSummaryComponent.html" data-type="entity-link" >SacValidationSummaryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacWizardComponent.html" data-type="entity-link" >SacWizardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SacWizardItemComponent.html" data-type="entity-link" >SacWizardItemComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/SacBaseDateTimeControl.html" data-type="entity-link" >SacBaseDateTimeControl</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacBaseListControl.html" data-type="entity-link" >SacBaseListControl</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacBaseModelControl.html" data-type="entity-link" >SacBaseModelControl</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacBaseSelectControl.html" data-type="entity-link" >SacBaseSelectControl</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacButtonCommon.html" data-type="entity-link" >SacButtonCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacCheckboxCommon.html" data-type="entity-link" >SacCheckboxCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacConfirmCommon.html" data-type="entity-link" >SacConfirmCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacContextmenuAnchorCommon.html" data-type="entity-link" >SacContextmenuAnchorCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacContextmenuAnchorDirective.html" data-type="entity-link" >SacContextmenuAnchorDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacContextmenuCommon.html" data-type="entity-link" >SacContextmenuCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacContextmenuContainerDirective.html" data-type="entity-link" >SacContextmenuContainerDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacContextMenuContrainerCommon.html" data-type="entity-link" >SacContextMenuContrainerCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacContextmenuItemButtonCommon.html" data-type="entity-link" >SacContextmenuItemButtonCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacContextmenuItemCommon.html" data-type="entity-link" >SacContextmenuItemCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDateCommon.html" data-type="entity-link" >SacDateCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDateSelectorCommon.html" data-type="entity-link" >SacDateSelectorCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDateTimeCommon.html" data-type="entity-link" >SacDateTimeCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDialogCommon.html" data-type="entity-link" >SacDialogCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDropdownCommon.html" data-type="entity-link" >SacDropdownCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDropdownOptionCommon.html" data-type="entity-link" >SacDropdownOptionCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDropdownOptionDirective.html" data-type="entity-link" >SacDropdownOptionDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDropzoneMultipleCommon.html" data-type="entity-link" >SacDropzoneMultipleCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacDropzoneSingleCommon.html" data-type="entity-link" >SacDropzoneSingleCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacFileBrowserCommon.html" data-type="entity-link" >SacFileBrowserCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacFormCommon.html" data-type="entity-link" >SacFormCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacFormDirective.html" data-type="entity-link" >SacFormDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacFormLayoutCommon.html" data-type="entity-link" >SacFormLayoutCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacFormLayoutDirective.html" data-type="entity-link" >SacFormLayoutDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacGridButtonCommon.html" data-type="entity-link" >SacGridButtonCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacGridColumnActionCommon.html" data-type="entity-link" >SacGridColumnActionCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacGridColumnBaseCommon.html" data-type="entity-link" >SacGridColumnBaseCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacGridColumnCommon.html" data-type="entity-link" >SacGridColumnCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacGridCommon.html" data-type="entity-link" >SacGridCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacGridImageCommon.html" data-type="entity-link" >SacGridImageCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInheritFormDirective.html" data-type="entity-link" >SacInheritFormDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputAreaCommon.html" data-type="entity-link" >SacInputAreaCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputBase.html" data-type="entity-link" >SacInputBase</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputCommon.html" data-type="entity-link" >SacInputCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputCurrencyCommon.html" data-type="entity-link" >SacInputCurrencyCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputDecimalCommon.html" data-type="entity-link" >SacInputDecimalCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputEmailCommon.html" data-type="entity-link" >SacInputEmailCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputIntegerCommon.html" data-type="entity-link" >SacInputIntegerCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputPasswordCommon.html" data-type="entity-link" >SacInputPasswordCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacInputSearchCommon.html" data-type="entity-link" >SacInputSearchCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacListboxCommon.html" data-type="entity-link" >SacListboxCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacListboxOptionCommon.html" data-type="entity-link" >SacListboxOptionCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacListboxOptionDirective.html" data-type="entity-link" >SacListboxOptionDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacMultilanguageInputAreaCommon.html" data-type="entity-link" >SacMultilanguageInputAreaCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacMultilanguageInputCommon.html" data-type="entity-link" >SacMultilanguageInputCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacMultilanguagemenuAnchorDirective.html" data-type="entity-link" >SacMultilanguagemenuAnchorDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacMultilanguagemenuContainerDirective.html" data-type="entity-link" >SacMultilanguagemenuContainerDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacPagingCommon.html" data-type="entity-link" >SacPagingCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacRadiobuttonCommon.html" data-type="entity-link" >SacRadiobuttonCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacRadiobuttonsCommon.html" data-type="entity-link" >SacRadiobuttonsCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacStaticFormContainerCommon.html" data-type="entity-link" >SacStaticFormContainerCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacStaticLabelCommon.html" data-type="entity-link" >SacStaticLabelCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTabCommon.html" data-type="entity-link" >SacTabCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTabItemCommon.html" data-type="entity-link" >SacTabItemCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTimeCommon.html" data-type="entity-link" >SacTimeCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTinyMceCommon.html" data-type="entity-link" >SacTinyMceCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTooltipCommon.html" data-type="entity-link" >SacTooltipCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTreeItemActionCommon.html" data-type="entity-link" >SacTreeItemActionCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTreeViewChildCommon.html" data-type="entity-link" >SacTreeViewChildCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacTreeViewCommon.html" data-type="entity-link" >SacTreeViewCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacUploadBase.html" data-type="entity-link" >SacUploadBase</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacUploadMultipleCommon.html" data-type="entity-link" >SacUploadMultipleCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacUploadSingleCommon.html" data-type="entity-link" >SacUploadSingleCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacValidationSummaryCommon.html" data-type="entity-link" >SacValidationSummaryCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacWizardCommon.html" data-type="entity-link" >SacWizardCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacWizardItemCommon.html" data-type="entity-link" >SacWizardItemCommon</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BrowserFileDeleteRequest.html" data-type="entity-link" >BrowserFileDeleteRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserFileRenameRequest.html" data-type="entity-link" >BrowserFileRenameRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserFileSaveRequest.html" data-type="entity-link" >BrowserFileSaveRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserNodeDeleteRequest.html" data-type="entity-link" >BrowserNodeDeleteRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserNodeNewRequest.html" data-type="entity-link" >BrowserNodeNewRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserNodeRenameRequest.html" data-type="entity-link" >BrowserNodeRenameRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BrowserNodeRequest.html" data-type="entity-link" >BrowserNodeRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateSelectorItem.html" data-type="entity-link" >DateSelectorItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/GridResponse.html" data-type="entity-link" >GridResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/HTMLCollection.html" data-type="entity-link" >HTMLCollection</a>
                            </li>
                            <li class="link">
                                <a href="classes/Interpolation.html" data-type="entity-link" >Interpolation</a>
                            </li>
                            <li class="link">
                                <a href="classes/LanguageModel.html" data-type="entity-link" >LanguageModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/PagerData.html" data-type="entity-link" >PagerData</a>
                            </li>
                            <li class="link">
                                <a href="classes/PagerRequest.html" data-type="entity-link" >PagerRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/Positioning.html" data-type="entity-link" >Positioning</a>
                            </li>
                            <li class="link">
                                <a href="classes/SacConfirmButton.html" data-type="entity-link" >SacConfirmButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/SacUploadFile.html" data-type="entity-link" >SacUploadFile</a>
                            </li>
                            <li class="link">
                                <a href="classes/ServiceConfirmCommon.html" data-type="entity-link" >ServiceConfirmCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/SortDescriptor.html" data-type="entity-link" >SortDescriptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/TinyMceDialogSettings.html" data-type="entity-link" >TinyMceDialogSettings</a>
                            </li>
                            <li class="link">
                                <a href="classes/Validation.html" data-type="entity-link" >Validation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidationErrorItem.html" data-type="entity-link" >ValidationErrorItem</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/SacAbstractFileBrowserService.html" data-type="entity-link" >SacAbstractFileBrowserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacAbstractIconService.html" data-type="entity-link" >SacAbstractIconService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacAbstractLanguageService.html" data-type="entity-link" >SacAbstractLanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacAbstractLocalisationService.html" data-type="entity-link" >SacAbstractLocalisationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacDefaultFileBrowserService.html" data-type="entity-link" >SacDefaultFileBrowserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacDefaultIconService.html" data-type="entity-link" >SacDefaultIconService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacDefaultLanguageService.html" data-type="entity-link" >SacDefaultLanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SacDefaultLocalisationService.html" data-type="entity-link" >SacDefaultLocalisationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceConfirm.html" data-type="entity-link" >ServiceConfirm</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ClientRect.html" data-type="entity-link" >ClientRect</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HTMLOption.html" data-type="entity-link" >HTMLOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAbstractControlLabelExtension.html" data-type="entity-link" >IAbstractControlLabelExtension</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrowserFile.html" data-type="entity-link" >IBrowserFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrowserFileResponse.html" data-type="entity-link" >IBrowserFileResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrowserNode.html" data-type="entity-link" >IBrowserNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBrowserNodeResponse.html" data-type="entity-link" >IBrowserNodeResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfirmComponent.html" data-type="entity-link" >IConfirmComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDateTimeControl.html" data-type="entity-link" >IDateTimeControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISacFileBrowserService.html" data-type="entity-link" >ISacFileBrowserService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISacIconService.html" data-type="entity-link" >ISacIconService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISacLabelSizes.html" data-type="entity-link" >ISacLabelSizes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISacLanguageService.html" data-type="entity-link" >ISacLanguageService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISacLocalisationService.html" data-type="entity-link" >ISacLocalisationService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUploadControl.html" data-type="entity-link" >IUploadControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TinyMceDialogSettingsMeta.html" data-type="entity-link" >TinyMceDialogSettingsMeta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TinyMceInstance.html" data-type="entity-link" >TinyMceInstance</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/SacToControlWidthCssPipe.html" data-type="entity-link" >SacToControlWidthCssPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/SacToLabelWidthCssPipe.html" data-type="entity-link" >SacToLabelWidthCssPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
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