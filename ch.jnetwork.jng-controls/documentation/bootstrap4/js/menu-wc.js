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
                                <a href="modules/JNetworkBootstrap4BrowserModule.html" data-type="entity-link" >JNetworkBootstrap4BrowserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4BrowserModule-f10424517c58a41612acce690d80400d"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4BrowserModule-f10424517c58a41612acce690d80400d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4BrowserModule-f10424517c58a41612acce690d80400d"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4BrowserModule-f10424517c58a41612acce690d80400d"' }>
                                            <li class="link">
                                                <a href="components/NgBrowserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgBrowserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4ButtonModule.html" data-type="entity-link" >JNetworkBootstrap4ButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4ButtonModule-ae6aa8cbc689fb0f0a2f297a50874243"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4ButtonModule-ae6aa8cbc689fb0f0a2f297a50874243"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4ButtonModule-ae6aa8cbc689fb0f0a2f297a50874243"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4ButtonModule-ae6aa8cbc689fb0f0a2f297a50874243"' }>
                                            <li class="link">
                                                <a href="components/NgButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4CheckboxModule.html" data-type="entity-link" >JNetworkBootstrap4CheckboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4CheckboxModule-3fce1272883f752ba7c583145394746d"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4CheckboxModule-3fce1272883f752ba7c583145394746d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4CheckboxModule-3fce1272883f752ba7c583145394746d"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4CheckboxModule-3fce1272883f752ba7c583145394746d"' }>
                                            <li class="link">
                                                <a href="components/NgCheckboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgCheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgRadiobuttonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgRadiobuttonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgRadiobuttonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgRadiobuttonsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4ConfirmModule.html" data-type="entity-link" >JNetworkBootstrap4ConfirmModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4ConfirmModule-50c25df9e7e829bc080cd145681b58be"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4ConfirmModule-50c25df9e7e829bc080cd145681b58be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4ConfirmModule-50c25df9e7e829bc080cd145681b58be"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4ConfirmModule-50c25df9e7e829bc080cd145681b58be"' }>
                                            <li class="link">
                                                <a href="components/NgConfirmComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgConfirmComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4ContextmenuModule.html" data-type="entity-link" >JNetworkBootstrap4ContextmenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4ContextmenuModule-8d19c2cfbc48927694ff8e6cf9d49e5d"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4ContextmenuModule-8d19c2cfbc48927694ff8e6cf9d49e5d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4ContextmenuModule-8d19c2cfbc48927694ff8e6cf9d49e5d"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4ContextmenuModule-8d19c2cfbc48927694ff8e6cf9d49e5d"' }>
                                            <li class="link">
                                                <a href="components/NgContextmenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgContextmenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgContextmenuItemButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgContextmenuItemButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgContextmenuItemSplitterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgContextmenuItemSplitterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-JNetworkBootstrap4ContextmenuModule-8d19c2cfbc48927694ff8e6cf9d49e5d"' : 'data-target="#xs-directives-links-module-JNetworkBootstrap4ContextmenuModule-8d19c2cfbc48927694ff8e6cf9d49e5d"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-JNetworkBootstrap4ContextmenuModule-8d19c2cfbc48927694ff8e6cf9d49e5d"' :
                                        'id="xs-directives-links-module-JNetworkBootstrap4ContextmenuModule-8d19c2cfbc48927694ff8e6cf9d49e5d"' }>
                                        <li class="link">
                                            <a href="directives/NgContextmenuAnchorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgContextmenuAnchorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NgContextmenuContainerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgContextmenuContainerDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4DateTimeModule.html" data-type="entity-link" >JNetworkBootstrap4DateTimeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4DateTimeModule-fcf82eaf8c44729ec9c8705ae50edc8d"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4DateTimeModule-fcf82eaf8c44729ec9c8705ae50edc8d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4DateTimeModule-fcf82eaf8c44729ec9c8705ae50edc8d"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4DateTimeModule-fcf82eaf8c44729ec9c8705ae50edc8d"' }>
                                            <li class="link">
                                                <a href="components/NgDateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgDateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgDateSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgDateSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgDateTimeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgDateTimeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgTimeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgTimeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4DialogModule.html" data-type="entity-link" >JNetworkBootstrap4DialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4DialogModule-4e4f06f3950fba3ae8dff5e3028c3276"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4DialogModule-4e4f06f3950fba3ae8dff5e3028c3276"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4DialogModule-4e4f06f3950fba3ae8dff5e3028c3276"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4DialogModule-4e4f06f3950fba3ae8dff5e3028c3276"' }>
                                            <li class="link">
                                                <a href="components/NgDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4FormModule.html" data-type="entity-link" >JNetworkBootstrap4FormModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-JNetworkBootstrap4FormModule-d0212d8d0d029daf23f4e43be4dbe781"' : 'data-target="#xs-directives-links-module-JNetworkBootstrap4FormModule-d0212d8d0d029daf23f4e43be4dbe781"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-JNetworkBootstrap4FormModule-d0212d8d0d029daf23f4e43be4dbe781"' :
                                        'id="xs-directives-links-module-JNetworkBootstrap4FormModule-d0212d8d0d029daf23f4e43be4dbe781"' }>
                                        <li class="link">
                                            <a href="directives/NgFormularDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgFormularDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ProvideParentNgFormularDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProvideParentNgFormularDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4GridModule.html" data-type="entity-link" >JNetworkBootstrap4GridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4GridModule-08b0268edf9dddbc07ac20f0eff45275"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4GridModule-08b0268edf9dddbc07ac20f0eff45275"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4GridModule-08b0268edf9dddbc07ac20f0eff45275"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4GridModule-08b0268edf9dddbc07ac20f0eff45275"' }>
                                            <li class="link">
                                                <a href="components/NgGridButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgGridButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridColumnActionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgGridColumnActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridColumnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgGridColumnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgGridImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgGridImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgPagingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgPagingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4InputModule.html" data-type="entity-link" >JNetworkBootstrap4InputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4InputModule-29c86f8152da96d332219966ade8b730"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4InputModule-29c86f8152da96d332219966ade8b730"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4InputModule-29c86f8152da96d332219966ade8b730"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4InputModule-29c86f8152da96d332219966ade8b730"' }>
                                            <li class="link">
                                                <a href="components/NgInputAreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgInputAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputCurrencyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgInputCurrencyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputDecimalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgInputDecimalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputEmailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgInputEmailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputIntegerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgInputIntegerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgInputPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgInputSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgInputSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4ListModule.html" data-type="entity-link" >JNetworkBootstrap4ListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4ListModule-20671e48f85aed739724baf0a66b487d"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4ListModule-20671e48f85aed739724baf0a66b487d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4ListModule-20671e48f85aed739724baf0a66b487d"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4ListModule-20671e48f85aed739724baf0a66b487d"' }>
                                            <li class="link">
                                                <a href="components/NgDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgListboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgListboxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-JNetworkBootstrap4ListModule-20671e48f85aed739724baf0a66b487d"' : 'data-target="#xs-directives-links-module-JNetworkBootstrap4ListModule-20671e48f85aed739724baf0a66b487d"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-JNetworkBootstrap4ListModule-20671e48f85aed739724baf0a66b487d"' :
                                        'id="xs-directives-links-module-JNetworkBootstrap4ListModule-20671e48f85aed739724baf0a66b487d"' }>
                                        <li class="link">
                                            <a href="directives/NgDropdownOptionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgDropdownOptionDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/NgListboxOptionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgListboxOptionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4MultilanguageModule.html" data-type="entity-link" >JNetworkBootstrap4MultilanguageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4MultilanguageModule-9e7a0bbc9ddf8295b1e24cc5e239777e"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4MultilanguageModule-9e7a0bbc9ddf8295b1e24cc5e239777e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4MultilanguageModule-9e7a0bbc9ddf8295b1e24cc5e239777e"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4MultilanguageModule-9e7a0bbc9ddf8295b1e24cc5e239777e"' }>
                                            <li class="link">
                                                <a href="components/NgMultilanguageInputAreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgMultilanguageInputAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgMultilanguageInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgMultilanguageInputComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4StaticLabelModule.html" data-type="entity-link" >JNetworkBootstrap4StaticLabelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4StaticLabelModule-180a2101f513be4cf350dbd3dfe1cdaf"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4StaticLabelModule-180a2101f513be4cf350dbd3dfe1cdaf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4StaticLabelModule-180a2101f513be4cf350dbd3dfe1cdaf"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4StaticLabelModule-180a2101f513be4cf350dbd3dfe1cdaf"' }>
                                            <li class="link">
                                                <a href="components/NgStaticFormContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgStaticFormContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgStaticLabelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgStaticLabelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4TabsModule.html" data-type="entity-link" >JNetworkBootstrap4TabsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4TabsModule-9f18451f03cfb7ef305d500f4ef10978"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4TabsModule-9f18451f03cfb7ef305d500f4ef10978"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4TabsModule-9f18451f03cfb7ef305d500f4ef10978"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4TabsModule-9f18451f03cfb7ef305d500f4ef10978"' }>
                                            <li class="link">
                                                <a href="components/NgTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgTabItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgTabItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4TinyMceModule.html" data-type="entity-link" >JNetworkBootstrap4TinyMceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4TinyMceModule-31c2bc142f08667cb22b035da504986e"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4TinyMceModule-31c2bc142f08667cb22b035da504986e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4TinyMceModule-31c2bc142f08667cb22b035da504986e"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4TinyMceModule-31c2bc142f08667cb22b035da504986e"' }>
                                            <li class="link">
                                                <a href="components/NgTinyMceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgTinyMceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4UploadModule.html" data-type="entity-link" >JNetworkBootstrap4UploadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4UploadModule-f069abaf446737afc3ce8ef5602d82b4"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4UploadModule-f069abaf446737afc3ce8ef5602d82b4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4UploadModule-f069abaf446737afc3ce8ef5602d82b4"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4UploadModule-f069abaf446737afc3ce8ef5602d82b4"' }>
                                            <li class="link">
                                                <a href="components/NgDropzoneMultipleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgDropzoneMultipleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgDropzoneSingleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgDropzoneSingleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgUploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgUploadMultipleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgUploadMultipleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4ValidationSummaryModule.html" data-type="entity-link" >JNetworkBootstrap4ValidationSummaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4ValidationSummaryModule-965f6b4a62b3b281916dbdac9a271800"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4ValidationSummaryModule-965f6b4a62b3b281916dbdac9a271800"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4ValidationSummaryModule-965f6b4a62b3b281916dbdac9a271800"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4ValidationSummaryModule-965f6b4a62b3b281916dbdac9a271800"' }>
                                            <li class="link">
                                                <a href="components/NgValidationSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgValidationSummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkBootstrap4WizardModule.html" data-type="entity-link" >JNetworkBootstrap4WizardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JNetworkBootstrap4WizardModule-b27c893d1d4ee13f9c7a421e56493105"' : 'data-target="#xs-components-links-module-JNetworkBootstrap4WizardModule-b27c893d1d4ee13f9c7a421e56493105"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JNetworkBootstrap4WizardModule-b27c893d1d4ee13f9c7a421e56493105"' :
                                            'id="xs-components-links-module-JNetworkBootstrap4WizardModule-b27c893d1d4ee13f9c7a421e56493105"' }>
                                            <li class="link">
                                                <a href="components/NgWizardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgWizardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgWizardItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgWizardItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JNetworkCommonListboxOptionModule.html" data-type="entity-link" >JNetworkCommonListboxOptionModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/NgBaseDateTimeControl.html" data-type="entity-link" >NgBaseDateTimeControl</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgBaseListControl.html" data-type="entity-link" >NgBaseListControl</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgBaseModelControl.html" data-type="entity-link" >NgBaseModelControl</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgBaseSelectControl.html" data-type="entity-link" >NgBaseSelectControl</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgButtonCommon.html" data-type="entity-link" >NgButtonCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgCheckboxCommon.html" data-type="entity-link" >NgCheckboxCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgConfirmCommon.html" data-type="entity-link" >NgConfirmCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgContextmenuAnchorCommon.html" data-type="entity-link" >NgContextmenuAnchorCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgContextmenuCommon.html" data-type="entity-link" >NgContextmenuCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgContextMenuContrainerCommon.html" data-type="entity-link" >NgContextMenuContrainerCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgContextmenuItemButtonCommon.html" data-type="entity-link" >NgContextmenuItemButtonCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgContextmenuItemCommon.html" data-type="entity-link" >NgContextmenuItemCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgDateCommon.html" data-type="entity-link" >NgDateCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgDateSelectorCommon.html" data-type="entity-link" >NgDateSelectorCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgDateTimeCommon.html" data-type="entity-link" >NgDateTimeCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgDialogCommon.html" data-type="entity-link" >NgDialogCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgDropdownCommon.html" data-type="entity-link" >NgDropdownCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgDropdownOptionCommon.html" data-type="entity-link" >NgDropdownOptionCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgDropzoneMultipleCommon.html" data-type="entity-link" >NgDropzoneMultipleCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgDropzoneSingleCommon.html" data-type="entity-link" >NgDropzoneSingleCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgFileBrowserCommon.html" data-type="entity-link" >NgFileBrowserCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgFormularCommon.html" data-type="entity-link" >NgFormularCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgGridButtonCommon.html" data-type="entity-link" >NgGridButtonCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgGridColumnActionCommon.html" data-type="entity-link" >NgGridColumnActionCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgGridColumnBaseCommon.html" data-type="entity-link" >NgGridColumnBaseCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgGridColumnCommon.html" data-type="entity-link" >NgGridColumnCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgGridCommon.html" data-type="entity-link" >NgGridCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgGridImageCommon.html" data-type="entity-link" >NgGridImageCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgInputAreaCommon.html" data-type="entity-link" >NgInputAreaCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgInputBase.html" data-type="entity-link" >NgInputBase</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgInputCommon.html" data-type="entity-link" >NgInputCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgInputCurrencyCommon.html" data-type="entity-link" >NgInputCurrencyCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgInputDecimalCommon.html" data-type="entity-link" >NgInputDecimalCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgInputEmailCommon.html" data-type="entity-link" >NgInputEmailCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgInputIntegerCommon.html" data-type="entity-link" >NgInputIntegerCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgInputPasswordCommon.html" data-type="entity-link" >NgInputPasswordCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgInputSearchCommon.html" data-type="entity-link" >NgInputSearchCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgListboxCommon.html" data-type="entity-link" >NgListboxCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgListboxOptionCommon.html" data-type="entity-link" >NgListboxOptionCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgMultilanguageInputAreaCommon.html" data-type="entity-link" >NgMultilanguageInputAreaCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgMultilanguageInputCommon.html" data-type="entity-link" >NgMultilanguageInputCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgPagingCommon.html" data-type="entity-link" >NgPagingCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgRadiobuttonCommon.html" data-type="entity-link" >NgRadiobuttonCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgRadiobuttonsCommon.html" data-type="entity-link" >NgRadiobuttonsCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgStaticFormContainerCommon.html" data-type="entity-link" >NgStaticFormContainerCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgStaticLabelCommon.html" data-type="entity-link" >NgStaticLabelCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgTabCommon.html" data-type="entity-link" >NgTabCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgTabItemCommon.html" data-type="entity-link" >NgTabItemCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgTimeCommon.html" data-type="entity-link" >NgTimeCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgTooltipCommon.html" data-type="entity-link" >NgTooltipCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgTreeItemActionCommon.html" data-type="entity-link" >NgTreeItemActionCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgTreeViewChildCommon.html" data-type="entity-link" >NgTreeViewChildCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgTreeViewCommon.html" data-type="entity-link" >NgTreeViewCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgUploadBase.html" data-type="entity-link" >NgUploadBase</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgUploadMultipleCommon.html" data-type="entity-link" >NgUploadMultipleCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgUploadSingleCommon.html" data-type="entity-link" >NgUploadSingleCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgValidationSummaryCommon.html" data-type="entity-link" >NgValidationSummaryCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgWizardCommon.html" data-type="entity-link" >NgWizardCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NgWizardItemCommon.html" data-type="entity-link" >NgWizardItemCommon</a>
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
                                <a href="classes/AppPage.html" data-type="entity-link" >AppPage</a>
                            </li>
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
                                <a href="classes/NgConfirmButton.html" data-type="entity-link" >NgConfirmButton</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgTinyMceCommon.html" data-type="entity-link" >NgTinyMceCommon</a>
                            </li>
                            <li class="link">
                                <a href="classes/NgUploadFile.html" data-type="entity-link" >NgUploadFile</a>
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
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FileBrowserService.html" data-type="entity-link" >FileBrowserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InternalFileBrowserService.html" data-type="entity-link" >InternalFileBrowserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InternalLanguageResourceService.html" data-type="entity-link" >InternalLanguageResourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InternalLanguageService.html" data-type="entity-link" >InternalLanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageResourceService.html" data-type="entity-link" >LanguageResourceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageService.html" data-type="entity-link" >LanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ServiceConfirm.html" data-type="entity-link" >ServiceConfirm</a>
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
                                <a href="interfaces/HTMLOption.html" data-type="entity-link" >HTMLOption</a>
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
                                <a href="interfaces/IFileBrowserService.html" data-type="entity-link" >IFileBrowserService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILanguageResourceService.html" data-type="entity-link" >ILanguageResourceService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILanguageService.html" data-type="entity-link" >ILanguageService</a>
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