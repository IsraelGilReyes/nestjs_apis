import { Injectable, NotFoundException } from '@nestjs/common';
import { Bird } from './interfaces/bird.interface';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';

@Injectable()
export class BirdsService {
  private birds: Bird[] = [
    { 
      id: 1, 
      name: 'Tweety', 
      age: 2, 
      species: 'Canary', 
      color: 'Yellow',
      canFly: true,
      wingspan: 20 
    },
    { 
      id: 2, 
      name: 'Rio', 
      age: 3, 
      species: 'Macaw', 
      color: 'Blue and Yellow',
      canFly: true,
      wingspan: 110 
    },
    { 
      id: 3, 
      name: 'Pingu', 
      age: 5, 
      species: 'Penguin', 
      color: 'Black and White',
      canFly: false,
      wingspan: 60 
    },
  ];
  private nextId = 4;

  findAll(): Bird[] {
    return this.birds;
  }

  findOne(id: number): Bird {
    const bird = this.birds.find(bird => bird.id === id);
    if (!bird) {
      throw new NotFoundException(`Bird with ID ${id} not found`);
    }
    return bird;
  }

  create(createBirdDto: CreateBirdDto): Bird {
    const newBird: Bird = {
      id: this.nextId++,
      name: createBirdDto.name,
      age: createBirdDto.age,
      species: createBirdDto.species,
      color: createBirdDto.color || 'Unknown',
      canFly: createBirdDto.canFly !== undefined ? createBirdDto.canFly : true,
      wingspan: createBirdDto.wingspan || 30,
    };
    this.birds.push(newBird);
    return newBird;
  }

  update(id: number, updateBirdDto: UpdateBirdDto): Bird {
    const birdIndex = this.birds.findIndex(bird => bird.id === id);
    if (birdIndex === -1) {
      throw new NotFoundException(`Bird with ID ${id} not found`);
    }
    
    this.birds[birdIndex] = {
      ...this.birds[birdIndex],
      ...updateBirdDto,
    };
    return this.birds[birdIndex];
  }

  delete(id: number): { deleted: boolean; message: string } {
    const birdIndex = this.birds.findIndex(bird => bird.id === id);
    if (birdIndex === -1) {
      throw new NotFoundException(`Bird with ID ${id} not found`);
    }
    this.birds.splice(birdIndex, 1);
    return { deleted: true, message: `Bird with ID ${id} deleted successfully` };
  }
}