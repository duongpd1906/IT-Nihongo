import 'package:flutter/material.dart';

class CommonInput extends StatelessWidget {
  const CommonInput({
    super.key,
    required this.hintText,
    this.controller,
  });

  final String hintText;
  final TextEditingController? controller;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 50,
      width: 300,
      child: TextField(
        controller: controller,
        style: const TextStyle(
          fontSize: 13,
          fontWeight: FontWeight.w400,
        ),
        decoration: InputDecoration(
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(20),
          ),
          hintText: hintText,
          hintStyle: const TextStyle(
            fontSize: 13,
            fontWeight: FontWeight.w400,
          ),
          contentPadding: const EdgeInsets.all(15),
        ),
      ),
    );
  }
}
