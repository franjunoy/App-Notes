import { Repository } from 'typeorm';
import { Note } from './note.entity';

export class NoteRepository extends Repository<Note> {}
