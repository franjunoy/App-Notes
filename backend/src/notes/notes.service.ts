import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
  ) {}

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    const note = this.noteRepository.create(createNoteDto);
    return this.noteRepository.save(note);
  }

  async findAll(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async findOne(id: number): Promise<Note> {
    return this.noteRepository.findOne({ where: { id } });
  }

  async update(id: number, updateNoteDto: UpdateNoteDto): Promise<Note> {
    await this.noteRepository.update(id, updateNoteDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.noteRepository.delete(id);
  }

  async archive(id: number): Promise<Note> {
    const note = await this.findOne(id);
    note.archived = true;
    return this.noteRepository.save(note);
  }

  async unarchive(id: number): Promise<Note> {
    const note = await this.findOne(id);
    note.archived = false;
    return this.noteRepository.save(note);
  }
}
