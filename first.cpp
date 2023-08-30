#include<iostream>
using namespace std;
class humanbeing{
public:
	string name;
	void display();
	/*{
		cout<<"hi"<<" "<<name<<endl;
	}*/
};
//display outside the class
void humanbeing::display()
{
	cout<<"hi"<<" "<<name<<endl;
}
int main()
{
	humanbeing s1;
	s1.name="durga";
	s1.display();
	//dynamically created*/
	/*humanbeing *s2=new humanbeing();
	s2->name="db";
	s2->display();
	humanbeing *s3=&s1;
	s3->display();*/


}
/*{ 
	int a,b;
	cin>>a>>b;
	cout<<a+b<<endl;
	cout<<"hello";
}*/

