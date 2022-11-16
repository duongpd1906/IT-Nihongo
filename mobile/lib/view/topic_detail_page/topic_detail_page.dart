import 'package:flutter/material.dart';
import 'package:mobile/data/model/topic.dart';
import 'package:mobile/view/widget/evaluate_components.dart';

import '../constant/app_colors.dart';
import '../constant/app_images.dart';
import '../constant/app_texts.dart';

class TopicDetailPage extends StatefulWidget {
  const TopicDetailPage({
    required this.topic,
    super.key,
  });

  final Topic topic;

  @override
  State<TopicDetailPage> createState() => _TopicDetailPageState();
}

class _TopicDetailPageState extends State<TopicDetailPage> {
  int currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        iconTheme: const IconThemeData(color: AppColors.lightBlue),
        title: const Text(
          AppTexts.topicDetail,
          style: TextStyle(
            fontSize: 25,
            fontWeight: FontWeight.w500,
            color: AppColors.lightBlue,
          ),
        ),
        centerTitle: true,
      ),
      body: SafeArea(
        child: SizedBox(
          width: double.infinity,
          height: double.infinity,
          child: ListView(
            children: [
              const SizedBox(height: 15),
              const Padding(
                padding: EdgeInsets.only(left: 10),
                child: Text(
                  AppTexts.design,
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
              const SizedBox(height: 15),
              SizedBox(
                width: double.infinity,
                height: 80,
                child: ListView.builder(
                  itemCount: widget.topic.images.length,
                  scrollDirection: Axis.horizontal,
                  itemBuilder: (context, index) => GestureDetector(
                    onTap: () {
                      currentIndex = index;
                      setState(() {});
                    },
                    child: Container(
                      margin: const EdgeInsets.symmetric(horizontal: 10),
                      height: 70,
                      width: 130,
                      decoration: BoxDecoration(
                        border: index == currentIndex
                            ? Border.all(
                                width: 3,
                                color: AppColors.lightBlue,
                              )
                            : Border.all(width: 0),
                      ),
                      child: Image.asset(
                        widget.topic.images[index],
                        fit: BoxFit.fill,
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 20),
              Align(
                alignment: Alignment.center,
                child: SizedBox(
                  width: 300,
                  height: 200,
                  child: Image.asset(
                    widget.topic.images[currentIndex],
                    fit: BoxFit.fill,
                  ),
                ),
              ),
              const SizedBox(height: 30),
              Padding(
                padding: const EdgeInsets.only(left: 10, bottom: 10),
                child: Text(
                  AppTexts.ideaName(widget.topic.name),
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(left: 10, bottom: 10),
                child: Text(
                  AppTexts.address(widget.topic.address),
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(
                  left: 10,
                  bottom: 10,
                ),
                child: Text(
                  AppTexts.description(widget.topic.description),
                  style: const TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(left: 10, bottom: 10),
                child: Row(
                  children: [
                    const Text(
                      AppTexts.evaluate,
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                    EvaluateComponents(
                      agree: widget.topic.agree,
                      disagree: widget.topic.disagree,
                    ),
                  ],
                ),
              ),
              const Padding(
                padding: EdgeInsets.only(left: 10, bottom: 10),
                child: Text(
                  AppTexts.comment,
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
              ListView.separated(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                itemCount: 4,
                itemBuilder: (context, index) => Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(
                    horizontal: 10,
                    vertical: 20,
                  ),
                  child: Row(
                    children: [
                      const CircleAvatar(
                        backgroundImage: AssetImage(AppImages.imgAvatar),
                      ),
                      const SizedBox(width: 10),
                      Flexible(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: const [
                            Text(
                              'HOI',
                              style: TextStyle(
                                fontSize: 15,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                            Text(
                              'Good ideasdhashdahsdhashdashdhasdhashdashdhasdhashdashdhasd',
                              style: TextStyle(
                                fontSize: 15,
                                fontWeight: FontWeight.w300,
                              ),
                            )
                          ],
                        ),
                      )
                    ],
                  ),
                ),
                separatorBuilder: (context, index) => const Divider(height: 1),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
