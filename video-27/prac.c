#include<stdio.h>
#include<conio.h>
#include<string.h>

int main(){

int i =0;
window(1,1,80,25);

textbackground(WHITE);
textcolor(GREEN + BLINK);
clrscr();

for(cputs("c");cputs("a");cputs("R")){
    cputs("t");
    delay(50);
    if(kbhit()==13){

       break;
    }
}


    return 0;
}