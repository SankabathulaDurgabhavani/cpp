#include<iostream>
using namespace std;
class humanbeing{
private:
	int *age;
	string *name;
public:
	humanbeing(string word="no name",int val=0)
	{
		name=new string;
		age=new int;
		*name=word;
		*age=val;
	}
	~humanbeing()
	{
		delete name;
		delete age;
	}
};
int main()
{
	humanbeing *bhavani=new humanbeing;
	delete bhavani;
}