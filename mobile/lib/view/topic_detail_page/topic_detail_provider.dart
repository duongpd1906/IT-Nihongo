import 'package:flutter/material.dart';
import 'package:mobile/data/model/topic.dart';
import 'package:mobile/data/repositories/topic_repositories.dart';
import 'package:mobile/view/topic_detail_page/topic_detail_page.dart';
import 'package:mobile/view/topic_detail_page/view_model/topic_detail_view_model.dart';
import 'package:provider/provider.dart';

class TopicDetailProvider extends StatelessWidget {
  const TopicDetailProvider({
    super.key,
    required this.topic,
  });

  final Topic topic;

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => TopicDetailViewModel(
        topicRepositories: TopicRepositories(),
      ),
      child: TopicDetailPage(topic: topic),
    );
  }
}
