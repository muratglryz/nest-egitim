import * as mongoose from 'mongoose';
import { AuditModel } from './audit.model';

export class ProductTypeModel {
  id: string;
  name: string;
  audit: AuditModel;
}

