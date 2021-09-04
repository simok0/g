import 'package:flutter/material.dart';
import 'widget/bottom_bar.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  TabController controller;
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'BbongFlix',
      theme: ThemeData(brightness: Brightness.dark, primaryColor: Colors.black, accentColor: Colors.white), //ThemeDate
      home: DefaultTabController(
        length: 4,
        child: Scaffold(
          body: TabBarView(
            physics: NeverScrollableScrollPhysics(),
            children: <Widget>[
              Container(),
              Container(),
              Container(),
              Container(),
            ], // <Widget>[]
          ), // TabBarView
          bottomNavigationBar: Bottom(),
        ), // Scaffold
      ), // DefaultTabController
    ); //MaterialApp
  }
}
