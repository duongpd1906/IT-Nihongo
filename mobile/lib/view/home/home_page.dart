import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:mobile/model/topic.dart';
import 'package:mobile/router/app_router.gr.dart';
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
  final topics = [
    Topic(
      'THE DAY COFFEE',
      '56 Nguyễn Lương Bằng',
      '若者向けの喫茶店',
      [
        AppImages.imgCafe,
        AppImages.imgCafe2,
        AppImages.imgCafe3,
        AppImages.imgCafe4,
      ],
      1000,
      500,
    ),
    Topic(
      'THE COFFEE HOUSE',
      '56 Nguyễn Lương Bằng',
      '若者向けの喫茶店',
      [
        AppImages.imgCafe,
        AppImages.imgCafe2,
        AppImages.imgCafe3,
        AppImages.imgCafe4,
      ],
      3,
      50,
    ),
    Topic(
        'THE MAIN COFFEE',
        '56 Nguyễn Lương Bằng',
        '若者向けの喫茶店',
        [
          AppImages.imgCafe,
          AppImages.imgCafe2,
          AppImages.imgCafe3,
          AppImages.imgCafe4,
        ],
        45,
        80),
    Topic(
      'THE BEST COFFEE',
      '56 Nguyễn Lương Bằng',
      '若者向けの喫茶店',
      [
        AppImages.imgCafe,
        AppImages.imgCafe2,
        AppImages.imgCafe3,
        AppImages.imgCafe4,
      ],
      9,
      2,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        iconTheme: const IconThemeData(color: AppColors.lightBlue),
        title: const Text(
          AppTexts.listTopic,
          style: TextStyle(
            fontSize: 25,
            fontWeight: FontWeight.w500,
            color: AppColors.lightBlue,
          ),
        ),
        centerTitle: true,
        actions: [
          Container(
            margin: const EdgeInsets.only(right: 20, top: 10),
            height: 35,
            width: 35,
            child: const CircleAvatar(
              backgroundImage: AssetImage(
                AppImages.imgAvatar,
              ),
            ),
          ),
        ],
      ),
      drawer: Drawer(
        width: 250,
        child: SafeArea(
          child: Column(
            children: [
              const SizedBox(height: 10),
              const SizedBox(
                height: 100,
                width: 100,
                child: CircleAvatar(
                  backgroundImage: AssetImage(
                    AppImages.imgAvatar,
                  ),
                ),
              ),
              const SizedBox(height: 15),
              const Text(
                'THANH HOI',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w700,
                ),
              ),
              const Divider(
                thickness: 3,
                color: AppColors.lightBlue,
              ),
              const SizedBox(height: 15),
              InkWell(
                onTap: () => AutoRouter.of(context).replaceAll(
                  [
                    const SplashRoute(),
                  ],
                ),
                child: SizedBox(
                  height: 60,
                  width: double.infinity,
                  child: Row(
                    children: const [
                      SizedBox(width: 20),
                      Icon(Icons.logout),
                      SizedBox(width: 20),
                      Text(
                        AppTexts.logout,
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.w300,
                        ),
                      )
                    ],
                  ),
                ),
              )
            ],
          ),
        ),
      ),
      body: SafeArea(
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 15),
          width: double.infinity,
          child: SingleChildScrollView(
            child: Column(
              children: [
                const SizedBox(height: 30),
                ListTopic(
                  topics: topics,
                ),
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
