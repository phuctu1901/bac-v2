import { AuthAppleController } from './v1/auth-apple.controller';
import { AuthFacebookController } from './v1/auth-facebook.controller';
import { AuthGoogleController } from './v1/auth-google.controller';
import { AuthTwitterController } from './v1/auth-twitter.controller';
import { AuthController } from './v1/auth.controller';
import { FilesController } from './v1/files.controller';
import { ServicesController } from './v1/services.controller';
import { UsersController } from './v1/users.controller';

const AppControllers = [
  AuthController,
  AuthAppleController,
  AuthFacebookController,
  AuthGoogleController,
  AuthTwitterController,
  FilesController,
  UsersController,
  ServicesController,
];

export default AppControllers;
