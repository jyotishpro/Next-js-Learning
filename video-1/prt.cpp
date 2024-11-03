#include<iostream>
using namespace std;

int main(){
int b = 5;
int *a = &b;
int **c = &a;

cout<<**c;

    return 0;
}