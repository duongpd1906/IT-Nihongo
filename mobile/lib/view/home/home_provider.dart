import 'package:flutter/material.dart';
import 'package:mobile/data/repositories/topic_repositories.dart';
import 'package:mobile/view/home/home_page.dart';
import 'package:mobile/view/home/view_model/home_view_model.dart';
import 'package:provider/provider.dart';

class HomeProvider extends StatelessWidget {
  const HomeProvider({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => HomeViewModel(
        topicRepositories: TopicRepositories(),
      ),
      child: const HomePage(),
    );
  }
}
