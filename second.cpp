#include<iostream>
using namespace std;
class humanbeing{
private:
	string name;
	int age;
public:
	void SetData(int val,string word)
	{
		age=val;
		name=word;
	}
	void getdata()
	{
	   cout<<"iam"<<name<<" with age"<<age<<endl;
	}
};
int main()
{
	humanbeing d1;
	d1.SetData(18,"satya");
	d1.getdata();
}
