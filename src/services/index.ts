import { AuthAppleService } from './auth-apple.service';
import { AuthFacebookService } from './auth-facebook.service';
import { AuthGoogleService } from './auth-google.service';
import { AuthTwitterService } from './auth-twitter.service';
import { AuthService } from './auth.service';
import { FilesService } from './files.service';
import { ForgotService } from './forgot.service';

const Services = [
  AuthService,
  AuthAppleService,
  AuthGoogleService,
  AuthFacebookService,
  AuthTwitterService,
  FilesService,
  ForgotService,
];

export default Services;
