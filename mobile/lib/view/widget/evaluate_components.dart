import 'package:flutter/material.dart';

import '../constant/app_images.dart';

class EvaluateComponents extends StatelessWidget {
  const EvaluateComponents({
    super.key,
    required this.agree,
    required this.disagree,
  });

  final int agree;
  final int disagree;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Image.asset(
          AppImages.imgO,
          color: Colors.green,
          width: 15,
          height: 15,
        ),
        const SizedBox(width: 3),
        SizedBox(
          width: 60,
          child: Text(agree.toString()),
        ),
        Image.asset(
          AppImages.imgX,
          color: Colors.red,
          width: 15,
          height: 15,
        ),
        const SizedBox(width: 3),
        SizedBox(
          width: 50,
          child: Text(disagree.toString()),
        ),
      ],
    );
  }
}
