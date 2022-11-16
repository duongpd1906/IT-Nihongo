import 'package:flutter/cupertino.dart';

import '../../../data/repositories/topic_repositories.dart';

class RegisterViewModel with ChangeNotifier {
  RegisterViewModel({required this.topicRepositories});

  final TopicRepositories topicRepositories;
}
