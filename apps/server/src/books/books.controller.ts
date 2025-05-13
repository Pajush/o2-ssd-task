import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksRepo: BooksRepository) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksRepo.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksRepo.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.booksRepo.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.booksRepo.remove(+id);
  }
}
