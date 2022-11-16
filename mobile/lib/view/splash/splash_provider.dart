import 'package:flutter/material.dart';
import 'package:mobile/data/repositories/topic_repositories.dart';
import 'package:mobile/view/splash/splash_page.dart';
import 'package:mobile/view/splash/view_model/splash_view_model.dart';
import 'package:provider/provider.dart';

class SplashProvider extends StatelessWidget {
  const SplashProvider({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => SplashViewModel(
        topicRepositories: TopicRepositories(),
      ),
      child: const SplashPage(),
    );
  }
}
