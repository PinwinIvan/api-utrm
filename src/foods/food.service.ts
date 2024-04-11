import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from './food.entity';
import { CreateFoodDto } from './dto/create-food.dto';
import { Repository } from 'typeorm';



@Injectable()
export class FoodService {
    constructor(
        @InjectRepository(Food) private readonly foodRepository: Repository<Food>,
      ) {}

      create(createFoodDto: CreateFoodDto): Promise<Food> {
        const food = new Food();
        if (createFoodDto.id) {
          food.id = createFoodDto.id;          
        }

        food.name = createFoodDto.name;
        food.descripcion = createFoodDto.descripcion;
        food.category = createFoodDto.category;
        food.image = createFoodDto.image;
        food.price = createFoodDto.price;
        return this.foodRepository.save(food);
      }

    async findAll():Promise<Food[]>{
            return this.foodRepository.find()
    
    }

    async findOne(id: number): Promise<Food> {
      return this.foodRepository.findOneBy({ id: id });
    }

    async delete(id: string): Promise<void> {
      await this.foodRepository.delete(id);
    }
   
}

