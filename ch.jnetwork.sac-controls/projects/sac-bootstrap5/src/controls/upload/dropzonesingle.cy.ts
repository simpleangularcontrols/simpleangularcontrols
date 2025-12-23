import { SacFormDirective } from '../form';
import { SACBootstrap5LayoutModule } from '../layout/layout.module';
import { SACBootstrap5UploadModule } from './upload.module';
import { FormsModule } from '@angular/forms';

describe('SacDropzoneSingleComponent', () => {
    it('should show label and component', () => {
        cy.mount(
            `<form>
                <sac-dropzonesingle name="uploadControl" endpoint="/api/upload/register" [label]="label"></sac-dropzonesingle>
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
