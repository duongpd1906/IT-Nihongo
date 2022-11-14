import 'package:auto_route/annotations.dart';
import 'package:mobile/view/login/login_page.dart';
import 'package:mobile/view/register/register_page.dart';
import 'package:mobile/view/splash/splash_page.dart';

@MaterialAutoRouter(
  replaceInRouteName: 'Page,Route',
  routes: <AutoRoute>[
    AutoRoute(page: SplashPage, initial: true),
    AutoRoute(page: LoginPage),
    AutoRoute(page: RegisterPage),
  ],
)
class $AppRouter {}
