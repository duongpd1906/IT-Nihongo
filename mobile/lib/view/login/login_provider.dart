import 'package:flutter/material.dart';
import 'package:mobile/data/repositories/topic_repositories.dart';
import 'package:mobile/view/login/login_page.dart';
import 'package:mobile/view/login/view_model/login_view_model.dart';
import 'package:provider/provider.dart';

class LoginProvider extends StatelessWidget {
  const LoginProvider({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => LoginViewModel(
        topicRepositories: TopicRepositories(),
      ),
      child: const LoginPage(),
    );
  }
}
