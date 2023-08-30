#include<iostream>
using namespace std;
class humanbeing{
private:
	int age;
	string name;
public:
	humanbeing(int val,string word)
	{
		age=val;
		name=word;
	}
	humanbeing(humanbeing &d1)
	{
		age=d1.age;
		name=d1.name;
	}
	void display()
	{
		cout<<age<<" "<<name<<endl;
	}
};
int main()
{
	humanbeing d1(19,"las");
	humanbeing d2(d1);
	d2.display();
}