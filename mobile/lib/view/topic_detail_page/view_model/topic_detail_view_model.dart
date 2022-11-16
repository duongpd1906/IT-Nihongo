import 'package:flutter/cupertino.dart';

import '../../../data/repositories/topic_repositories.dart';

class TopicDetailViewModel with ChangeNotifier {
  TopicDetailViewModel({required this.topicRepositories});

  final TopicRepositories topicRepositories;
}
