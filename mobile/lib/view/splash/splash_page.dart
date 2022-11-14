import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:mobile/router/app_router.gr.dart';
import 'package:mobile/view/constant/app_images.dart';
import 'package:mobile/view/constant/app_texts.dart';

class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    Future.delayed(
      const Duration(seconds: 2),
      () => AutoRouter.of(context).push(const LoginRoute()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        height: double.infinity,
        width: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            const Text(
              AppTexts.appName,
              style: TextStyle(
                fontSize: 50,
                fontWeight: FontWeight.w700,
              ),
              textAlign: TextAlign.center,
            ),
            Image.asset(
              AppImages.imgSplash,
            ),
          ],
        ),
      ),
    );
  }
}
