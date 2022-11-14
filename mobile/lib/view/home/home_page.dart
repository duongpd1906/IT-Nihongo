import 'package:flutter/material.dart';
import 'package:mobile/view/constant/app_colors.dart';
import 'package:mobile/view/constant/app_images.dart';
import 'package:mobile/view/constant/app_texts.dart';
import 'package:mobile/view/home/widget/list_topic.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 15),
          width: double.infinity,
          child: SingleChildScrollView(
            child: Column(
              children: [
                SizedBox(
                  height: 60,
                  width: double.infinity,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: const [
                      Icon(
                        Icons.menu,
                        color: AppColors.lightBlue,
                      ),
                      Text(
                        AppTexts.listTopic,
                        style: TextStyle(
                          fontSize: 25,
                          fontWeight: FontWeight.w500,
                          color: AppColors.lightBlue,
                        ),
                      ),
                      CircleAvatar(
                        backgroundImage: AssetImage(
                          AppImages.imgAvatar,
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 30),
                const ListTopic(),
              ],
            ),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: AppColors.lightBlue,
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    );
  }
}
