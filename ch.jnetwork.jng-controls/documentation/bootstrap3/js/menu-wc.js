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
                    <a href="index.html" data-type="index-link">Bootstrap 3 Angular Controls</a>
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
                                <a href="modules/SACBootstrap3ButtonModule.html" data-type="entity-link" >SACBootstrap3ButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3ButtonModule-83ea539e8f05db74c5329811616a87fd00267dfd3da21781cea767e9adb19acec8de88ed415527a656373b248d2d91eca28d1c509a1a39a7144548ba5deba3db"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3ButtonModule-83ea539e8f05db74c5329811616a87fd00267dfd3da21781cea767e9adb19acec8de88ed415527a656373b248d2d91eca28d1c509a1a39a7144548ba5deba3db"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3ButtonModule-83ea539e8f05db74c5329811616a87fd00267dfd3da21781cea767e9adb19acec8de88ed415527a656373b248d2d91eca28d1c509a1a39a7144548ba5deba3db"' :
                                            'id="xs-components-links-module-SACBootstrap3ButtonModule-83ea539e8f05db74c5329811616a87fd00267dfd3da21781cea767e9adb19acec8de88ed415527a656373b248d2d91eca28d1c509a1a39a7144548ba5deba3db"' }>
                                            <li class="link">
                                                <a href="components/NgButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3CheckboxModule.html" data-type="entity-link" >SACBootstrap3CheckboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3CheckboxModule-03e6ac7b502d490b87d071dfa03eb6ee92b055af29e57b6541006c6df3db7799f459c6f161d75955ae9e114c26acb58e4f54b5e2e8d5bae7269740c1ea758b02"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3CheckboxModule-03e6ac7b502d490b87d071dfa03eb6ee92b055af29e57b6541006c6df3db7799f459c6f161d75955ae9e114c26acb58e4f54b5e2e8d5bae7269740c1ea758b02"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3CheckboxModule-03e6ac7b502d490b87d071dfa03eb6ee92b055af29e57b6541006c6df3db7799f459c6f161d75955ae9e114c26acb58e4f54b5e2e8d5bae7269740c1ea758b02"' :
                                            'id="xs-components-links-module-SACBootstrap3CheckboxModule-03e6ac7b502d490b87d071dfa03eb6ee92b055af29e57b6541006c6df3db7799f459c6f161d75955ae9e114c26acb58e4f54b5e2e8d5bae7269740c1ea758b02"' }>
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
                                <a href="modules/SACBootstrap3ConfirmModule.html" data-type="entity-link" >SACBootstrap3ConfirmModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3ConfirmModule-8b12ee80ea490b58b5ded2b183c8d18a367f5107307d79e71be7155f10eab3d40ebadaf1677ff263ee71095dcec87bae0bdcee8629977c927a72d0965cca8ce1"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3ConfirmModule-8b12ee80ea490b58b5ded2b183c8d18a367f5107307d79e71be7155f10eab3d40ebadaf1677ff263ee71095dcec87bae0bdcee8629977c927a72d0965cca8ce1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3ConfirmModule-8b12ee80ea490b58b5ded2b183c8d18a367f5107307d79e71be7155f10eab3d40ebadaf1677ff263ee71095dcec87bae0bdcee8629977c927a72d0965cca8ce1"' :
                                            'id="xs-components-links-module-SACBootstrap3ConfirmModule-8b12ee80ea490b58b5ded2b183c8d18a367f5107307d79e71be7155f10eab3d40ebadaf1677ff263ee71095dcec87bae0bdcee8629977c927a72d0965cca8ce1"' }>
                                            <li class="link">
                                                <a href="components/NgConfirmComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgConfirmComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3DateTimeModule.html" data-type="entity-link" >SACBootstrap3DateTimeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3DateTimeModule-be582fa4d33a81d0869a714f1d20030e68530094df923bf8624e101676299d8999f15765f5f43c79e8ed6d75646b1cd22802bdea4e1c020827f74695ddd9ba7e"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3DateTimeModule-be582fa4d33a81d0869a714f1d20030e68530094df923bf8624e101676299d8999f15765f5f43c79e8ed6d75646b1cd22802bdea4e1c020827f74695ddd9ba7e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3DateTimeModule-be582fa4d33a81d0869a714f1d20030e68530094df923bf8624e101676299d8999f15765f5f43c79e8ed6d75646b1cd22802bdea4e1c020827f74695ddd9ba7e"' :
                                            'id="xs-components-links-module-SACBootstrap3DateTimeModule-be582fa4d33a81d0869a714f1d20030e68530094df923bf8624e101676299d8999f15765f5f43c79e8ed6d75646b1cd22802bdea4e1c020827f74695ddd9ba7e"' }>
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
                                <a href="modules/SACBootstrap3DialogModule.html" data-type="entity-link" >SACBootstrap3DialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3DialogModule-007b2624da964b5d12a8c664d3859a67fa26eeaf48840a698426d20513a03d015067b1dde24a7e9fa31952ccf37b28e5d38af166fce09eddb47a7aa21bf87c61"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3DialogModule-007b2624da964b5d12a8c664d3859a67fa26eeaf48840a698426d20513a03d015067b1dde24a7e9fa31952ccf37b28e5d38af166fce09eddb47a7aa21bf87c61"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3DialogModule-007b2624da964b5d12a8c664d3859a67fa26eeaf48840a698426d20513a03d015067b1dde24a7e9fa31952ccf37b28e5d38af166fce09eddb47a7aa21bf87c61"' :
                                            'id="xs-components-links-module-SACBootstrap3DialogModule-007b2624da964b5d12a8c664d3859a67fa26eeaf48840a698426d20513a03d015067b1dde24a7e9fa31952ccf37b28e5d38af166fce09eddb47a7aa21bf87c61"' }>
                                            <li class="link">
                                                <a href="components/NgDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3FormModule.html" data-type="entity-link" >SACBootstrap3FormModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap3FormModule-e43e0db8e72cd8df37b7473bda7000863e9f316ca334844cf5c3485c4f80447011373ba2d0f0ef15070f9e4393ef727d83814e6502a6797731c39782a15ebb1d"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap3FormModule-e43e0db8e72cd8df37b7473bda7000863e9f316ca334844cf5c3485c4f80447011373ba2d0f0ef15070f9e4393ef727d83814e6502a6797731c39782a15ebb1d"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap3FormModule-e43e0db8e72cd8df37b7473bda7000863e9f316ca334844cf5c3485c4f80447011373ba2d0f0ef15070f9e4393ef727d83814e6502a6797731c39782a15ebb1d"' :
                                        'id="xs-directives-links-module-SACBootstrap3FormModule-e43e0db8e72cd8df37b7473bda7000863e9f316ca334844cf5c3485c4f80447011373ba2d0f0ef15070f9e4393ef727d83814e6502a6797731c39782a15ebb1d"' }>
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
                                <a href="modules/SACBootstrap3GridModule.html" data-type="entity-link" >SACBootstrap3GridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3GridModule-e91af67a0332147b0b96a2c6a82269d9f744585cb1e352abbc6648c62eb57c68f6e5b5ebd52cfed43585e019ff65d6eef24a142a875283a1f01c80e6e75385d6"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3GridModule-e91af67a0332147b0b96a2c6a82269d9f744585cb1e352abbc6648c62eb57c68f6e5b5ebd52cfed43585e019ff65d6eef24a142a875283a1f01c80e6e75385d6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3GridModule-e91af67a0332147b0b96a2c6a82269d9f744585cb1e352abbc6648c62eb57c68f6e5b5ebd52cfed43585e019ff65d6eef24a142a875283a1f01c80e6e75385d6"' :
                                            'id="xs-components-links-module-SACBootstrap3GridModule-e91af67a0332147b0b96a2c6a82269d9f744585cb1e352abbc6648c62eb57c68f6e5b5ebd52cfed43585e019ff65d6eef24a142a875283a1f01c80e6e75385d6"' }>
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
                                <a href="modules/SACBootstrap3InputModule.html" data-type="entity-link" >SACBootstrap3InputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3InputModule-fc1ee1dbe510bd79d4fa0757494f74dacc9912a5f7f2971511fa889f8a49a9941d859a7b77a37d0c79caefc040d4dbc5ce96800f335f82349bbd9e8fb8768581"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3InputModule-fc1ee1dbe510bd79d4fa0757494f74dacc9912a5f7f2971511fa889f8a49a9941d859a7b77a37d0c79caefc040d4dbc5ce96800f335f82349bbd9e8fb8768581"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3InputModule-fc1ee1dbe510bd79d4fa0757494f74dacc9912a5f7f2971511fa889f8a49a9941d859a7b77a37d0c79caefc040d4dbc5ce96800f335f82349bbd9e8fb8768581"' :
                                            'id="xs-components-links-module-SACBootstrap3InputModule-fc1ee1dbe510bd79d4fa0757494f74dacc9912a5f7f2971511fa889f8a49a9941d859a7b77a37d0c79caefc040d4dbc5ce96800f335f82349bbd9e8fb8768581"' }>
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
                                <a href="modules/SACBootstrap3ListModule.html" data-type="entity-link" >SACBootstrap3ListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3ListModule-31f0f363891ef063225ab380d4c97cc4a5d9d0bde1eb0c3b0680ca3033c6a41ad3c08a339b7ff9989bfc0455b7c33f2a3597028f2f0f36d9d15c47b11436f703"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3ListModule-31f0f363891ef063225ab380d4c97cc4a5d9d0bde1eb0c3b0680ca3033c6a41ad3c08a339b7ff9989bfc0455b7c33f2a3597028f2f0f36d9d15c47b11436f703"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3ListModule-31f0f363891ef063225ab380d4c97cc4a5d9d0bde1eb0c3b0680ca3033c6a41ad3c08a339b7ff9989bfc0455b7c33f2a3597028f2f0f36d9d15c47b11436f703"' :
                                            'id="xs-components-links-module-SACBootstrap3ListModule-31f0f363891ef063225ab380d4c97cc4a5d9d0bde1eb0c3b0680ca3033c6a41ad3c08a339b7ff9989bfc0455b7c33f2a3597028f2f0f36d9d15c47b11436f703"' }>
                                            <li class="link">
                                                <a href="components/NgDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgListboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgListboxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap3ListModule-31f0f363891ef063225ab380d4c97cc4a5d9d0bde1eb0c3b0680ca3033c6a41ad3c08a339b7ff9989bfc0455b7c33f2a3597028f2f0f36d9d15c47b11436f703"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap3ListModule-31f0f363891ef063225ab380d4c97cc4a5d9d0bde1eb0c3b0680ca3033c6a41ad3c08a339b7ff9989bfc0455b7c33f2a3597028f2f0f36d9d15c47b11436f703"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap3ListModule-31f0f363891ef063225ab380d4c97cc4a5d9d0bde1eb0c3b0680ca3033c6a41ad3c08a339b7ff9989bfc0455b7c33f2a3597028f2f0f36d9d15c47b11436f703"' :
                                        'id="xs-directives-links-module-SACBootstrap3ListModule-31f0f363891ef063225ab380d4c97cc4a5d9d0bde1eb0c3b0680ca3033c6a41ad3c08a339b7ff9989bfc0455b7c33f2a3597028f2f0f36d9d15c47b11436f703"' }>
                                        <li class="link">
                                            <a href="directives/NgDropdownOptionDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgDropdownOptionDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3StaticLabelModule.html" data-type="entity-link" >SACBootstrap3StaticLabelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3StaticLabelModule-59f5f082974e01b8ca1397a607221b1adf36e2143f314ba33249182c37e5104ae4364e9583277e81b00b5e81931c88df6fbec24bafe5fc63cb7e36d6294ee48a"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3StaticLabelModule-59f5f082974e01b8ca1397a607221b1adf36e2143f314ba33249182c37e5104ae4364e9583277e81b00b5e81931c88df6fbec24bafe5fc63cb7e36d6294ee48a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3StaticLabelModule-59f5f082974e01b8ca1397a607221b1adf36e2143f314ba33249182c37e5104ae4364e9583277e81b00b5e81931c88df6fbec24bafe5fc63cb7e36d6294ee48a"' :
                                            'id="xs-components-links-module-SACBootstrap3StaticLabelModule-59f5f082974e01b8ca1397a607221b1adf36e2143f314ba33249182c37e5104ae4364e9583277e81b00b5e81931c88df6fbec24bafe5fc63cb7e36d6294ee48a"' }>
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
                                <a href="modules/SACBootstrap3TabsModule.html" data-type="entity-link" >SACBootstrap3TabsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3TabsModule-417888f31f80e2cea94c0c2c648bbd404351aae812cca0bbbaa7bb38f09a599b01039d0babba82383633d4234e2b541e01f2cfeabc4d49960fcb85182a26c07a"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3TabsModule-417888f31f80e2cea94c0c2c648bbd404351aae812cca0bbbaa7bb38f09a599b01039d0babba82383633d4234e2b541e01f2cfeabc4d49960fcb85182a26c07a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3TabsModule-417888f31f80e2cea94c0c2c648bbd404351aae812cca0bbbaa7bb38f09a599b01039d0babba82383633d4234e2b541e01f2cfeabc4d49960fcb85182a26c07a"' :
                                            'id="xs-components-links-module-SACBootstrap3TabsModule-417888f31f80e2cea94c0c2c648bbd404351aae812cca0bbbaa7bb38f09a599b01039d0babba82383633d4234e2b541e01f2cfeabc4d49960fcb85182a26c07a"' }>
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
                                <a href="modules/SACBootstrap3TinyMceModule.html" data-type="entity-link" >SACBootstrap3TinyMceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3TinyMceModule-eab3864528552b82fdfcbd88838b4bdff06e7ddd1afbc0a5d17c315cf4f797fc19cbed0acd87bb9bc9c3006721edbf9485f453dc83279264447c90965387e2fb"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3TinyMceModule-eab3864528552b82fdfcbd88838b4bdff06e7ddd1afbc0a5d17c315cf4f797fc19cbed0acd87bb9bc9c3006721edbf9485f453dc83279264447c90965387e2fb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3TinyMceModule-eab3864528552b82fdfcbd88838b4bdff06e7ddd1afbc0a5d17c315cf4f797fc19cbed0acd87bb9bc9c3006721edbf9485f453dc83279264447c90965387e2fb"' :
                                            'id="xs-components-links-module-SACBootstrap3TinyMceModule-eab3864528552b82fdfcbd88838b4bdff06e7ddd1afbc0a5d17c315cf4f797fc19cbed0acd87bb9bc9c3006721edbf9485f453dc83279264447c90965387e2fb"' }>
                                            <li class="link">
                                                <a href="components/NgTinyMceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgTinyMceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3TooltipModule.html" data-type="entity-link" >SACBootstrap3TooltipModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3TooltipModule-e0a7ef2ce53737157ebe6f8094f4bfe4e350faab62db3747d7cd0881706b17e16001f59c693a4ffaa86d604b9ba438efc8745f1d435243776dd8022271b26c3b"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3TooltipModule-e0a7ef2ce53737157ebe6f8094f4bfe4e350faab62db3747d7cd0881706b17e16001f59c693a4ffaa86d604b9ba438efc8745f1d435243776dd8022271b26c3b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3TooltipModule-e0a7ef2ce53737157ebe6f8094f4bfe4e350faab62db3747d7cd0881706b17e16001f59c693a4ffaa86d604b9ba438efc8745f1d435243776dd8022271b26c3b"' :
                                            'id="xs-components-links-module-SACBootstrap3TooltipModule-e0a7ef2ce53737157ebe6f8094f4bfe4e350faab62db3747d7cd0881706b17e16001f59c693a4ffaa86d604b9ba438efc8745f1d435243776dd8022271b26c3b"' }>
                                            <li class="link">
                                                <a href="components/NgTooltipComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgTooltipComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3TtreeviewModule.html" data-type="entity-link" >SACBootstrap3TtreeviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3TtreeviewModule-403a7bb73b6a669cfee4207f77734df86ec3737150f03f1f4f3c61641695b2b03e0a498f334c4441fdb80c126be964316a29e474fdcdce4eee2f78d6bd905f3f"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3TtreeviewModule-403a7bb73b6a669cfee4207f77734df86ec3737150f03f1f4f3c61641695b2b03e0a498f334c4441fdb80c126be964316a29e474fdcdce4eee2f78d6bd905f3f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3TtreeviewModule-403a7bb73b6a669cfee4207f77734df86ec3737150f03f1f4f3c61641695b2b03e0a498f334c4441fdb80c126be964316a29e474fdcdce4eee2f78d6bd905f3f"' :
                                            'id="xs-components-links-module-SACBootstrap3TtreeviewModule-403a7bb73b6a669cfee4207f77734df86ec3737150f03f1f4f3c61641695b2b03e0a498f334c4441fdb80c126be964316a29e474fdcdce4eee2f78d6bd905f3f"' }>
                                            <li class="link">
                                                <a href="components/NgTreeItemActionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgTreeItemActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgTreeViewChildComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgTreeViewChildComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgTreeViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgTreeViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3UploadModule.html" data-type="entity-link" >SACBootstrap3UploadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3UploadModule-7aa53fe412de32a7df896fac4134f8ed38d58b2e8db0e93f87ae94a31fd5665f5fe52dcecd027672b8a3b0ceb8fd10375ec98163db1bfe467eb22ba61bbbfa7c"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3UploadModule-7aa53fe412de32a7df896fac4134f8ed38d58b2e8db0e93f87ae94a31fd5665f5fe52dcecd027672b8a3b0ceb8fd10375ec98163db1bfe467eb22ba61bbbfa7c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3UploadModule-7aa53fe412de32a7df896fac4134f8ed38d58b2e8db0e93f87ae94a31fd5665f5fe52dcecd027672b8a3b0ceb8fd10375ec98163db1bfe467eb22ba61bbbfa7c"' :
                                            'id="xs-components-links-module-SACBootstrap3UploadModule-7aa53fe412de32a7df896fac4134f8ed38d58b2e8db0e93f87ae94a31fd5665f5fe52dcecd027672b8a3b0ceb8fd10375ec98163db1bfe467eb22ba61bbbfa7c"' }>
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
                                <a href="modules/SACBootstrap3ValidationSummaryModule.html" data-type="entity-link" >SACBootstrap3ValidationSummaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3ValidationSummaryModule-c06a4d694933da1b20f9e9670711d355c02650f64d71323efd4f17baee23a65a0227ce4db1eac9756b2bb881028d24b9db028d2c76a0e55427235f203f45e470"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3ValidationSummaryModule-c06a4d694933da1b20f9e9670711d355c02650f64d71323efd4f17baee23a65a0227ce4db1eac9756b2bb881028d24b9db028d2c76a0e55427235f203f45e470"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3ValidationSummaryModule-c06a4d694933da1b20f9e9670711d355c02650f64d71323efd4f17baee23a65a0227ce4db1eac9756b2bb881028d24b9db028d2c76a0e55427235f203f45e470"' :
                                            'id="xs-components-links-module-SACBootstrap3ValidationSummaryModule-c06a4d694933da1b20f9e9670711d355c02650f64d71323efd4f17baee23a65a0227ce4db1eac9756b2bb881028d24b9db028d2c76a0e55427235f203f45e470"' }>
                                            <li class="link">
                                                <a href="components/NgValidationSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgValidationSummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap3WizardModule.html" data-type="entity-link" >SACBootstrap3WizardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap3WizardModule-f13e51a6dff66b1dbf7a8c0df7c9634be7b1730db04199daf41f59aab2eb492d255fda1d177de0176b64b416a2a5070d486af2fbc9faea949133b4fe81b9c2a9"' : 'data-bs-target="#xs-components-links-module-SACBootstrap3WizardModule-f13e51a6dff66b1dbf7a8c0df7c9634be7b1730db04199daf41f59aab2eb492d255fda1d177de0176b64b416a2a5070d486af2fbc9faea949133b4fe81b9c2a9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap3WizardModule-f13e51a6dff66b1dbf7a8c0df7c9634be7b1730db04199daf41f59aab2eb492d255fda1d177de0176b64b416a2a5070d486af2fbc9faea949133b4fe81b9c2a9"' :
                                            'id="xs-components-links-module-SACBootstrap3WizardModule-f13e51a6dff66b1dbf7a8c0df7c9634be7b1730db04199daf41f59aab2eb492d255fda1d177de0176b64b416a2a5070d486af2fbc9faea949133b4fe81b9c2a9"' }>
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
                                <a href="modules/SACCommonListboxOptionModule.html" data-type="entity-link" >SACCommonListboxOptionModule</a>
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
                                    <a href="directives/NgTinyMceCommon.html" data-type="entity-link" >NgTinyMceCommon</a>
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
                                <a href="classes/NgConfirmButton.html" data-type="entity-link" >NgConfirmButton</a>
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
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
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
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link" >Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClientRect.html" data-type="entity-link" >ClientRect</a>
                            </li>
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