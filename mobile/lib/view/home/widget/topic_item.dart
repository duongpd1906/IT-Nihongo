import 'package:flutter/material.dart';
import 'package:mobile/data/model/topic.dart';
import 'package:mobile/view/widget/evaluate_components.dart';

import '../../constant/app_images.dart';

class TopicItem extends StatelessWidget {
  const TopicItem({
    super.key,
    required this.topic,
  });

  final Topic topic;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: 130,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(10),
            child: Image.asset(
              topic.images[0],
              height: 110,
              width: 110,
              fit: BoxFit.fill,
            ),
          ),
          Container(
            width: 200,
            padding: const EdgeInsets.symmetric(vertical: 15),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  topic.name,
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w600,
                  ),
                  maxLines: 2,
                ),
                EvaluateComponents(
                  agree: topic.agree,
                  disagree: topic.disagree,
                )
              ],
            ),
          ),
          SizedBox(
            height: double.infinity,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Image.asset(
                  AppImages.imgO,
                  width: 30,
                  height: 30,
                ),
                Image.asset(
                  AppImages.imgX,
                  width: 30,
                  height: 30,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
