#include <iostream>
using namespace std;

int main() {
    int arr[5]= {1, 2, 3, 4, 5};
    int v=5, place=-1;
    cin >> v;

}

int 1(){
for (int i = 0; i <= 5; i++) {
        if (arr[i]==v) {
            place = i;
        }
    }
    if place != -1 { cout << place << endl; 
    } else {
        cout << "not found" << endl;
    }

}
int 2(){
    int arr[5]= {1, 2, 3, 4, 5};
    int m=arr[0];
    for (int i = 0; i <= 5; i++) {
        if (arr[i]>m) {
            m = arr[i];
        }
    }
    cout << m << endl;

}
int 3(){
    int arr[5]= {1, 2, 3, 4, 5};
    int d = 0;
    for (int i = 1; i <= 5; i++) {
        if (arr[i] > arr[i-1]) {
            d+=1;
        }
    }
    if (d==5) {
        cout << "sorted" << endl;
    } else {
        cout << "not sorted" << endl;
    }
}



int 4(){ 
int n=-1, fact=1;
cin >> n; 

if (n>=0){
  for (int i = n; i>0; i--){
    fact *= i;
  }
  cout << fact << endl;
}
else {
  cout << "not in the range" << endl;
}}

int 5(){
    cout << "n!"<< "2^n" << "nlog(n)" << "n^2" << n << "log(n)"<< endl;
}

int 6(){
    cout << "n^2" << "nlog(n)" << "2^n" << "n^3"<< endl;
}

int 7(){
    cout <<  << endl;
}

int 8(){
    5 1 4 2 8
    1 5 4 2 8
    1 4 5 2 8
    1 2 4 5 8 
    1 2 4 5 8

    7
    worst
    15 ((1+5)*2.5)
} 