#include <chrono>
#include <iostream>
#include <vector>
#include <random>
using namespace std;

void insertionSort(std::vector<int>& A) {
    int n = A.size();
    for (int j = 1; j < n; j++) {
        int key = A[j];
        int i = j - 1;
        while (i >= 0 && A[i] > key) {
            A[i + 1] = A[i];
            i--;
        }
        A[i + 1] = key;
    }
}

int main() {
    vector<int> A(100000);
    mt19937 rng(42);                          // фикс seed → воспроизводимо
    uniform_int_distribution<int> dist(0, 1000000);
    for (auto& x : A) x = dist(rng);

    long long total = 0;
    int runs = 500;
    for (int r = 0; r < runs; r++) {
        vector<int> B = A;                    // свежая несортированная копия каждый прогон
        auto start = chrono::high_resolution_clock::now();
        insertionSort(B);
        auto finish = chrono::high_resolution_clock::now();
        total += chrono::duration_cast<chrono::nanoseconds>(finish - start).count();
    }
    cout << "Average: " << total / runs << " nanoseconds" << endl;

    return 0;
}