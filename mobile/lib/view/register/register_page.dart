import 'package:flutter/material.dart';
import 'package:mobile/view/constant/app_texts.dart';

import '../constant/app_images.dart';
import '../widget/common_button.dart';
import '../widget/common_input.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({super.key});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        width: double.infinity,
        child: Column(
          children: [
            Align(
              alignment: Alignment.topLeft,
              child: Image.asset(AppImages.imgShape),
            ),
            const Text(
              AppTexts.createNewAccount,
              style: TextStyle(
                fontSize: 25,
                fontWeight: FontWeight.w700,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 40),
            const CommonInput(hintText: AppTexts.enterFullName),
            const SizedBox(height: 30),
            const CommonInput(hintText: AppTexts.enterYourEmail),
            const SizedBox(height: 30),
            const CommonInput(hintText: AppTexts.enterYourPass),
            const SizedBox(height: 30),
            const CommonInput(hintText: AppTexts.confirmPass),
            const SizedBox(height: 70),
            const CommonButton(title: AppTexts.signup),
            const SizedBox(height: 20),
          ],
        ),
      ),
    );
  }
}
