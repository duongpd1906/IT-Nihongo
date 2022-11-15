import 'package:flutter/material.dart';
import 'package:mobile/view/home/widget/topic_item.dart';

import '../../../model/topic.dart';

class ListTopic extends StatelessWidget {
  const ListTopic({
    super.key,
    required this.topics,
  });

  final List<Topic> topics;

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      itemCount: topics.length,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemBuilder: (context, index) => TopicItem(
        topic: topics[index],
      ),
      separatorBuilder: (context, index) => const SizedBox(height: 20),
    );
  }
}
