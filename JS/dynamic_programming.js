// memoized fib solution

function memoFib(n, memo = []) {
	if (memo[n] !== undefined) return memo[n];
	if (n <= 2) return 1;
	let res = memoFib(n - 1, memo) + memoFib(n - 2, memo);
	memo[n] = res;
	return res;
}

// tabulated fib solution

function tabFib(n) {
	if (n <= 2) return 1;
	let fibNums = [ 0, 1, 1 ];
	for (let i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}
	return fibNums[n];
}

console.log(memoFib(50));
console.log(tabFib(50));
