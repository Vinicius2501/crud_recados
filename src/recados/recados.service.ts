import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { RecadoEntity } from './entities/recado.entity';

@Injectable()
export class RecadosService {
  private lastId = 1;
  private recados: RecadoEntity[] = [
    {
      id: 1,
      text: 'Primeiro recado',
      from: 'Alice',
      to: 'Bob',
      readed: false,
      date: new Date(),
    },
  ];

  fidnAll() {
    return this.recados;
  }

  findOne(id: string) {
    if (isNaN(+id)) {
      return `Invalid id format`;
    }
    const recado = this.recados.find((r) => r.id === +id);
    if (!recado) throw new NotFoundException('Recado not found');
    return recado;
  }

  create(createRecadoDto: RecadoEntity) {
    this.lastId++;
    const newRecado = this.recados.push({
      ...createRecadoDto,
      id: this.lastId,
      date: new Date(),
    });
    return newRecado;
  }

  update(id: string, updateRecado: RecadoEntity) {
    const recado = this.recados.findIndex((r) => r.id === +id);
    if (recado >= 0) {
      this.recados[recado] = {
        ...this.recados[recado],
        ...updateRecado,
      };
      return this.recados[recado];
    }
  }

  remove(id: string) {
    const recado = this.recados.findIndex((r) => r.id === +id);
    if (recado >= 0) {
      this.recados.splice(recado, 1);
      return;
    }
  }
}
