import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5UploadModule } from './upload.module';
import { FormsModule } from '@angular/forms';

describe('SacDropzoneMultipleComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-dropzonemultiple name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-dropzonemultiple>
            </form>`,
            {
                imports: [FormsModule, SacFormDirective, SACBootstrap5UploadModule, SACBootstrap5LayoutModule],
                componentProperties: {
                    label: 'My Label',
                },
            }
        );

        cy.shouldHaveLabel('My Label');
    });
});
