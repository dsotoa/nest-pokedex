import { IsInt, IsString, Min, MinLength, IsPositive } from 'class-validator';
export class CreatePokemonDto {
  // IsInt, isPositive, min 1
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;

  // isString, Minlen
  @IsString()
  @MinLength(1)
  name: string;
}
