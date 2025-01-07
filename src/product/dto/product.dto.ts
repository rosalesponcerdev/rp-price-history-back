import { z } from 'zod';

export const ProductDto = z.object({
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  unit: z.string(),
});
