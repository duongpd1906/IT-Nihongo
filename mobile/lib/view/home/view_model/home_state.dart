import 'package:freezed_annotation/freezed_annotation.dart';

import '../../../data/model/topic.dart';

part 'home_state.freezed.dart';

enum HomePageStatus { none, inProgress, success }

@freezed
class HomeState with _$HomeState {
  const factory HomeState({
    required List<Topic> topics,
    required HomePageStatus status,
  }) = _HomeState;

  const HomeState._();

  factory HomeState.initial() => const HomeState(
        topics: [],
        status: HomePageStatus.none,
      );
}
