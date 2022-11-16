import 'package:flutter/cupertino.dart';
import 'package:mobile/view/home/view_model/home_state.dart';

import '../../../data/repositories/topic_repositories.dart';

class HomeViewModel with ChangeNotifier {
  HomeViewModel({required this.topicRepositories});

  final TopicRepositories topicRepositories;

  HomeState state = HomeState.initial();

  Future<void> getTopics() async {
    state = state.copyWith(status: HomePageStatus.inProgress);
    final topics = await topicRepositories.getTopics();
    state = state.copyWith(
      topics: topics,
      status: HomePageStatus.success,
    );
    notifyListeners();
  }
}
