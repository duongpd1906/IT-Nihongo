// **************************************************************************
// AutoRouteGenerator
// **************************************************************************

// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouteGenerator
// **************************************************************************
//
// ignore_for_file: type=lint

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:auto_route/auto_route.dart' as _i6;
import 'package:flutter/material.dart' as _i7;
import 'package:flutter/src/widgets/framework.dart' as _i8;

import '../data/model/topic.dart' as _i9;
import '../view/home/home_provider.dart' as _i4;
import '../view/login/login_provider.dart' as _i2;
import '../view/register/register_provider.dart' as _i3;
import '../view/splash/splash_provider.dart' as _i1;
import '../view/topic_detail_page/topic_detail_provider.dart' as _i5;

class AppRouter extends _i6.RootStackRouter {
  AppRouter([_i7.GlobalKey<_i7.NavigatorState>? navigatorKey])
      : super(navigatorKey);

  @override
  final Map<String, _i6.PageFactory> pagesMap = {
    SplashRoute.name: (routeData) {
      return _i6.MaterialPageX<dynamic>(
        routeData: routeData,
        child: const _i1.SplashProvider(),
      );
    },
    LoginRoute.name: (routeData) {
      return _i6.MaterialPageX<dynamic>(
        routeData: routeData,
        child: const _i2.LoginProvider(),
      );
    },
    RegisterRoute.name: (routeData) {
      return _i6.MaterialPageX<dynamic>(
        routeData: routeData,
        child: const _i3.RegisterProvider(),
      );
    },
    HomeRoute.name: (routeData) {
      return _i6.MaterialPageX<dynamic>(
        routeData: routeData,
        child: const _i4.HomeProvider(),
      );
    },
    TopicDetailRoute.name: (routeData) {
      final args = routeData.argsAs<TopicDetailRouteArgs>();
      return _i6.MaterialPageX<dynamic>(
        routeData: routeData,
        child: _i5.TopicDetailProvider(
          key: args.key,
          topic: args.topic,
        ),
      );
    },
  };

  @override
  List<_i6.RouteConfig> get routes => [
        _i6.RouteConfig(
          SplashRoute.name,
          path: '/',
        ),
        _i6.RouteConfig(
          LoginRoute.name,
          path: '/login-provider',
        ),
        _i6.RouteConfig(
          RegisterRoute.name,
          path: '/register-provider',
        ),
        _i6.RouteConfig(
          HomeRoute.name,
          path: '/home-provider',
        ),
        _i6.RouteConfig(
          TopicDetailRoute.name,
          path: '/topic-detail-provider',
        ),
      ];
}

/// generated route for
/// [_i1.SplashProvider]
class SplashRoute extends _i6.PageRouteInfo<void> {
  const SplashRoute()
      : super(
          SplashRoute.name,
          path: '/',
        );

  static const String name = 'SplashRoute';
}

/// generated route for
/// [_i2.LoginProvider]
class LoginRoute extends _i6.PageRouteInfo<void> {
  const LoginRoute()
      : super(
          LoginRoute.name,
          path: '/login-provider',
        );

  static const String name = 'LoginRoute';
}

/// generated route for
/// [_i3.RegisterProvider]
class RegisterRoute extends _i6.PageRouteInfo<void> {
  const RegisterRoute()
      : super(
          RegisterRoute.name,
          path: '/register-provider',
        );

  static const String name = 'RegisterRoute';
}

/// generated route for
/// [_i4.HomeProvider]
class HomeRoute extends _i6.PageRouteInfo<void> {
  const HomeRoute()
      : super(
          HomeRoute.name,
          path: '/home-provider',
        );

  static const String name = 'HomeRoute';
}

/// generated route for
/// [_i5.TopicDetailProvider]
class TopicDetailRoute extends _i6.PageRouteInfo<TopicDetailRouteArgs> {
  TopicDetailRoute({
    _i8.Key? key,
    required _i9.Topic topic,
  }) : super(
          TopicDetailRoute.name,
          path: '/topic-detail-provider',
          args: TopicDetailRouteArgs(
            key: key,
            topic: topic,
          ),
        );

  static const String name = 'TopicDetailRoute';
}

class TopicDetailRouteArgs {
  const TopicDetailRouteArgs({
    this.key,
    required this.topic,
  });

  final _i8.Key? key;

  final _i9.Topic topic;

  @override
  String toString() {
    return 'TopicDetailRouteArgs{key: $key, topic: $topic}';
  }
}
