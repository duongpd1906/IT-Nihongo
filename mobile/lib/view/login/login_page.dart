import 'package:auto_route/auto_route.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:mobile/router/app_router.gr.dart';
import 'package:mobile/view/constant/app_colors.dart';
import 'package:mobile/view/constant/app_images.dart';
import 'package:mobile/view/constant/app_texts.dart';
import 'package:mobile/view/widget/common_button.dart';
import 'package:mobile/view/widget/common_input.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        width: double.infinity,
        height: double.infinity,
        child: SingleChildScrollView(
          child: Column(
            children: [
              Align(
                alignment: Alignment.topLeft,
                child: Image.asset(AppImages.imgShape),
              ),
              const Text(
                AppTexts.welcomeBack,
                style: TextStyle(
                  fontSize: 25,
                  fontWeight: FontWeight.w700,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 30),
              Image.asset(AppImages.imgSplash),
              const SizedBox(height: 30),
              const CommonInput(hintText: AppTexts.enterYourEmail),
              const SizedBox(height: 30),
              const CommonInput(hintText: AppTexts.enterYourPass),
              const SizedBox(height: 30),
              const Text(
                AppTexts.forgotPassword,
                style: TextStyle(
                  fontSize: 13,
                  fontWeight: FontWeight.w700,
                  color: AppColors.lightBlue,
                ),
              ),
              const SizedBox(height: 40),
              const CommonButton(title: AppTexts.login),
              const SizedBox(height: 20),
              RichText(
                text: TextSpan(
                  style: const TextStyle(
                    fontSize: 13,
                    fontWeight: FontWeight.w400,
                  ),
                  children: [
                    const TextSpan(
                      text: AppTexts.alreadayHaveAccount,
                      style: TextStyle(
                        color: Colors.black,
                      ),
                    ),
                    TextSpan(
                      text: AppTexts.signup,
                      style: const TextStyle(
                        color: AppColors.lightBlue,
                      ),
                      recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          AutoRouter.of(context).push(const RegisterRoute());
                        },
                    )
                  ],
                ),
              ),
              const SizedBox(height: 20),
            ],
          ),
        ),
      ),
    );
  }
}
