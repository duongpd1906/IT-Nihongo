class Topic {
  Topic(
    this.name,
    this.address,
    this.description,
    this.images,
    this.agree,
    this.disagree,
  );

  final String name;
  final String address;
  final String description;
  final List<String> images;
  final int agree;
  final int disagree;
}
