import 'package:flutter/material.dart';
import 'package:mobile/view/home/widget/topic_item.dart';

class ListTopic extends StatelessWidget {
  const ListTopic({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      itemCount: 10,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemBuilder: (context, index) => const TopicItem(),
      separatorBuilder: (context, index) => const SizedBox(height: 20),
    );
  }
}
