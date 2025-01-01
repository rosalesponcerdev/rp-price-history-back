import { IsNotEmpty } from 'class-validator';
import { BaseDTO } from '../../config/base.dto';

export class ProductDTO extends BaseDTO {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  price!: number;

  @IsNotEmpty()
  quantity!: number;

  @IsNotEmpty()
  unit!: string;
}
