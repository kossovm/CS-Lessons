#include <iostream>
using namespace std;
int main() {
    

    float a, c;
    char b;
    cout << "Введите выражение: ";
    cin >> a >> b >> c;

    switch (b) {
        case '+':
            cout << a + c;
            break;
        case '-':
            cout << a - c;
            break;
        case '*':
            cout << a * c;
            break;
        case '/':
            if (c == 0) {
                cout << "Ошибка: деление на ноль";
            } else {
                cout << a / c;
            }
            
            break;
        default:
            cout << "Ошибка: неизвестная операция";
    }
}
