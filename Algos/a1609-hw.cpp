#include <iostream>
using namespace std;

int main() {
    double a, b;
    char op;

    cout << "Put down the equation (example 2 + 3): ";

    if (!(cin >> a)) {
        cout << "Error: 1st operand is not a number" << endl;
        return 0;
    }

    if (!(cin >> op)) {
        cout << "Error: no operator" << endl;
        return 0;
    }

    if (!(cin >> b)) {
        cout << "Error: 2nd operand is not a number" << endl;
        return 0;
    }

    switch (op) {
    case '+':
        cout << a + b << endl;
        break;

    case '-':
        cout << a - b << endl;
        break;

    case '*':
        cout << a * b << endl;
        break;

    case '/':
        if (b == 0) {
            cout << "Error: division by 0" << endl;
        }
        else {
            double r = a / b;
            cout << r << endl;
        }
        break;

    case '^': {
        int n = (int)b;
        if (b != n) {
            cout << "Error: exponent must be an integer" << endl;
        }
        else if (a == 0 && n < 0) {
            cout << "Error: zero in negative exponent" << endl;
        }
        else {
            double r = 1;
            int k = n;
            if (k < 0) k = -k;
            for (int i = 0; i < k; i++) {
                r = r * a;
            }
            if (n < 0) r = 1 / r;
            cout << r << endl;
        }
        break;
    }

    default:
        cout << "Error: who is this operator" << endl;
    }

    return 0;
}