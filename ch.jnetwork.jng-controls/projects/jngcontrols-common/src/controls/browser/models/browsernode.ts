import { IBrowserFile } from './browserfile';

export interface IBrowserNode {
  Name: string;
  ChildNodes: IBrowserNode[];
  Files: IBrowserFile[];

  Path: string;
  IsExpanded: boolean;
}
