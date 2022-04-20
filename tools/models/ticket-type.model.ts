import * as mongoose from 'mongoose';
import { AuditModel } from './audit.model';

export class TicketTypeModel {
  id: string;
  name: string;
  audit: AuditModel;
}