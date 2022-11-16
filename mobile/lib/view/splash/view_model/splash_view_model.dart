import 'package:flutter/cupertino.dart';
import 'package:mobile/data/repositories/topic_repositories.dart';

class SplashViewModel with ChangeNotifier {
  SplashViewModel({required this.topicRepositories});

  final TopicRepositories topicRepositories;
}
