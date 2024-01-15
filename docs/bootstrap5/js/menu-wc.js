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
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5BrowserModule-ea17cbb4447c37043baab2553570e433278dca0a029f0b761cffe1292e5e23d8c7e4bc6b7c057668204ffa1d790fad67acf0ffc07570ef3400bea1528957995f"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5BrowserModule-ea17cbb4447c37043baab2553570e433278dca0a029f0b761cffe1292e5e23d8c7e4bc6b7c057668204ffa1d790fad67acf0ffc07570ef3400bea1528957995f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5BrowserModule-ea17cbb4447c37043baab2553570e433278dca0a029f0b761cffe1292e5e23d8c7e4bc6b7c057668204ffa1d790fad67acf0ffc07570ef3400bea1528957995f"' :
                                            'id="xs-components-links-module-SACBootstrap5BrowserModule-ea17cbb4447c37043baab2553570e433278dca0a029f0b761cffe1292e5e23d8c7e4bc6b7c057668204ffa1d790fad67acf0ffc07570ef3400bea1528957995f"' }>
                                            <li class="link">
                                                <a href="components/SacBrowserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacBrowserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5ButtonModule.html" data-type="entity-link" >SACBootstrap5ButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5ButtonModule-d1991132c817737df14ae2e747503f764962925c24fd7c75ce0d186cfecf293f3e4d65a36f6c0040819da1b96787b24f0471e5526c1661a59693ac60a3cdbcb1"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5ButtonModule-d1991132c817737df14ae2e747503f764962925c24fd7c75ce0d186cfecf293f3e4d65a36f6c0040819da1b96787b24f0471e5526c1661a59693ac60a3cdbcb1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5ButtonModule-d1991132c817737df14ae2e747503f764962925c24fd7c75ce0d186cfecf293f3e4d65a36f6c0040819da1b96787b24f0471e5526c1661a59693ac60a3cdbcb1"' :
                                            'id="xs-components-links-module-SACBootstrap5ButtonModule-d1991132c817737df14ae2e747503f764962925c24fd7c75ce0d186cfecf293f3e4d65a36f6c0040819da1b96787b24f0471e5526c1661a59693ac60a3cdbcb1"' }>
                                            <li class="link">
                                                <a href="components/SacButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5CheckboxModule.html" data-type="entity-link" >SACBootstrap5CheckboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5CheckboxModule-3223105217f5d7cd079386abc15dc33f0b068b639d536e486b64743926119d55dccd88296cb2ba6224fd8b84f4eb0dbe2f86cfc988a1891757d7e7d2df46e0a3"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5CheckboxModule-3223105217f5d7cd079386abc15dc33f0b068b639d536e486b64743926119d55dccd88296cb2ba6224fd8b84f4eb0dbe2f86cfc988a1891757d7e7d2df46e0a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5CheckboxModule-3223105217f5d7cd079386abc15dc33f0b068b639d536e486b64743926119d55dccd88296cb2ba6224fd8b84f4eb0dbe2f86cfc988a1891757d7e7d2df46e0a3"' :
                                            'id="xs-components-links-module-SACBootstrap5CheckboxModule-3223105217f5d7cd079386abc15dc33f0b068b639d536e486b64743926119d55dccd88296cb2ba6224fd8b84f4eb0dbe2f86cfc988a1891757d7e7d2df46e0a3"' }>
                                            <li class="link">
                                                <a href="components/SacCheckboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacCheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacRadiobuttonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacRadiobuttonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacRadiobuttonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacRadiobuttonsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5ConfirmModule.html" data-type="entity-link" >SACBootstrap5ConfirmModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5ConfirmModule-b2ee7a44ea044325c92f8dfb242f61a4e6873a357c5bb6fcb8b99dde0142bd9175f8c05c161397f38fc6f5e9ab3fda7ca27ab7059d7d9c3e00cbe7f2c86efbf1"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5ConfirmModule-b2ee7a44ea044325c92f8dfb242f61a4e6873a357c5bb6fcb8b99dde0142bd9175f8c05c161397f38fc6f5e9ab3fda7ca27ab7059d7d9c3e00cbe7f2c86efbf1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5ConfirmModule-b2ee7a44ea044325c92f8dfb242f61a4e6873a357c5bb6fcb8b99dde0142bd9175f8c05c161397f38fc6f5e9ab3fda7ca27ab7059d7d9c3e00cbe7f2c86efbf1"' :
                                            'id="xs-components-links-module-SACBootstrap5ConfirmModule-b2ee7a44ea044325c92f8dfb242f61a4e6873a357c5bb6fcb8b99dde0142bd9175f8c05c161397f38fc6f5e9ab3fda7ca27ab7059d7d9c3e00cbe7f2c86efbf1"' }>
                                            <li class="link">
                                                <a href="components/SacConfirmComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacConfirmComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5ContextmenuModule.html" data-type="entity-link" >SACBootstrap5ContextmenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5ContextmenuModule-e3fbd8e97c796cefa126750555f470b7a1377dd097fe24e3a50ae66cd27c486340af8382287757f4d4168f616e0fd625a5005460f5bb1dadd1a27f475e188436"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5ContextmenuModule-e3fbd8e97c796cefa126750555f470b7a1377dd097fe24e3a50ae66cd27c486340af8382287757f4d4168f616e0fd625a5005460f5bb1dadd1a27f475e188436"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5ContextmenuModule-e3fbd8e97c796cefa126750555f470b7a1377dd097fe24e3a50ae66cd27c486340af8382287757f4d4168f616e0fd625a5005460f5bb1dadd1a27f475e188436"' :
                                            'id="xs-components-links-module-SACBootstrap5ContextmenuModule-e3fbd8e97c796cefa126750555f470b7a1377dd097fe24e3a50ae66cd27c486340af8382287757f4d4168f616e0fd625a5005460f5bb1dadd1a27f475e188436"' }>
                                            <li class="link">
                                                <a href="components/SacContextmenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacContextmenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacContextmenuItemButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacContextmenuItemButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacContextmenuItemSplitterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacContextmenuItemSplitterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap5ContextmenuModule-e3fbd8e97c796cefa126750555f470b7a1377dd097fe24e3a50ae66cd27c486340af8382287757f4d4168f616e0fd625a5005460f5bb1dadd1a27f475e188436"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap5ContextmenuModule-e3fbd8e97c796cefa126750555f470b7a1377dd097fe24e3a50ae66cd27c486340af8382287757f4d4168f616e0fd625a5005460f5bb1dadd1a27f475e188436"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap5ContextmenuModule-e3fbd8e97c796cefa126750555f470b7a1377dd097fe24e3a50ae66cd27c486340af8382287757f4d4168f616e0fd625a5005460f5bb1dadd1a27f475e188436"' :
                                        'id="xs-directives-links-module-SACBootstrap5ContextmenuModule-e3fbd8e97c796cefa126750555f470b7a1377dd097fe24e3a50ae66cd27c486340af8382287757f4d4168f616e0fd625a5005460f5bb1dadd1a27f475e188436"' }>
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
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5DateTimeModule-8be7e74617403599b99d348e62c0225e7364efe54ac4db1b3b46174cbbeaffcff25a776d0030a76754ad240b3384490d84353e96359df6a202452786b2eb8740"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5DateTimeModule-8be7e74617403599b99d348e62c0225e7364efe54ac4db1b3b46174cbbeaffcff25a776d0030a76754ad240b3384490d84353e96359df6a202452786b2eb8740"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5DateTimeModule-8be7e74617403599b99d348e62c0225e7364efe54ac4db1b3b46174cbbeaffcff25a776d0030a76754ad240b3384490d84353e96359df6a202452786b2eb8740"' :
                                            'id="xs-components-links-module-SACBootstrap5DateTimeModule-8be7e74617403599b99d348e62c0225e7364efe54ac4db1b3b46174cbbeaffcff25a776d0030a76754ad240b3384490d84353e96359df6a202452786b2eb8740"' }>
                                            <li class="link">
                                                <a href="components/SacDateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacDateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacDateSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacDateSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacDateTimeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacDateTimeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacTimeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacTimeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5DialogModule.html" data-type="entity-link" >SACBootstrap5DialogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5DialogModule-dca50e46b658457b1901aebc5a895291189eb16a07cc11d05ac1487c3f6d592fa63efd9e762c956439781d63ab608f7508fe565eff1cfbd87bdbef4e7a640996"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5DialogModule-dca50e46b658457b1901aebc5a895291189eb16a07cc11d05ac1487c3f6d592fa63efd9e762c956439781d63ab608f7508fe565eff1cfbd87bdbef4e7a640996"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5DialogModule-dca50e46b658457b1901aebc5a895291189eb16a07cc11d05ac1487c3f6d592fa63efd9e762c956439781d63ab608f7508fe565eff1cfbd87bdbef4e7a640996"' :
                                            'id="xs-components-links-module-SACBootstrap5DialogModule-dca50e46b658457b1901aebc5a895291189eb16a07cc11d05ac1487c3f6d592fa63efd9e762c956439781d63ab608f7508fe565eff1cfbd87bdbef4e7a640996"' }>
                                            <li class="link">
                                                <a href="components/SacDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5DropdownModule.html" data-type="entity-link" >SACBootstrap5DropdownModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5DropdownModule-804c9e7995cddb5a8658bfde856492641ab229561ad8ebfbdae38b3126873ae592abbdcceb108ec44acb993818de630e683e3504c7aadcdeb3727347ce24c316"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5DropdownModule-804c9e7995cddb5a8658bfde856492641ab229561ad8ebfbdae38b3126873ae592abbdcceb108ec44acb993818de630e683e3504c7aadcdeb3727347ce24c316"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5DropdownModule-804c9e7995cddb5a8658bfde856492641ab229561ad8ebfbdae38b3126873ae592abbdcceb108ec44acb993818de630e683e3504c7aadcdeb3727347ce24c316"' :
                                            'id="xs-components-links-module-SACBootstrap5DropdownModule-804c9e7995cddb5a8658bfde856492641ab229561ad8ebfbdae38b3126873ae592abbdcceb108ec44acb993818de630e683e3504c7aadcdeb3727347ce24c316"' }>
                                            <li class="link">
                                                <a href="components/SacDropdownComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacDropdownComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap5DropdownModule-804c9e7995cddb5a8658bfde856492641ab229561ad8ebfbdae38b3126873ae592abbdcceb108ec44acb993818de630e683e3504c7aadcdeb3727347ce24c316"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap5DropdownModule-804c9e7995cddb5a8658bfde856492641ab229561ad8ebfbdae38b3126873ae592abbdcceb108ec44acb993818de630e683e3504c7aadcdeb3727347ce24c316"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap5DropdownModule-804c9e7995cddb5a8658bfde856492641ab229561ad8ebfbdae38b3126873ae592abbdcceb108ec44acb993818de630e683e3504c7aadcdeb3727347ce24c316"' :
                                        'id="xs-directives-links-module-SACBootstrap5DropdownModule-804c9e7995cddb5a8658bfde856492641ab229561ad8ebfbdae38b3126873ae592abbdcceb108ec44acb993818de630e683e3504c7aadcdeb3727347ce24c316"' }>
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
                                        'data-bs-target="#directives-links-module-SACBootstrap5FormModule-7dcb8ee8eb5c9df31c0ff4299964da9dddb16d8c12e36a55e3d6b9163ddfb8e56f16c25e92f21d8f11cf873f33d00958ead4064f03fafe37b88d89ad619c7190"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap5FormModule-7dcb8ee8eb5c9df31c0ff4299964da9dddb16d8c12e36a55e3d6b9163ddfb8e56f16c25e92f21d8f11cf873f33d00958ead4064f03fafe37b88d89ad619c7190"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap5FormModule-7dcb8ee8eb5c9df31c0ff4299964da9dddb16d8c12e36a55e3d6b9163ddfb8e56f16c25e92f21d8f11cf873f33d00958ead4064f03fafe37b88d89ad619c7190"' :
                                        'id="xs-directives-links-module-SACBootstrap5FormModule-7dcb8ee8eb5c9df31c0ff4299964da9dddb16d8c12e36a55e3d6b9163ddfb8e56f16c25e92f21d8f11cf873f33d00958ead4064f03fafe37b88d89ad619c7190"' }>
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
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5GridModule-7ff955cc841427eb6a1094efbdd7993cfaefc2cfa21dd8083761b3692d249357d80d11796706077645e95dc741e799b78622f9d4e3fb8967beeffa661ffd04e5"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5GridModule-7ff955cc841427eb6a1094efbdd7993cfaefc2cfa21dd8083761b3692d249357d80d11796706077645e95dc741e799b78622f9d4e3fb8967beeffa661ffd04e5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5GridModule-7ff955cc841427eb6a1094efbdd7993cfaefc2cfa21dd8083761b3692d249357d80d11796706077645e95dc741e799b78622f9d4e3fb8967beeffa661ffd04e5"' :
                                            'id="xs-components-links-module-SACBootstrap5GridModule-7ff955cc841427eb6a1094efbdd7993cfaefc2cfa21dd8083761b3692d249357d80d11796706077645e95dc741e799b78622f9d4e3fb8967beeffa661ffd04e5"' }>
                                            <li class="link">
                                                <a href="components/SacGridButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacGridButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacGridColumnActionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacGridColumnActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacGridColumnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacGridColumnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacGridComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacGridImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacGridImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacPagingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacPagingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5InputModule.html" data-type="entity-link" >SACBootstrap5InputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5InputModule-687c80635aabe310beea97ef7505112daebc126f3c0a0324f9c2af1a4a143d284fad4b603a2aa2fb5d291b69255732d9dca79b1ea3d0f550488f8952dc68f042"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5InputModule-687c80635aabe310beea97ef7505112daebc126f3c0a0324f9c2af1a4a143d284fad4b603a2aa2fb5d291b69255732d9dca79b1ea3d0f550488f8952dc68f042"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5InputModule-687c80635aabe310beea97ef7505112daebc126f3c0a0324f9c2af1a4a143d284fad4b603a2aa2fb5d291b69255732d9dca79b1ea3d0f550488f8952dc68f042"' :
                                            'id="xs-components-links-module-SACBootstrap5InputModule-687c80635aabe310beea97ef7505112daebc126f3c0a0324f9c2af1a4a143d284fad4b603a2aa2fb5d291b69255732d9dca79b1ea3d0f550488f8952dc68f042"' }>
                                            <li class="link">
                                                <a href="components/SacInputAreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacInputAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacInputCurrencyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacInputCurrencyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacInputDecimalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacInputDecimalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacInputEmailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacInputEmailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacInputIntegerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacInputIntegerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacInputPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacInputPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacInputSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacInputSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5LayoutModule.html" data-type="entity-link" >SACBootstrap5LayoutModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap5LayoutModule-9c38c5e99101d17780089a2406f621cc6ed21755bacdf7f82bf1c4d9fe6a5138eda808584fa03fbdefdf3d98498d9fdc2a0b91211adb4416b6cfab189e266854"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap5LayoutModule-9c38c5e99101d17780089a2406f621cc6ed21755bacdf7f82bf1c4d9fe6a5138eda808584fa03fbdefdf3d98498d9fdc2a0b91211adb4416b6cfab189e266854"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap5LayoutModule-9c38c5e99101d17780089a2406f621cc6ed21755bacdf7f82bf1c4d9fe6a5138eda808584fa03fbdefdf3d98498d9fdc2a0b91211adb4416b6cfab189e266854"' :
                                        'id="xs-directives-links-module-SACBootstrap5LayoutModule-9c38c5e99101d17780089a2406f621cc6ed21755bacdf7f82bf1c4d9fe6a5138eda808584fa03fbdefdf3d98498d9fdc2a0b91211adb4416b6cfab189e266854"' }>
                                        <li class="link">
                                            <a href="directives/SacFormLayoutDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacFormLayoutDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SACBootstrap5LayoutModule-9c38c5e99101d17780089a2406f621cc6ed21755bacdf7f82bf1c4d9fe6a5138eda808584fa03fbdefdf3d98498d9fdc2a0b91211adb4416b6cfab189e266854"' : 'data-bs-target="#xs-pipes-links-module-SACBootstrap5LayoutModule-9c38c5e99101d17780089a2406f621cc6ed21755bacdf7f82bf1c4d9fe6a5138eda808584fa03fbdefdf3d98498d9fdc2a0b91211adb4416b6cfab189e266854"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SACBootstrap5LayoutModule-9c38c5e99101d17780089a2406f621cc6ed21755bacdf7f82bf1c4d9fe6a5138eda808584fa03fbdefdf3d98498d9fdc2a0b91211adb4416b6cfab189e266854"' :
                                            'id="xs-pipes-links-module-SACBootstrap5LayoutModule-9c38c5e99101d17780089a2406f621cc6ed21755bacdf7f82bf1c4d9fe6a5138eda808584fa03fbdefdf3d98498d9fdc2a0b91211adb4416b6cfab189e266854"' }>
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
                                            'data-bs-target="#components-links-module-SACBootstrap5ListModule-7247af73b0feb5f7924430386b59ea109d1c9bac988f7dd29e6280bed895a76ebdd181393f9897e4d35a33610f80e8353727bca7f406a55f7c08decbeb5004c9"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5ListModule-7247af73b0feb5f7924430386b59ea109d1c9bac988f7dd29e6280bed895a76ebdd181393f9897e4d35a33610f80e8353727bca7f406a55f7c08decbeb5004c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5ListModule-7247af73b0feb5f7924430386b59ea109d1c9bac988f7dd29e6280bed895a76ebdd181393f9897e4d35a33610f80e8353727bca7f406a55f7c08decbeb5004c9"' :
                                            'id="xs-components-links-module-SACBootstrap5ListModule-7247af73b0feb5f7924430386b59ea109d1c9bac988f7dd29e6280bed895a76ebdd181393f9897e4d35a33610f80e8353727bca7f406a55f7c08decbeb5004c9"' }>
                                            <li class="link">
                                                <a href="components/SacListboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacListboxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap5ListModule-7247af73b0feb5f7924430386b59ea109d1c9bac988f7dd29e6280bed895a76ebdd181393f9897e4d35a33610f80e8353727bca7f406a55f7c08decbeb5004c9"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap5ListModule-7247af73b0feb5f7924430386b59ea109d1c9bac988f7dd29e6280bed895a76ebdd181393f9897e4d35a33610f80e8353727bca7f406a55f7c08decbeb5004c9"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap5ListModule-7247af73b0feb5f7924430386b59ea109d1c9bac988f7dd29e6280bed895a76ebdd181393f9897e4d35a33610f80e8353727bca7f406a55f7c08decbeb5004c9"' :
                                        'id="xs-directives-links-module-SACBootstrap5ListModule-7247af73b0feb5f7924430386b59ea109d1c9bac988f7dd29e6280bed895a76ebdd181393f9897e4d35a33610f80e8353727bca7f406a55f7c08decbeb5004c9"' }>
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
                                            'data-bs-target="#components-links-module-SACBootstrap5MultilanguageModule-4e5af6df3543166e0b97060a38cc4bead8f70c2c923ef9d42cf83a44f78e4fe9ef88f80c4c4dd7ee55de06ac866fde6448241b7680bd58c858a2c557e99c0f90"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5MultilanguageModule-4e5af6df3543166e0b97060a38cc4bead8f70c2c923ef9d42cf83a44f78e4fe9ef88f80c4c4dd7ee55de06ac866fde6448241b7680bd58c858a2c557e99c0f90"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5MultilanguageModule-4e5af6df3543166e0b97060a38cc4bead8f70c2c923ef9d42cf83a44f78e4fe9ef88f80c4c4dd7ee55de06ac866fde6448241b7680bd58c858a2c557e99c0f90"' :
                                            'id="xs-components-links-module-SACBootstrap5MultilanguageModule-4e5af6df3543166e0b97060a38cc4bead8f70c2c923ef9d42cf83a44f78e4fe9ef88f80c4c4dd7ee55de06ac866fde6448241b7680bd58c858a2c557e99c0f90"' }>
                                            <li class="link">
                                                <a href="components/SacMultilanguageInputAreaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacMultilanguageInputAreaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacMultilanguageInputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacMultilanguageInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacMultilanguagemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacMultilanguagemenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacMultilanguagemenuItemButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacMultilanguagemenuItemButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SACBootstrap5MultilanguageModule-4e5af6df3543166e0b97060a38cc4bead8f70c2c923ef9d42cf83a44f78e4fe9ef88f80c4c4dd7ee55de06ac866fde6448241b7680bd58c858a2c557e99c0f90"' : 'data-bs-target="#xs-directives-links-module-SACBootstrap5MultilanguageModule-4e5af6df3543166e0b97060a38cc4bead8f70c2c923ef9d42cf83a44f78e4fe9ef88f80c4c4dd7ee55de06ac866fde6448241b7680bd58c858a2c557e99c0f90"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SACBootstrap5MultilanguageModule-4e5af6df3543166e0b97060a38cc4bead8f70c2c923ef9d42cf83a44f78e4fe9ef88f80c4c4dd7ee55de06ac866fde6448241b7680bd58c858a2c557e99c0f90"' :
                                        'id="xs-directives-links-module-SACBootstrap5MultilanguageModule-4e5af6df3543166e0b97060a38cc4bead8f70c2c923ef9d42cf83a44f78e4fe9ef88f80c4c4dd7ee55de06ac866fde6448241b7680bd58c858a2c557e99c0f90"' }>
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
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5StaticLabelModule-0f72b562073cb72fa14705471a1050d2c16cfd6a154ceeaed42fe7a98970c78522be529c0ed105c76d05591d7fad9b3acbf834fc166ee6647a1d6b6228893ce6"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5StaticLabelModule-0f72b562073cb72fa14705471a1050d2c16cfd6a154ceeaed42fe7a98970c78522be529c0ed105c76d05591d7fad9b3acbf834fc166ee6647a1d6b6228893ce6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5StaticLabelModule-0f72b562073cb72fa14705471a1050d2c16cfd6a154ceeaed42fe7a98970c78522be529c0ed105c76d05591d7fad9b3acbf834fc166ee6647a1d6b6228893ce6"' :
                                            'id="xs-components-links-module-SACBootstrap5StaticLabelModule-0f72b562073cb72fa14705471a1050d2c16cfd6a154ceeaed42fe7a98970c78522be529c0ed105c76d05591d7fad9b3acbf834fc166ee6647a1d6b6228893ce6"' }>
                                            <li class="link">
                                                <a href="components/SacStaticFormContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacStaticFormContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacStaticLabelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacStaticLabelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5TabsModule.html" data-type="entity-link" >SACBootstrap5TabsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5TabsModule-92840c0967f79a71ec52e93d908bc349f3357ec71b8ef5d3a115e7d12cebd1305b26b718f1c7acc903fb43a61a39faaa68b65011d49fa7b7582a4e5290d16a60"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5TabsModule-92840c0967f79a71ec52e93d908bc349f3357ec71b8ef5d3a115e7d12cebd1305b26b718f1c7acc903fb43a61a39faaa68b65011d49fa7b7582a4e5290d16a60"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5TabsModule-92840c0967f79a71ec52e93d908bc349f3357ec71b8ef5d3a115e7d12cebd1305b26b718f1c7acc903fb43a61a39faaa68b65011d49fa7b7582a4e5290d16a60"' :
                                            'id="xs-components-links-module-SACBootstrap5TabsModule-92840c0967f79a71ec52e93d908bc349f3357ec71b8ef5d3a115e7d12cebd1305b26b718f1c7acc903fb43a61a39faaa68b65011d49fa7b7582a4e5290d16a60"' }>
                                            <li class="link">
                                                <a href="components/SacTabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacTabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacTabItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacTabItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5TinyMceModule.html" data-type="entity-link" >SACBootstrap5TinyMceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5TinyMceModule-6c717b17e7463d768c23714732a68cd2b1660c6e6427d10b86147fde92593edcf17916278e2b41dafb9582346046a54639a77c13c2f18558d7ccbe979b78db03"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5TinyMceModule-6c717b17e7463d768c23714732a68cd2b1660c6e6427d10b86147fde92593edcf17916278e2b41dafb9582346046a54639a77c13c2f18558d7ccbe979b78db03"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5TinyMceModule-6c717b17e7463d768c23714732a68cd2b1660c6e6427d10b86147fde92593edcf17916278e2b41dafb9582346046a54639a77c13c2f18558d7ccbe979b78db03"' :
                                            'id="xs-components-links-module-SACBootstrap5TinyMceModule-6c717b17e7463d768c23714732a68cd2b1660c6e6427d10b86147fde92593edcf17916278e2b41dafb9582346046a54639a77c13c2f18558d7ccbe979b78db03"' }>
                                            <li class="link">
                                                <a href="components/SacTinyMceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacTinyMceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5UploadModule.html" data-type="entity-link" >SACBootstrap5UploadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5UploadModule-4d9c9e14d4a202cc39247a1bd1e535ee3b377a58b47c53be9cad6303c7aee0f9369fdf7532366c4af2b1c11797c6c67d380e318f82aa691b51767f0127233d06"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5UploadModule-4d9c9e14d4a202cc39247a1bd1e535ee3b377a58b47c53be9cad6303c7aee0f9369fdf7532366c4af2b1c11797c6c67d380e318f82aa691b51767f0127233d06"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5UploadModule-4d9c9e14d4a202cc39247a1bd1e535ee3b377a58b47c53be9cad6303c7aee0f9369fdf7532366c4af2b1c11797c6c67d380e318f82aa691b51767f0127233d06"' :
                                            'id="xs-components-links-module-SACBootstrap5UploadModule-4d9c9e14d4a202cc39247a1bd1e535ee3b377a58b47c53be9cad6303c7aee0f9369fdf7532366c4af2b1c11797c6c67d380e318f82aa691b51767f0127233d06"' }>
                                            <li class="link">
                                                <a href="components/SacDropzoneMultipleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacDropzoneMultipleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacDropzoneSingleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacDropzoneSingleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacUploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacUploadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacUploadMultipleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacUploadMultipleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5ValidationSummaryModule.html" data-type="entity-link" >SACBootstrap5ValidationSummaryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5ValidationSummaryModule-2b540a9509676c6efb9a0f5a6af4f2b241ce2fae44f127e030f1ecee504e8d585251084450de775d3f126081fb63c98742f940e9927d21e96d2390fb4abdf296"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5ValidationSummaryModule-2b540a9509676c6efb9a0f5a6af4f2b241ce2fae44f127e030f1ecee504e8d585251084450de775d3f126081fb63c98742f940e9927d21e96d2390fb4abdf296"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5ValidationSummaryModule-2b540a9509676c6efb9a0f5a6af4f2b241ce2fae44f127e030f1ecee504e8d585251084450de775d3f126081fb63c98742f940e9927d21e96d2390fb4abdf296"' :
                                            'id="xs-components-links-module-SACBootstrap5ValidationSummaryModule-2b540a9509676c6efb9a0f5a6af4f2b241ce2fae44f127e030f1ecee504e8d585251084450de775d3f126081fb63c98742f940e9927d21e96d2390fb4abdf296"' }>
                                            <li class="link">
                                                <a href="components/SacValidationSummaryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacValidationSummaryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SACBootstrap5WizardModule.html" data-type="entity-link" >SACBootstrap5WizardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SACBootstrap5WizardModule-42f5953157dcd5e3df7018c2fc67101a6d3f92995dfc9fda870328889672897b4de42b6ac261ca21bb966e8ec9d59221567f235c51b3ef0ec1b69bd9c86250a7"' : 'data-bs-target="#xs-components-links-module-SACBootstrap5WizardModule-42f5953157dcd5e3df7018c2fc67101a6d3f92995dfc9fda870328889672897b4de42b6ac261ca21bb966e8ec9d59221567f235c51b3ef0ec1b69bd9c86250a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SACBootstrap5WizardModule-42f5953157dcd5e3df7018c2fc67101a6d3f92995dfc9fda870328889672897b4de42b6ac261ca21bb966e8ec9d59221567f235c51b3ef0ec1b69bd9c86250a7"' :
                                            'id="xs-components-links-module-SACBootstrap5WizardModule-42f5953157dcd5e3df7018c2fc67101a6d3f92995dfc9fda870328889672897b4de42b6ac261ca21bb966e8ec9d59221567f235c51b3ef0ec1b69bd9c86250a7"' }>
                                            <li class="link">
                                                <a href="components/SacWizardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacWizardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SacWizardItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SacWizardItemComponent</a>
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
                                    <a href="directives/SacContextmenuCommon.html" data-type="entity-link" >SacContextmenuCommon</a>
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
                                    <a href="directives/SacFormLayoutCommon.html" data-type="entity-link" >SacFormLayoutCommon</a>
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
                                    <a href="directives/SacMultilanguageInputAreaCommon.html" data-type="entity-link" >SacMultilanguageInputAreaCommon</a>
                                </li>
                                <li class="link">
                                    <a href="directives/SacMultilanguageInputCommon.html" data-type="entity-link" >SacMultilanguageInputCommon</a>
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
                                    <a href="injectables/SacAbstractConfigurationService.html" data-type="entity-link" >SacAbstractConfigurationService</a>
                                </li>
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
                                    <a href="injectables/SacDefaultConfigurationService.html" data-type="entity-link" >SacDefaultConfigurationService</a>
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
                                <a href="interfaces/ISacConfigurationService.html" data-type="entity-link" >ISacConfigurationService</a>
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