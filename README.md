Intsall Node.js and Angular CLI in your machine
To run the backend portion install maven in you system.

Clone this Repository 

**Frontend/UI**-
Open the folder named "document-compare" in command prompt
Run these 2 commands in command promt: 
 - npm install --save-dev @angular-devkit/build-angular
 - ng serve

Install Visual Studio Code as IDE for better use. Same procedure can be followed in VS Code terminal.

**Backend**-
Open the folder named "documentCompare" in another terminal.

Run these commands- (I am using jdk 15 if you have jdk less than 15 you can change the java version in pom.xml in this same folder)
 - mvn clean install
 - mvn spring-boot:run
 
 **Please change these path according to your system before running the backend** 
 
file name: Doc_ComparePOC\documentCompare\src\main\java\com\documentCompare\backend\pdfComparePOC\TestBase.java  
String resultLocation="C:\\Users\\Antara Hembram\\Doc_ComparePOC\\document-compare\\src\\assets\\Results\\";   

file name: Doc_ComparePOC\documentCompare\src\main\java\com\documentCompare\controller\DocCompareController.java  
String exp= "C:\\Users\\Antara Hembram\\Doc_ComparePOC\\PDF\\" + (String)totalList[index][0];  
String act = "C:\\Users\\Antara Hembram\\Doc_ComparePOC\\PDF\\" + (String)totalList[index][1];  
These are the paths where we can keep our PDFs(exp-Expected,act-Actual)

Keep your system path in exp,act and resultLocation of instead **C:\\Users\\Antara Hembram**
       
       

 
