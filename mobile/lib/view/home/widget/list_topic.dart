import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:mobile/router/app_router.gr.dart';
import 'package:mobile/view/home/widget/topic_item.dart';

import '../../../data/model/topic.dart';

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
      itemBuilder: (context, index) => InkWell(
        onTap: () => AutoRouter.of(context).push(
          TopicDetailRoute(
            topic: topics[index],
          ),
        ),
        child: TopicItem(
          topic: topics[index],
        ),
      ),
      separatorBuilder: (context, index) => const SizedBox(height: 20),
    );
  }
}
