import { IsString, IsInt, IsOptional, Min, MaxLength, IsBoolean, IsEnum } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @MaxLength(50)
  name!: string;

  @IsInt()
  @Min(0)
  age!: number;

  @IsString()
  @MaxLength(100)
  breed!: string;

  @IsOptional()
  @IsString()
  @MaxLength(30)
  color?: string;

  @IsOptional()
  @IsBoolean()
  isVaccinated?: boolean;
}