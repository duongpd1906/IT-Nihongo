import 'package:flutter/cupertino.dart';

import '../../../data/repositories/topic_repositories.dart';

class LoginViewModel with ChangeNotifier {
  LoginViewModel({required this.topicRepositories});

  final TopicRepositories topicRepositories;
}
