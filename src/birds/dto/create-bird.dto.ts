import { IsString, IsInt, IsOptional, Min, MaxLength, IsBoolean, MinLength, Max } from 'class-validator';

export class CreateBirdDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name!: string;

  @IsInt()
  @Min(0)
  @Max(100)
  age!: number;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  species!: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  color?: string;

  @IsOptional()
  @IsBoolean()
  canFly?: boolean;

  @IsOptional()
  @IsInt()
  @Min(5)
  @Max(300)
  wingspan?: number;
}