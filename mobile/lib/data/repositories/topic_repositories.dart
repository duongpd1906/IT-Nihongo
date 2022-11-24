import 'package:mobile/data/model/user.dart';
import '../../view/constant/app_images.dart';
import '../model/topic.dart';

final users = [
  User(0, 'Hoi', 'thanhhoi92xn@gmail.com', '123456', AppImages.imgAvatar),
  User(1, 'Duong', 'thanhhoi92xn@gmail.com', '123456', AppImages.imgAvatar),
  User(2, 'Khai', 'thanhhoi92xn@gmail.com', '123456', AppImages.imgAvatar),
  User(3, 'Bao', 'thanhhoi92xn@gmail.com', '123456', AppImages.imgAvatar),
  User(4, 'Tuan', 'thanhhoi92xn@gmail.com', '123456', AppImages.imgAvatar),
];

final topics = [
  Topic(
    0,
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
    1,
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
      2,
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
    3,
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
  Topic(
    4,
    'THE BEST BEST COFFEE',
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
  Topic(
    5,
    'THE Number 1 COFFEE',
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

class TopicRepositories {
  Future<List<Topic>> getTopics() async {
    await Future.delayed(const Duration(seconds: 2));
    return topics;
  }
}
