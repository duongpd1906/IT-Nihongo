import 'package:flutter/material.dart';
import 'package:mobile/data/repositories/topic_repositories.dart';
import 'package:mobile/view/register/register_page.dart';
import 'package:mobile/view/register/view_model/register_view_model.dart';
import 'package:provider/provider.dart';

class RegisterProvider extends StatelessWidget {
  const RegisterProvider({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => RegisterViewModel(
        topicRepositories: TopicRepositories(),
      ),
      child: const RegisterPage(),
    );
  }
}
