import { createParamDecorator } from '@nestjs/common';
export interface User {
  name: string;
}
export const User = createParamDecorator((data, req) => {
  const user = req.user as User;
  return user;
});
