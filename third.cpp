#include<iostream>
using namespace std;
class humanbeing{
	private:
		string name;
		int age;
	public:
		humanbeing()
		{
			name="no name";
			age=0;
		}
		humanbeing(string word,int val)
		{
			name=word;
			age=val;
		}
		humanbeing(string word)
		{
			name=word;
			age=0;
		}
		humanbeing(int val)
		{
			name="no name";
			age=val;
		}
		void display()
		{
			cout<<name<<" "<<age<<endl;
		}
};
int main()
{
	humanbeing d1("lakshmi",18);
	humanbeing d2("satya");
	humanbeing d3(19);
	humanbeing d4;
	d1.display();
	d2.display();
	d3.display();
	d4.display();
}