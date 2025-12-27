import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Get } from '@nestjs/common';
import { RecadosService } from './recados.service';
import { RecadoEntity } from './entities/recado.entity';

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll() {
    return this.recadosService.fidnAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recadosService.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createRecadoDto: RecadoEntity) {
    return this.recadosService.create(createRecadoDto);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  updateRecado(@Param('id') id: string, @Body() updateRecado: RecadoEntity) {
    return this.recadosService.update(id, updateRecado);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecado: RecadoEntity) {
    return this.recadosService.update(id, updateRecado);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id/delete')
  remove(@Param('id') id: string) {
    return this.recadosService.remove(id);
  }
}
