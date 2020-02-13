// let str = 'i like to bork and bark but bork with fork is nice as bark as bork';

// function stringSearch(str, pattern) {
// 	let matches = 0;
// 	let strArr = str.split('');
// 	let patternArr = pattern.split('');
// 	strArr.forEach((char, idx) => {
// 		let isMatch = false;
// 		if (char === patternArr[0]) {
// 			for (let i = 0; i < patternArr.length; i++) {
// 				if (strArr[idx + i] === patternArr[i]) {
// 					isMatch = true;
// 				} else {
// 					isMatch = false;
// 					break;
// 				}
// 			}
// 		}
// 		if (isMatch) matches++;
// 	});
// 	console.log(matches);
// }

// stringSearch(str, 'bork');

public class NaiveStringSearch {
    public static void main(final String[] args) {
        String str = "borking";
        stringSearch(str, "aloha");
    }

    public static void stringSearch(final String str, final String pattern) {
        final int matches = 0;
        String[] strArr = str.split("(?!^)");
        String[] patternArr = pattern.split("(?!^)");
    }

}
