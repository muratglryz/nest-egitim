import * as mongoose from 'mongoose';
import { AuditModel } from './audit.model';

export class InventoryTypeModel {
  id: string;
  name: string;
  audit: AuditModel;
}

