import { Injectable, NotFoundException } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  private cats: Cat[] = [
    { 
      id: 1, 
      name: 'Whiskers', 
      age: 3, 
      breed: 'Siamese', 
      color: 'White',
      isVaccinated: true 
    },
    { 
      id: 2, 
      name: 'Mittens', 
      age: 2, 
      breed: 'Persian', 
      color: 'Gray',
      isVaccinated: false 
    },
    { 
      id: 3, 
      name: 'Luna', 
      age: 4, 
      breed: 'Maine Coon', 
      color: 'Brown',
      isVaccinated: true 
    },
  ];
  private nextId = 4;

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat {
    const cat = this.cats.find(cat => cat.id === id);
    if (!cat) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    return cat;
  }

  create(createCatDto: CreateCatDto): Cat {
    const newCat: Cat = {
      id: this.nextId++,
      name: createCatDto.name,
      age: createCatDto.age,
      breed: createCatDto.breed,
      color: createCatDto.color || 'Unknown',
      isVaccinated: createCatDto.isVaccinated || false,
    };
    this.cats.push(newCat);
    return newCat;
  }

  update(id: number, updateCatDto: UpdateCatDto): Cat {
    const catIndex = this.cats.findIndex(cat => cat.id === id);
    if (catIndex === -1) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    
    this.cats[catIndex] = {
      ...this.cats[catIndex],
      ...updateCatDto,
    };
    return this.cats[catIndex];
  }

  delete(id: number): { deleted: boolean; message: string } {
    const catIndex = this.cats.findIndex(cat => cat.id === id);
    if (catIndex === -1) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }
    this.cats.splice(catIndex, 1);
    return { deleted: true, message: `Cat with ID ${id} deleted successfully` };
  }
}