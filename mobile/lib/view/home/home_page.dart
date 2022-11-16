import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:mobile/router/app_router.gr.dart';
import 'package:mobile/view/constant/app_colors.dart';
import 'package:mobile/view/constant/app_images.dart';
import 'package:mobile/view/constant/app_texts.dart';
import 'package:mobile/view/home/view_model/home_state.dart';
import 'package:mobile/view/home/view_model/home_view_model.dart';
import 'package:mobile/view/home/widget/list_topic.dart';
import 'package:provider/provider.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  void initState() {
    super.initState();
    context.read<HomeViewModel>().getTopics();
  }

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
      body: Consumer<HomeViewModel>(
        builder: (_, provider, child) {
          if (provider.state.status == HomePageStatus.inProgress) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          } else {
            return SafeArea(
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 15),
                width: double.infinity,
                child: SingleChildScrollView(
                  child: Column(
                    children: [
                      const SizedBox(height: 30),
                      ListTopic(
                        topics: provider.state.topics,
                      ),
                    ],
                  ),
                ),
              ),
            );
          }
        },
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: AppColors.lightBlue,
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    );
  }
}
