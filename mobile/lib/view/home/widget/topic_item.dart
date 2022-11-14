import 'package:flutter/material.dart';

import '../../constant/app_images.dart';

class TopicItem extends StatelessWidget {
  const TopicItem({super.key});

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
              AppImages.imgCafe,
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
                const Text(
                  'THE DAY COFFEE',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w600,
                  ),
                  maxLines: 2,
                ),
                SizedBox(
                  child: Row(
                    children: [
                      Image.asset(
                        AppImages.imgO,
                        width: 15,
                        height: 15,
                      ),
                      const SizedBox(width: 3),
                      const SizedBox(
                        width: 60,
                        child: Text('1500'),
                      ),
                      Image.asset(
                        AppImages.imgX,
                        width: 15,
                        height: 15,
                      ),
                      const SizedBox(width: 3),
                      const SizedBox(
                        width: 50,
                        child: Text('1500'),
                      ),
                    ],
                  ),
                ),
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
