import 'package:auto_route/annotations.dart';
import 'package:mobile/view/home/home_provider.dart';
import 'package:mobile/view/login/login_provider.dart';
import 'package:mobile/view/register/register_provider.dart';
import 'package:mobile/view/splash/splash_provider.dart';
import 'package:mobile/view/topic_detail_page/topic_detail_provider.dart';

@MaterialAutoRouter(
  replaceInRouteName: 'Provider,Route',
  routes: <AutoRoute>[
    AutoRoute(page: SplashProvider, initial: true),
    AutoRoute(page: LoginProvider),
    AutoRoute(page: RegisterProvider),
    AutoRoute(page: HomeProvider),
    AutoRoute(page: TopicDetailProvider),
  ],
)
class $AppRouter {}
